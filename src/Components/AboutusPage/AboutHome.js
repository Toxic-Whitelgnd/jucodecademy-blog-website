import React, { useEffect } from 'react'
import "./AboutCSS.css"
import img3 from "../../Assests/abtus.png"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutHome() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className=' abtbgg overflow-x-hidden pb-5'>
      <div className='row align-items-center abtbg'>
        <div className='col p-4' data-aos-duratiob="2200" data-aos-easing="ease-out" data-aos="fade-right">
            <h1 className='head-3d'>ABOUTUS!</h1>
            <span className='abtdec'>Welcome to our JUcodeademy college club! We are a group of students who are passionate 
                about coding and technology. Our mission is to provide a platform for our peers to explore 
                their interests, develop new skills, and connect with like-minded individuals.</span>

                <div className="btnl">
                <Link to="/Aboutus" className='custom-btnl'>
                <a className='custom-btnlr' href='#'>LEARN MORE</a>
                </Link>
                
                </div>
        </div>
        <div className='col' data-aos="fade-left">
            <img src={img3} alt="blogimage" id='mobresimga'height={500} width={500}/>
        </div>
      </div>
    </div>
    </div>
  )
}
