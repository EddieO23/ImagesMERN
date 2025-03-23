import React from 'react';

function Modal() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center transition-all duration-150 bg-black bg-opacity-75 transform scale-100'>
      <div className='bg-white w-11/12 sm:w-[500px] h-80 rounded-lg p-4 sm:p-8 flex justify-between items-center text-white relative'>
        <div className='absolute top-2 right-2 sm:top-4 sm:right-4 h-8 w-8 flex justify-center items-center rounded-full bg-black'>
          X
        </div>
        {/* <>
          <button className='bg-blue-500 font-extrabold h-16 w-48 py-4 px-2 rounded-xl text-sm sm:text-base'>
            Update Image Title
          </button>
          <button className='bg-red-500 font-extrabold h-16 w-48 py-4 px-2 rounded-xl text-sm sm:text-base'>
            Delete Image
          </button>
        </> */}

        <div className='flex w-full flex-col gap-4'>
          <input
            type='text'
            autoFocus
            className='h-12 roundedl-lg bg-slate-300 text-black px-5 text-sm sm:text-base '
          />
          <div className="flex justify-between gap-2">
            <button className='bg-gray-500 p-4 w-full hover:bg-gray-900 text-white rounded-md text-sm sm:text-base'>Discard</button>
            <button className='bg-blue-700 p-4 w-full hover:bg-blue-800 text-white rounded-md text-sm sm:text-base'>Update</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
