import React, { useContext } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppContext from '../Context/AppContext';

function ImageModal() {
  const context = useContext(AppContext)
  
  
  const handleNext = () => {
    context?.setCurrentIdx((context?.currentIdx + 1) % context?.allImages.length)
  }
  const handlePrevious = () => {
    context?.setCurrentIdx((context?.currentIdx - 1 + context?.allImages.length) % context?.allImages.length)
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div className='w-[90vw] bg-white sm:w-4/6 rounded-lg p-4 sm:p-8 flex flex-col text-black relative'>
        <div onClick={()=>{context?.setCurrentIdx(null)}} className='absolute top-2 sm:top-4 right-2 sm:right-4 h-8 w-8 flex flex-col justify-center items-center rounded-full cursor-pointer bg-black text-white '>
          X
        </div>
        <div onClick={handleNext} className='absolute shadow-2xl top-1/2 right-10 bg-white rounded-full p-2 sm:p-5 transform -translate-y-1/2 cursor-pointer '>
          <GrNext />
        </div>
        <div onClick={handlePrevious} className='absolute shadow-2xl top-1/2 left-10 bg-white rounded-full p-2 sm:p-5 transform -translate-y-1/2 cursor-pointer '>
          <GrPrevious />
        </div>

        {context?.allImages && (
          <>
            <LazyLoadImage
              className='aspect-video w-full rounded-2xl'
              src={context?.allImages[context?.currentIdx].imageUrl}
              alt='image'
            />
            <p className='mt-2 text-black text-sm sm:text-base text-center'>
              {context?.allImages[context?.currentIdx].title || 'This image has no title'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageModal;
