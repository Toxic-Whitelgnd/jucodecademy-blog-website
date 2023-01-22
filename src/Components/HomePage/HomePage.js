import React from 'react'
import "./HomePage.css";
import img1 from "../../Assests/homeimage.jpg";
import BlogHome from '../BlogPage/BlogHome';
import AboutHome from '../AboutusPage/AboutHome';
import ContactHome from '../ContactPage/ContactHome';

export default function HomePage() {
  return (
    <div>
    <div className=' homebgg overflow-x-hidden pb-5'>
      <div className='row align-items-center homebg'>
        <div className='col p-4'>   
            <h1 className='wel'>WELCOME!</h1>
            <span className='homesp'>To our JUcodecademy Blog website</span>
        </div>
        <div className='col align-items-center'>
            <img src={img1} alt="blogimage" id="mobresimg" height={500} width={700}/>
        </div>
      </div>
    </div>
    <BlogHome />
    <AboutHome />
    <ContactHome />

    </div>
  )
}
