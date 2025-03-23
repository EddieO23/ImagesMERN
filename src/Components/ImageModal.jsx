import React, { useContext } from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr'
import AppContext from '../Context/AppContext';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function ImageModal() {
  const {allImages} = useContext(AppContext)
  
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div className='bg-white sm:w-4/6 rounded-lg p-4 sm:p-8 flex flex-col text-black relative'>
        <div className='absolute top-2 sm:top-4 right-2 sm:right-4 h-8 w-8 flex flex-col justify-center items-center rounded-full cursor-pointer bg-black text-white '>
          X
        </div>
        <div className="absolute top-1/2 right-10 bg-white rounded-full p-2 sm:p-5 transform -translate-y-1/2 ">
<GrNext/>
        </div>
        <div className="absolute top-1/2 left-10 bg-white rounded-full p-2 sm:p-5 transform -translate-y-1/2 ">
<GrPrevious/>
        </div>

{allImages && <>
  <LazyLoadComponent src={allImages[0].imageUrl}/>
</>}

      </div>
    </div>
  );
}

export default ImageModal;
