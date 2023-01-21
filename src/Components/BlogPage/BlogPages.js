import React,{useState,useEffect} from 'react'
import BlogCard from '../Cards/BlogCard/BlogCard'
import "./BlogCSS.css"
import { Client } from '../../lib/client'

export default function BlogPages() {
    const [Blogpost, setBlogpost] = useState([]);
    useEffect(()=>{
        Client.fetch(
            `*[_type == "post"] {
                title,
                slug,
                body,
                blogcaption,
                viewscount,
                publishedAt,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
                "name": author -> name,
                "authslug": author -> slug,
              } | order(publishedAt desc)`
    )
      .then((data) => {
        setBlogpost(data);
        console.log(data);
      })
      .catch(console.error)
    },[]);
  return (
    <div className="mt-2 card-blog">
       
            {Blogpost[0] && 
              
                Blogpost.map((story) => (
                  <BlogCard
                    key={story.slug.current}
                    title={story.title}
                    img={story.mainImage.asset.url}
                    goTo={story.slug.current}
                    author={story.name}
                    publish={story.publishedAt}
                    body={story.body}
                    captions={story.blogcaption}
                    authslug={story.authslug.current}
                  />
                )
              
            )}
          </div>
          

  )
}
