import React from 'react'
import fullStar from '../Assets/star_icon.png'
import fullncomStar from '../Assets/star_dull_icon.png'

const CardReview = ({name,imgProfile,comment}) => {
  return (
    <div 
        className='max-w-[380px] relative hover:scale-105 duration-150' 
     >
        <div className='flex flex-col gap-6 p-7 shadow-sm shadow-gray-600 rounded-xl' >
            <div className='flex justify-center items-center gap-5' >
              <img src={imgProfile} alt="" className='w-12 h-12 object-cover rounded-full bg-orange-200' />
              <div>
                <h4 className='text-lg font-bold' >{name}</h4>
                <div className='flex gap-2' >
                  <img src={fullStar} alt="" />
                  <img src={fullStar} alt="" />
                  <img src={fullStar} alt="" />
                  <img src={fullStar} alt="" />
                  <img src={fullncomStar} alt="" />
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-xl' >
             <p className='text-gray-500' >{comment}</p>
            </div>
            
        </div>
    </div>
  )
}

export default CardReview
