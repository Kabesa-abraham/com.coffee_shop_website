import React, { useEffect, useState } from 'react'
import './home.css'
import bgImge1 from '../Assets/img4.jpg'
import bgImge2 from '../Assets/img2.jpg'
import bgImge3 from '../Assets/img5.jpg'
import bgImge4 from '../Assets/img7.jpg'
import bgImge5 from '../Assets/img8.jpg'
import {motion, AnimatePresence} from 'framer-motion'

const bgImage = [ //tableau d'images du background
    bgImge1,
    bgImge2,
    bgImge3,
    bgImge4,
    bgImge5
]

const Home = () => {

   const [currentIndex,setCurrentIndex] = useState(0);
   useEffect(() =>{
    const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % bgImage.length )
    },8000);
    return () => 
        clearInterval(interval)
   },[])

  return (
    <div className='relative max-w-full min-h-screen bg-black overflow-hidden' id='home'>
        <AnimatePresence>
            <motion.img 
                key={currentIndex}
                src={bgImage[currentIndex]} alt="" 
                className='w-full min-h-screen object-cover opacity-55'
                initial={{scale: 1}} 
                animate={{scale:1.2,opacity:0}}  
                transition={{duration:20,bounce:20}} 
            />
        </AnimatePresence>

        <div className='absolute w-full h-full top-0 text-white flex items-center' >
            <div className='max-w-7xl w-full mx-auto flex items-center justify-center px-3 lg:px-10' >
                <div className='max-w-4xl flex flex-col justify-center gap-7' >
                    <motion.h1 
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-orange-100 relative' 
                        initial={{opacity:0,left:-100}}
                        whileInView={{opacity:1,left:0}}
                        viewport={{amount:0.5}}
                        transition={{duration:.8,delay:.2}}
                    >Commencer votre journée avec une bonne tasse de Café chaude </motion.h1>

                    <motion.p 
                        className='text-xs sm:text-sm font-semibold relative' 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{amount:0.5}}
                        transition={{duration:.8,delay:.5}}
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quidem suscipit mollitia, 
                        sed voluptatem corporis nihil enim voluptatibus debitis necessitatibus tenetur alias quam fuga sapiente.
                         Iure eligendi magni veniam magnam.
                    </motion.p>

                    <div className='flex gap-10 items-center justify-center flex-wrap' >
                        <button className='homeBtn'>
                            Ajouter au Panier
                        </button>
                        <button className='homeBtn'>
                            Plus de Menu
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
