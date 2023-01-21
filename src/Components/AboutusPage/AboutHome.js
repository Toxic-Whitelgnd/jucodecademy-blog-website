import React from 'react'
import "./AboutCSS.css"
import img3 from "../../Assests/abtus.png"

export default function AboutHome() {
  return (
    <div>
      <div className=' abtbgg overflow-x-hidden pb-5'>
      <div className='row align-items-center abtbg'>
        <div className='col p-4'>
            <h1 className='abt'>ABOUTUS!</h1>
            <span className='abtdec'>Welcome to our JUcodeademy college club! We are a group of students who are passionate 
                about coding and technology. Our mission is to provide a platform for our peers to explore 
                their interests, develop new skills, and connect with like-minded individuals.</span>

                <div className="btnl">
                <a className='custom-btnl' href='/#/blog'>LEARN MORE</a>
                </div>
        </div>
        <div className='col'>
            <img src={img3} alt="blogimage" height={500} width={500}/>
        </div>
      </div>
    </div>
    </div>
  )
}
