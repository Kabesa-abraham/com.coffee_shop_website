import React from 'react'
import './footer.css'
import { MdCoffee, MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-l to-[#f5ceb3] from-[#cc7d48] rounded-t-3xl mt-10 ' >
      <div className=' max-w-7xl mx-auto  flex flex-col gap-5 items-center justify-center text-black px-10 py-10' >
        <div className='w-full flex flex-wrap items-start gap-8'>
            <a href="#home">
                <div className='flex items-center gap-3' >
                    <MdCoffee className='text-6xl text-[#a86132] ' />
                    <h2 className='font-bold text-4xl' >Cafe Shop.</h2>
                </div>
            </a>

            <div className='w-full flex flex-wrap justify-around gap-7' >
              <div className='someOptionContainer'>
                <h3 className='titleOption' >Liens</h3>
                <ul className='someOptionContainerInside' >
                  <li>
                    <a href="#repas">Menu</a>
                  </li>
                  <li>
                    <a href="#about">A propo</a>
                  </li>
                  <li>
                    <a href="#premiumDish">Menu</a>
                  </li>
                  <li>
                    <a href="#customerReview">Critiques</a>
                  </li>
                </ul>
              </div>

              <div className='someOptionContainer' >
                <h3 className='titleOption' >Menu</h3>
                <ul className='someOptionContainerInside' >
                  <li>
                    <a href="#repas">Nos Plats</a>
                  </li>
                  <li>
                    <a href="#premiumDish">Menu Premium</a>
                  </li>
                </ul>
              </div>

              <div className='someOptionContainer' >
                <h3 className='titleOption' >Nous Contactez</h3>
                <div className='someOptionContainerInside' >
                  <p className='flex items-center' >
                    <MdEmail className='text-white' /> : CafeShop@gmail.com
                  </p>
                  <p className='flex items-center' >
                    <MdPhone className='text-white' /> : +243 843 453 555
                  </p>
                  <span className='flex items-center justify-between gap-2 text-2xl text-[#914c1e]' >
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaYoutube/></a>
                  </span>
                </div>
              </div>
          </div>

        </div>
          <div className='text-gray-900 text-sm'> 
            <p>&#169;copyright developpé par <span className='text-[#a86132]' >KabesaYebula</span> |  All Right Reserved.</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer
