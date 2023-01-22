import React,{useState,useEffect} from 'react'
import BlogCard from '../Cards/BlogCard/BlogCard'
import "./BlogCSS.css"
import { Client } from '../../lib/client'
import BlogLoading from '../Cards/LoadingPageComp/BlogLoading';
import Filter from '../Cards/FilterBtn/Filter';
import { format } from "date-fns";

// new filter date
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export default function BlogPages() {
    const [Blogpost, setBlogpost] = useState([]);

    // creating for filters
    const [filtered,setfiltered] = useState([]);

    // date filteration
    const [startdate,setstartdate] = useState(new Date());
    const [enddate,setenddate] = useState(new Date());
    const [datefilter,setdatefilter] = useState([])

    let filteredName = Blogpost.filter((blg)=>{
      // let montyear = format(new Date(blg.publishedAt), "MM dd yyyy")
      // console.log(montyear)
      if(filtered === 'mostpopular'){ 
          return blg.viewscount > 10;
      }else if(filtered === 'lesscommon'){
          return blg.viewscount < 10;
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
              } | order(publishedAt desc)`
    )
      .then((data) => {
        setBlogpost(data);
        setfiltered(data)
        setdatefilter(data)

        setloading(true);
        console.log(data);
        
      })
      .catch(console.error)
    },[]);
    
    // for date range
    const selectionRange = {
      startDate: startdate,
      endDate: enddate,
      key: 'selection',
    }
    const handleSelect = (da) =>{

      let filterdatedata = datefilter.filter((blgg)=>{
        let date = new Date(blgg.publishedAt);
        let nwda = date.toLocaleDateString();
        console.log(nwda);
        return (
          nwda >= da.selection.startDate && 
          nwda <= da.selection.endDate
        );
        
      })


      setstartdate(da.selection.startDate)
      setenddate(da.selection.endDate)
      // setfiltered(filterdatedata)

    }
  return (
    <div className='blog-page'>
      <Filter filterValueSelected={onFilterValueSelected}/>
      {/* <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      /> */}
    <div className="card-blog">
      
            {loading ? filteredName[0] && 
              
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
                )
              
            ):<BlogLoading />}
          </div>
          </div>
          

  )
}
