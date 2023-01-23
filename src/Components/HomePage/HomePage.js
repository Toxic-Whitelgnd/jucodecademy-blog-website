import React,{useEffect} from 'react'
import "./HomePage.css";
import img1 from "../../Assests/homeimage.jpg";
import BlogHome from '../BlogPage/BlogHome';
import AboutHome from '../AboutusPage/AboutHome';
import ContactHome from '../ContactPage/ContactHome';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
    <div className=' homebgg overflow-x-hidden pb-5'>
      <div className='row align-items-center homebg'>
        <div className='col p-4'>   
            <h1 className='wel'>WELCOME!</h1>
            <span className='homesp'>To our JUcodecademy Blog website</span>
        </div>
        <div data-aos="fade-left" data-aos-duration="4000" data-aos-easing="ease-in" className='col align-items-center'>
            <img src={img1} alt="blogimage" id="mobresimg" height={500} width={700}/>
        </div>
      </div>
    </div>
    </div>
  )
}
