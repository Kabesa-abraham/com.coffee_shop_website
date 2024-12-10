import React from 'react'
import { productData } from '../Assets/repas'
import ProductCard from '../productCard/ProductCard'

const Product = () => {
  return (
    <div className='max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center gap-5' id='premiumDish' >
        <h1 className='text-4xl font-bold text-center' >Nos Produits</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14' >
        {
            productData.map((item) => (
                <ProductCard 
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))
        }
       </div>
    </div>
  )
}

export default Product
