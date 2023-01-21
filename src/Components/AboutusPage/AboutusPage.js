import React from 'react'
import img1 from "../../Assests/teamwork.png"
import "./AboutCSS.css"

export default function AboutusPage() {
  return (
    <div className='abtusbg'>
        <div className='abtusimg'>
        <img src={img1} alt="teamwork" width={900} height={400} />
        </div>
        <div>
            <p>
            Coding college clubs are student-run organizations that are typically found on college and 
            university campuses and focused on teaching and promoting computer programming and coding 
            skills. They provide an opportunity for students to learn and practice coding in a supportive 
            and engaging environment. They are often open to students of all majors and skill levels,
             and may provide opportunities for members to work on projects and collaborate with others.

            These clubs may provide workshops, tutorials, and lectures on various programming languages 
            and technologies, as well as opportunities to participate in hackathons, coding competitions,
             and other events. They may also offer mentorship and networking opportunities for students 
             interested in pursuing a career in computer science or software development. Some coding 
             college clubs may also have industry partnerships which can provide students with internship 
             and job opportunities.

            Coding college clubs are typically run by a group of elected student officers who are
             responsible for organizing events, activities and managing the club's budget and resources. 
             They are usually sponsored and advised by a faculty or staff member, who provides guidance
              and support to the club's leadership. Joining a coding club in college can be a great way
               for students to gain valuable skills, make connections with other like-minded individuals 
               and also increase their chances for a career in the tech industry.
            </p>
        </div>
    </div>
  )
}
