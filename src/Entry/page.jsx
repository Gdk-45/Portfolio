

import './page.css'
import { useEffect, useState } from 'react';  
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useMousePosition from '../utils/useMousePosition';
import { useNavigate } from 'react-router';
export default function Entry() {
    const navigate = useNavigate();
  function handleclick(){
    navigate('/MainPage')
  }
   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <div className="main" data-aos="fade-in">
         <button className='fixed top-0 right-3 font-light text-white z-30 text-5xl' onClick={handleclick}>X</button>
          <div className="fixed">
          </div>
          <motion.div 
            className="mask"
            animate={{
              WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration:0.5}}
          >
            <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='pa'>
              <img className="w-[100%] h-[50%]" src="https://media.licdn.com/dms/image/v2/D5622AQFhdV8IDlDG9Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709402884622?e=1733961600&v=beta&t=j2nVEMwjGt1W7timW0gIKSeHeTtQn2GlETpUdFpcY7k"/>
            </p>
          </motion.div>
          
          <div className="body"> 
            <p  className='font-light'>Hi, I'm <span className='spa'>Ajay Dattu</span>, but everyone calls me Damo. I'm from India.</p>
          </div>
    </div>
  );
}