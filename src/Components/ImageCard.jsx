import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {SlOptionsVertical} from 'react-icons/sl'
import AppContext from '../Context/AppContext'
import Modal from './Modal';

function ImageCard() {
  const arr = new Array(10).fill(0);
  const {allImages} = useContext(AppContext)

  
  return (
    // Container that holds all images
    <div className='h-[90vh] flex flex-wrap content-start overflow-y-scroll gap-14 p-4 sm:gap-x-6'>
      {/* Individual card image */}

      {allImages && allImages.map((item, index) => (
        <div
          className='w-full h-fit sm:w-[28rem] relative hover:cursor-pointer'
          key={index}
        >
          <div className='overflow-hidden rounded-t-lg'>
            <LazyLoadImage
              className='aspect-video w-full hover:scale-110 hover:rotate-2 transition-transform duration-300'
              src={item.imageUrl}
            />
          </div>

          <div className='flex justify-content-between items-start absolute w-full'>
            <div className='bg-white shadow-lg py-2 flex items-center justify-between w-full transition-colors px-2 hover:bg-slate-400'>
              <div className='text-sm max-w-[20rem] overflow-hidden whitespace-nowrap text-ellipsis'>
                {item.title ||  "No title"}
              </div>
              <button className='text-2xl font-bold'>
                <SlOptionsVertical/>
              </button>
            </div>
          </div>
          {/* <Modal/> */}
        </div>
      ))}
    </div>
  );
}

export default ImageCard;
