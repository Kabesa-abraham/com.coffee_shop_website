import React from 'react'
import { profileReview } from '../Assets/repas.js'
import CardReview from './CardReview'

const CustomerReview = () => {
  return (
    <div className='max-w-7xl min-h-screen mx-auto flex flex-col justify-center items-center gap-10 md:gap-20 ' id='customerReview'>
        <h1 className='text-4xl font-bold text-center' >  Critiques des Clients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
            {
                profileReview.map((item) =>(
                    <CardReview 
                      key={item.id}
                      name={item.name}
                      imgProfile={item.profieleImg}
                      comment={item.reviews}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default CustomerReview