import React,{useState,useEffect} from 'react'
import BlogCard from '../Cards/BlogCard/BlogCard'
import "./BlogCSS.css"
import { Client } from '../../lib/client'
import BlogLoading from '../Cards/LoadingPageComp/BlogLoading';
import Filter from '../Cards/FilterBtn/Filter';
import {motion,AnimatePresence} from "framer-motion";
import Noitems from '../Cards/BaseComp/Noitems';

export default function BlogPages() {
    const [Blogpost, setBlogpost] = useState([]);

    // creating for filters
    const [filtered,setfiltered] = useState([]);


    let filteredName = Blogpost.filter((blg)=>{   
      if(filtered === 'mostpopular'){ 
          return blg.viewscount > 10;
      }else if(filtered === 'lesscommon'){
          return blg.viewscount < 10;
      }else if(filtered === 'sortbyinc'){
          return Blogpost.sort(function(a,b){
            if ( a.viewscount > b.viewscount ) return 1;
            if ( a.viewscount < b.viewscount ) return -1
            
          })
      }else if(filtered === 'sortbydec'){
        return Blogpost.sort(function(a,b){
          if ( a.viewscount > b.viewscount ) return -1;
          if ( a.viewscount < b.viewscount ) return 1
          
        })
      }
      else if(filtered === 'Education'){
          return blg.blgtype === 'Education';
      }
      else if(filtered === 'Technology'){
        return blg.blgtype === 'Technology';
      }
        else if(filtered === 'Food'){
          return  blg.blgtype?blg.blgtype === 'Food':<Noitems />;
          
      }
      else if(filtered === 'Fashion'){
        return blg.blgtype === 'Fashion';
      }
      else if(filtered === 'Travel'){
        return blg.blgtype === 'Travel';
      }
      else if(filtered === 'Music'){
        return blg.blgtype === 'Music';
      }
        else {
          return blg;
        }
      })

    // creating a function to get a value from ther to here
    function onFilterValueSelected(filter) {
        console.log(filter)
        setfiltered(filter)
    }

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
                "blgtype": blogtype -> blogtype,
              } | order(publishedAt desc)`
    )
      .then((data) => {
        setBlogpost(data);
        setfiltered(data)

        setloading(true);
        console.log(data);
        
      })
      .catch(console.error)
    },[]);
    

    // this is for if u dont have any content to display no items
    const getcontent = (len,filteredName)=>{
      return (
        
        <div>
          <motion.div layout className="card-blog"> 
          <AnimatePresence>
          {
            len>0?
            filteredName[0] && 
              
            filteredName.map((story) => (
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
              )):<Noitems/>
          }
          </AnimatePresence>
          </motion.div>
        </div>
       
      )
    }
  return (
    <div className='blog-page'>
      <Filter filterValueSelected={onFilterValueSelected}/>
      
      {/* <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      /> */}
    <div className="card-blog">      
    {console.log(filteredName.length)}
            {
            loading ? getcontent(filteredName.length,filteredName):<BlogLoading />}
          </div>
          </div>
          

  )
}
