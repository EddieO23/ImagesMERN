import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import AppContext from '../Context/AppContext'

function ImageUploader() {

  const context = useContext(AppContext)

  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const base64 = await convertToBase64(event.target.files[0]);

      console.log(base64);

      setFile(base64);
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDiscard = (event) => {
    event.preventDefault();
    setFile('');
    setTitle('');
    setKey((prevKey) => prevKey + 1);
  };

  const handleUploadImage = async (event) => {
    event.preventDefault();
    try {
      if (!file) return;
      setLoading(true);

      const payload = {
        title: title,
        image: file,
      };

      await axios.post(
        'https://server-beta-red-85.vercel.app/api/upload',
        payload
      );

      setFile('');
      setTitle('');
      setKey((prevKey) => prevKey + 1);
      context?.setRefresh((prevKey) => prevKey + 1);
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center h-full absolute w-full p-4 sm:p-8 right-0'>
      <div className='bg-white p-6 w-full sm:w-[600px] rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold mb-4'>Upload Image</h2>
        <form onSubmit={handleUploadImage} className='space-y-4 flex flex-col'>
          <p className='text-sm italic'>Only JPG files</p>
          <input
            key={key}
            onChange={handleFileChange}
            type='file'
            className='border border-gray-300 p-2 rounded-md'
          />
          <input
            type='text'
            onChange={handleTitleChange}
            placeholder='image title'
            className='border-gray-300 border p-2 rounded-md'
          />
          {!loading ? <div className='flex justify-end gap-2'>
            <button
              onClick={handleDiscard}
              className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md'
            >
              Discard
            </button>
            <button
              disabled={!file}
              className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md disabled:opacity-70'
            >
              Upload
            </button>
          </div> :
        <Loader />}
        </form>
      </div>
    </div>
  );
}

export default ImageUploader;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
