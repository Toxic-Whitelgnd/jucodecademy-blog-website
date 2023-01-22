import React,{useState,useEffect} from 'react'
import BlogCard from '../Cards/BlogCard/BlogCard'
import "./BlogCSS.css"
import { Client } from '../../lib/client'
import BlogLoading from '../Cards/LoadingPageComp/BlogLoading';

export default function BlogPages() {
    const [Blogpost, setBlogpost] = useState([]);

    // for loading state
    const [loading,setloading] = useState(false);

    const scrollUp = () => {
      window.scroll(0, 0);
      };
  
      useEffect(() => {
          scrollUp();
      }, []);

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
        setloading(true);
        console.log(data);
      })
      .catch(console.error)
    },[]);
  return (
    <div className="card-blog">
       
            {loading ? Blogpost[0] && 
              
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
                    viewscount={story.viewscount}
                  />
                )
              
            ):<BlogLoading />}
          </div>
          

  )
}
