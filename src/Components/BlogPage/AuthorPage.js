import React,{useState,useEffect} from 'react'
import { Client } from '../../lib/client'
import "./AuthorPage.css"
import { Link, useParams } from 'react-router-dom'
import BlockContent from "@sanity/block-content-to-react";
import  * as Fiico from "react-icons/fi" 
import * as Bsico from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

export default function AuthorPage() {
    const [authprof,setauthprof] = useState([])
    const {slug} = useParams()

    useEffect(()=>{
        Client.fetch(`*[slug.current == "${slug}"]{
            name,
            bio,
            instagram,
            twitter,
            email,
            linkedin,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=>{
            setauthprof(data);
            console.log(data)
        }).catch(console.error)
    },[]);
  return (
    <div>
      {
        authprof && authprof.map((auth,idx)=>(
            <div>
              <div className="auth-img">
                <img src={auth.image.asset.url} alt="author profile" className='authimg' width={200} height={200} />
              </div>
              <div className='authname'>
                <Bsico.BsPenFill id="pen" /><h1>{auth.name}</h1>
              </div>
              
              <div className="authbio">
                <BlockContent
                blocks={auth.bio}
                projectId="ryjgs5uy"
                dataset="production"
                // serializers={serializer}
                className="BlockContent "
                />
              </div>

                <div className="pas">
                <div className="a-s">
                  
                <a href={`mailto:${auth.email}`}><AiOutlineMail className='face ml-2 mt-2' /></a>
                <a href={`${auth.instagram}`}><Fiico.FiInstagram className='insta ml-2 mt-2' /></a>
                <a href={`${auth.twitter}`}><Fiico.FiTwitter className='twitter ml-2 mt-2'/></a>
                <a href={`${auth.linkedin}`}><Fiico.FiLinkedin className='github ml-2 mt-2'/></a>
                </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}
