import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const Card = ({image,name}) => {
  return (
    <div 
        className='max-w-[380px] bg-[#f7ece4] relative' 
    >
      <div className='flex flex-col gap-6 p-7 shadow-xl rounded-xl' >
        <div className='overflow-hidden rounded-xl' >
            <img src={image} alt="" className='bg-orange-100 w-[320px] h-[220px] object-cover rounded-xl hover:scale-125 duration-150' />
        </div>
        <div className='flex flex-col gap-4' >
            <h4 className='text-2xl font-bold' >{name}</h4>
            <div className='w-full flex justify-between items-center px-5' >
                <div className='flex gap-4' >
                  <button className='py-2 px-3 border-2 border-[#c97a45] rounded-lg bg-[#f7c3a0] font-semibold hover:text-slate-500 duration-150 ' >Chaud</button>
                  <button className='py-2 px-3 border-2 border-[#457ac9] rounded-lg bg-[#a0bcf7] font-semibold hover:text-slate-500 duration-150' >Froid</button>
                </div>
                <button className='px-4 py-3 bg-[#f7c3a0] rounded-3xl text-xl hover:text-slate-500 duration-150' >
                  <MdShoppingCart/>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
