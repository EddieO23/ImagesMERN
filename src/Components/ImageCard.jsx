import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SlOptionsVertical } from 'react-icons/sl';
import AppContext from '../Context/AppContext';
import Modal from './Modal';
import ImageModal from './ImageModal';
import SkeletonLoader from './SkeletonLoader';

function ImageCard() {

  const context = useContext(AppContext)

  return (
    // Container that holds all images
    <div className='h-[90vh] flex flex-wrap content-start overflow-y-scroll gap-14 p-4 sm:gap-x-6'>
      {/* Individual card image */}

      {context?.allImages ? context?.allImages.map((item, index) => (
          <div
            className='w-full h-fit sm:w-[28rem] relative hover:cursor-pointer'
            key={index}
          >
            <div onClick={()=>{context.setCurrentIdx(index)}} className='overflow-hidden rounded-t-lg'>
              <LazyLoadImage
                className='aspect-video w-full hover:scale-110 hover:rotate-2 transition-transform duration-300'
                src={item.imageUrl}
              />
            </div>

            <div className='flex justify-content-between items-start absolute w-full'>
              <div className='bg-white shadow-lg py-2 flex items-center justify-between w-full transition-colors px-2 hover:bg-slate-400'>
                <div className='text-sm max-w-[20rem] overflow-hidden whitespace-nowrap text-ellipsis'>
                  {item.title || 'No title'}
                </div>
                <button
                  onClick={() => {
                    context?.setSelectedImageId(item._id);
                    context?.setSelectedImageTitle(item.title);
                  }}
                  className='text-2xl font-bold'
                >
                  <SlOptionsVertical />
                </button>
              </div>
            </div>
          </div>
        )) : <SkeletonLoader/>}
      {context?.selectedImageId && <Modal />}
      {context?.currentIdx != null && <ImageModal />}
    </div>
  );
}

export default ImageCard;
