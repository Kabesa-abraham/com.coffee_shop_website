import React, { useEffect, useState } from 'react'
import './header.css'
import {MdClose, MdCoffee, MdMenu} from 'react-icons/md'

const Header = () => {

    const [open ,setOpen] = useState(false);
    const handleClose = () =>{
        setOpen((prev) => prev===true? prev=false : prev=true  )
    }

    // const [scrolled,setScrolled] = useState(false); //pour changer de couleur lorsque on scroll
    // useEffect(()=>{
    //   const myScroll = () =>{
    //     if(window.scrollY > 200){
    //       setScrolled(true)
    //     }else{
    //       setScrolled(false)
    //     }}
    //     window.addEventListener("scroll", myScroll)
  
    //     return () =>{
    //       window.removeEventListener("scroll" , myScroll)
    //     }
    //   },[])

  return (
    <div className={`fixed shadow-lg bg-gradient-to-l to-[#f5ceb3] from-[#cc7d48] z-50 w-full py-5`} >
        <div className='max-w-7xl mx-auto flex justify-between items-center px-3 lg:px-7' >
            <a href="#home">
                <div className='flex items-center gap-3' >
                    <MdCoffee className='text-2xl text-[#a86132] ' />
                    <h2 className='font-bold' >Cafe Shop.</h2>
                </div>
            </a>

            <div className={`${!open&&'activer'} navbarResponsive flex md:flex-row md:static items-center gap-10 `} >
                <ul className='flex flex-col md:flex-row items-center gap-9 font-semibold relative optionContainer' >
                    <li onClick={()=>{handleClose()}}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#repas">Menu</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#about">A propo</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#premiumDish">Produits</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#customerReview">Critiques</a>
                    </li>
                </ul>  
            </div>

            <div className='flex gap-5' >
                <button
                    className='py-2 border lg:border-2 border-[#975224] text-[#fdfdfd] px-3 lg:px-5 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#975224] duration-150'
                    >Se connecter
                </button>

                {
                    open&& open?(
                        <MdClose className='buttonNav md:hidden' onClick={handleClose} />
                    ):(
                        <MdMenu className='buttonNav md:hidden' onClick={handleClose} />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Header
