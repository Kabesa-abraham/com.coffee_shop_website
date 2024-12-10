import React from 'react'
import Card from '../card/Card.jsx'
import { cafes } from '../Assets/repas.js'

const Menu = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-8  my-5 lg:my-0 lg:mt-5' id='menu'>
      <h1 className='text-4xl font-bold' >Notre Menu</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ' >
        {
            cafes.map((item) =>(
                <Card
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    index={item.id}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Menu
