import React from 'react'
import fullStar from '../Assets/star_icon.png'
import fullncomStar from '../Assets/star_dull_icon.png'

const ProductCard = ({name,image,price}) => {
  return (
    <div 
        className='max-w-[380px] bg-[#f8f0ea] relative' 
    >
      <div className='flex flex-col gap-6 p-3 shadow-xl rounded-xl' >
        <div className='overflow-hidden rounded-xl' >
            <img src={image} alt="" className='bg-orange-100 w-[320px] h-[310px] object-cover rounded-xl hover:scale-125 duration-150' />
        </div>
        <div className='flex flex-col items-center gap-4' >
            <h4 className='text-2xl font-bold' >{name}</h4>
            <div className='flex gap-2' >
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullncomStar} alt="" />
            </div>
            <p className='font-bold' >${price}</p>
            <button className='px-3 py-2 bg-[#f5cfb4] rounded-full font-semibold hover:bg-[#eec3a4] duration-150 ' >
                Ajouter au Panier
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
