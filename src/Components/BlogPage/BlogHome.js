import React from 'react'
import "./BlogCSS.css"
import img2 from "../../Assests/boylearn.png"
import { Link } from 'react-router-dom'

export default function BlogHome() {
  return (
    <div className='blogbg overflow-x-hidden'>
        <div className='row align-items-center'>
            <div className='col'>
                <img src={img2} alt="asd" id='mobresimgb' width={550} height={500}/>
            </div>
            <div className='col p-4'>
                <h1 className='head-3d'>BLOGS!</h1>
                <span className='blogdec mt-5'>
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
                  <Link to="/blog" className='custom-btn'>
                <a className='custom-btnu' href='#'>READ OUR BLOGS</a>
                </Link>
                </div>
                
          
            </div>
            
        </div>
    </div>
  )
}
