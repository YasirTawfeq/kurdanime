import React from 'react'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function Watch() {
       const {id,title}=useParams();
       const [watchList,setWatchList]=useState([]);
       const [loading,setLoading] = useState(false);
       useEffect(()=>{
        setLoading(true);
        
        Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
        .then((response)=>{console.log(response.data); setWatchList(response.data)
        })
        .catch((e)=>{console.log(e);})
       
        setTimeout(()=>{
            setLoading(false);
        },2000)

      },[id])


  return (
    <>
     {loading? 
    <div className=" flex justify-center items-center mt-52"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div>
     
     <center key={watchList.animeId} className="text-yellow-300">  
       
       <div className="w-full lg:w-1/2 mt-3">
        <iframe className="w-full aspect-video ..." src="https://www.youtube.com/embed/_sBizpKdDAk"  title="شارة وان بيس One Piece Arabic opening ending" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay></iframe>
      </div>
        
      <div className=" w-full lg:w-1/2 mt-2 lg:ml-3 lg:mr-3 p-3 flex justify-center items-center border-b-2 border-yellow-300">
        <p className=" text-xl font-bold">{watchList.animeTitle}</p>
      </div>

        <div className="w-full lg:w-1/2 mt-3">
            <div className=" flex justify-center flex-wrap ">
      
            </div>
       
       </div>

      <div className=" flex flex-wrap-reverse flex-row-reverse justify-center w-full lg:w-1/2 mt-3 mb-16">
        {watchList.episodesList?.map((eps)=> 
       <ul  className=" font-bold text-black w-16 bg-yellow-300 text-xs p-1 rounded-lg m-0.5  cursor-pointer active:bg-red-600  ">
           
            <a href={eps.episodeUrl}><li key={eps.episodeId}>{eps.episodeNum}</li> </a>
          
           
       </ul>
        )}
      </div>
      
     <div className="w-full lg:w-1/2 mt-3 ">
        <Link to={`/AnimeHome/${id}/${title}`} >
          <svg className=" cursor-pointer bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>  
    </div>
     </center>
    
    </div>}
    </>
  )
}

export default Watch