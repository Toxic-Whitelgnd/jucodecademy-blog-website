import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img4 from "../../Assests/ctt.png"
import "./ContactCSS.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactHome() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className='ctbg overflow-x-hidden'>
        <div className='row align-items-center'>
            <div className='col' data-aos="fade-right" data-aos-duratiob="1200" data-aos-easing="ease-in">
                <img src={img4} alt="asd" id='mobresimga' width={550} height={500} className="ctt-img"/>
            </div>
            <div className='col p-4' data-aos-duratiob="2200" data-aos-easing="ease-out" data-aos="fade-left">
                <h1 className='head-3d'>CONTACT US!</h1>
                <span className='blogdec'>
                Welcome to our blog! We're so excited to have you here. Our goal is to provide 
                valuable information and insights on a variety of topics that interest you.
                From lifestyle and wellness to business and technology, we strive to bring you
                the latest news and trends. We also aim to inspire and engage our readers
                through personal stories and real-life experiences. Our team of writers are
                experts in their fields and are dedicated to bringing you high-quality content.
                We encourage you to explore our website, read our articles and leave your 
                thoughts and comments. We look forward to connecting with you!
                </span>
                <br />

                <div className="btnr">
                <Link to="/Contactus" className='custom-btn'>
                <a className='custom-btnu' href='#'>CONTACT US</a>
                </Link>
                
                </div>
                
          
            </div>
            
        </div>
    </div>
    </div>
  )
}
