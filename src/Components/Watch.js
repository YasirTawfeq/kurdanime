import React from 'react'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function Watch() {
       const {id,title}=useParams();
       const [url,setUrl] = useState("");
       const [epsId,setEpsId] = useState("");
       const [watchList,setWatchList]=useState([]);
       const [loading,setLoading] = useState(false);
       
       useEffect(()=>{
        setLoading(true);
        
        Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
        .then((response)=>{ 
         setWatchList(response.data);
         const firstEpisode=response.data.episodesList.length(-1);
         setEpsId(firstEpisode.episodeId);
         setLoading(false);
         })
        .catch((e)=>{console.log(e);})
        
       

      },[id])

       useEffect(()=>{
        setLoading(true);
       
        Axios.get(`https://gogoanime.herokuapp.com/vidcdn/watch/${epsId}`)
        .then((response)=>{
         setUrl(response.data.Referer);
         console.log(response.data.Referer)
        setLoading(false);
        })
        .catch((e)=>{console.log(e);})
      },[epsId])

      
      let urlchange=epsId.lastIndexOf('-');
      let lastpart=epsId.substring(urlchange+1);


  return (
    <>
     {loading? 
    <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div>
     
     <center key={watchList.animeId} className="text-yellow-300">  
       
       <div className="w-full  ">

        <iframe key={url} className="w-full fixed lg:static top-0 aspect-square lg:aspect-video lg:rounded-t-3xl " allowFullScreen src={url}  title={watchList.animeTitle}></iframe>
      </div>
        
      <div className=" w-full  mt-64 lg:mt-0  top-64 bg-gray-800 shadow-sm shadow-orange-300  p-3 flex justify-between items-center border-b-2 border-yellow-300">
        <p className=" text-sm lg:text-lg font-bold">{watchList.animeTitle}</p>
        <p className=" text-sm lg:text-lg font-bold">Episod {lastpart}</p>
      </div>

        <div className="w-full  mt-3 mb-0">
            <div className=" flex justify-center flex-wrap ">
              <ul className="w-full  mt-3 p-4 text-left  flex flex-wrap justify-center">
                {watchList.genres?.map((genre)=>{
                return <li key={genre.index} className="p-1 px-2 mx-1 text-yellow-300 text-center font-bold text-xs lg:text-sm border-yellow-300 border-2 rounded-lg mt-2" >{genre}</li>
                })}
              </ul>
          
            </div>
       
       </div>

      <div className=" flex flex-wrap-reverse flex-row-reverse justify-center w-full my-3">
        {watchList.episodesList?.map((eps)=> 
       <div onClick={()=>{setEpsId(eps.episodeId)}}  key={eps.episodeId} className=" focus:bg-slate-400 hover:bg-yellow-500 font-bold text-gray-600 w-16 bg-yellow-300 text-xs p-1 rounded-md m-0.5  cursor-pointer active:bg-red-600  ">
             {eps.episodeNum} 
       </div>
        )}
      </div>
      
    
        <Link to={`/AnimeHome/${id}/${title}`} >
          <svg className=" cursor-pointer fixed top-3 left-3 bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>  
    
     </center>

     <p className="text-center font-bold text-xl py-14 text-yellow-300">KURD<small>ANIME</small></p>
    
    </div>}
    </>
  )
}

export default Watch