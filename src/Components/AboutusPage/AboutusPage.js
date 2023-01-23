import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../Assests/teamwork.png"
import "./AboutCSS.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutusPage() {

  useEffect(() => {
    AOS.init();
  }, [])

  const scrollUp = () => {
    window.scroll(0, 0);
    };

    useEffect(() => {
        scrollUp();
    }, []);
  return (
    <div className='abtusbg'>
        <div className='abtusimg'>
        <img src={img1} alt="teamwork" id="mobresimgab" width={900} height={400} />
        </div>
        <div className='container mt-3 '>
          <h1 className='d-flex justify-content-center abtush'>Vision</h1>
            <p className='p-2 abtusp'  >
            Coding college clubs are student-run organizations that are typically found on college and 
            university campuses and focused on teaching and promoting computer programming and coding 
            skills. They provide an opportunity for students to learn and practice coding in a supportive 
            and engaging environment. They are often open to students of all majors and skill levels,
             and may provide opportunities for members to work on projects and collaborate with others.
            </p>
            &nbsp;
            <p className='p-2 abtusp' >
            These clubs may provide workshops, tutorials, and lectures on various programming languages 
            and technologies, as well as opportunities to participate in hackathons, coding competitions,
             and other events. They may also offer mentorship and networking opportunities for students 
             interested in pursuing a career in computer science or software development. Some coding 
             college clubs may also have industry partnerships which can provide students with internship 
             and job opportunities.
            </p>
            &nbsp;
            <p className='p-2 abtusp' >
            Coding college clubs are typically run by a group of elected student officers who are
             responsible for organizing events, activities and managing the club's budget and resources. 
             They are usually sponsored and advised by a faculty or staff member, who provides guidance
              and support to the club's leadership. Joining a coding club in college can be a great way
               for students to gain valuable skills, make connections with other like-minded individuals 
               and also increase their chances for a career in the tech industry.
            </p>
        </div>
        <div className='container MIS' >
          <h1 className='d-flex justify-content-center abtush' >Mission</h1>
          &nbsp;
          <div>
            <p className='abtusp' >
            The mission of a coding club may vary depending on the specific club, but generally, the goal is 
            to provide a space for individuals to learn and improve their programming skills through group 
            activities, projects, and mentorship. The club may also aim to promote computer science education 
            and encourage interest in the field among its members.
            </p>
          </div>
        </div>
        &nbsp;
          <div className='container p-4'>
            <p className='abtusp' >
                To get to know about us more click on learn more to view our JUCodeacademy website
            </p>
            <div className="btnl text-center">
                
                <a className='custom-btnll' href='https://community.codecademy.com/jain-university-ju/'>LEARN MORE</a>
                
            </div>
          </div>
    </div>
  )
}
