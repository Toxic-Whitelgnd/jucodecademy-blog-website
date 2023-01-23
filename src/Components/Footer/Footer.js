import React from 'react'
import "./Footer.css"
import  * as Fiico from "react-icons/fi" 


export default function Footer() {
  return (
    <div>
        <div className="footer-basic">
        <footer>
            <div className="socialico">

                <a href="https://www.facebook.com/people/Codecademy-JU-Chapter/100073383202752/?sk=grid"><Fiico.FiFacebook className='ml-2 mt-2' /></a>
                <a href="https://www.instagram.com/codecademyjuchapter/"><Fiico.FiInstagram className='ml-2 mt-2' /></a>
                <a href="https://twitter.com/codecademyjuch"><Fiico.FiTwitter className='ml-2 mt-2'/></a>
                <a href="https://github.com/Codecademy-JU-Chapter"><Fiico.FiGithub className='ml-2 mt-2'/></a>
                
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#/Aboutus">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            {/* <div className="float-right mr-10  lg:-mt-20 ">
                <Topbtn />
            </div> */}
            
            <p className="copyright">Made by Tarun 💖 © 2023</p>
        </footer>
    </div>
    </div>
  )
}
