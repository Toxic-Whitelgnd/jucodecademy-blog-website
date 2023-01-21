import React from 'react'
import "./BlogCard.css"
import { format } from "date-fns";
import {Link} from "react-router-dom"

export default function BlogCard({authslug,captions,key,title,img,goTo,author,publish,body}) {
  return (
    <div>
      {/* card -1 */}
      {/* TODO: need to code from here */}
      <Link to={goTo} className="linkk" >
      <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{background:`url(${img})`}} > 
      <div className='card-desc'>
        <h1 className='card-h1'>{title}</h1>
        <p>{captions}</p>
        <div className="date">{publish && <>{format(new Date(publish), "MMMM dd , yyyy")}</>}</div>
        <div className="tags">
            <Link to={`blogauthor/${authslug}`} className="authorcard">
          <div className="tag">By:@{author}</div>
          </Link>
        </div>
      </div>
    </a>
    </Link>
    </div>
  )
}
// style={{'backgroundImage':'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)'}}
