import React from 'react'
import image1 from '../Assets/img6.jpg'

const About = () => {
  return (
    <div className='max-w-7xl min-h-screen mx-auto px-10 flex flex-col gap-10 justify-center items-center my-5' id='about' >
        <h1 className='text-3xl md:text-4xl font-bold text-center' >A propos de Nous</h1>
        <div className='w-full flex flex-wrap lg:flex-nowrap gap-10 md:gap-20' >
            <img src={image1} alt="" className='w-[500px] max-h-[500px] object-cover rounded-2xl' />
            <div className='flex flex-col items-start gap-5 md:gap-8' >
                <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold' >Que ce qui fait de notre café si spécial?</h1>
                <p className='text-sm lg:text-lg' >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur amet minus numquam enim voluptatum
                    consequatur dicta ipsum fugiat culpa. Ea consequuntur odit dolorum quo, perspiciatis deleniti mollitia tempore accusantium!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur amet minus numquam enim voluptatum
                    consequatur dicta ipsum fugiat culpa. Ea consequuntur odit dolorum quo, perspiciatis deleniti mollitia tempore accusantium!
                </p>
                <p className='text-sm lg:text-lg' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur amet minus numquam enim voluptatum
                consequatur dicta ipsum fugiat culpa. Ea consequuntur odit dolorum quo, perspiciatis deleniti mollitia tempore accusantium!
                </p>
                <button className='border-2 py-2 px-8 border-[#ec9e66] rounded-full hover:bg-[#eca979] hover:text-white duration-150' >
                    En savoir plus
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
