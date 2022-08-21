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
       /* API request for anime Id */
       useEffect(()=>{
         setLoading(true);
         Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
         .then((response)=>{ 
         setWatchList(response.data);
         const firstEpisode=response.data.episodesList.length-1;
         setEpsId(response.data.episodesList[firstEpisode].episodeId);
         setLoading(false);
         })
         .catch((e)=>{console.log(e);})
        },[id])
        /* API request for episodes url */
        useEffect(()=>{
          setLoading(true);
          Axios.get(`https://gogoanime.herokuapp.com/vidcdn/watch/${epsId}`)
          .then((response)=>{
          setUrl(response.data.Referer);
          setLoading(false);
          })
          .catch((e)=>{console.log(e);})
         },[epsId])

      
      let urlchange=epsId.lastIndexOf('-');
      let lastpart=epsId.substring(urlchange+1);


    return (<>
      {loading? 
       <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
      :<div>
        <center key={watchList.animeId} className="text-yellow-300">  
        {/* vidstream video player */}
         <div className="w-full  ">
          <iframe key={url} className="w-full fixed lg:static top-0 aspect-square lg:aspect-video  lg:rounded-t-3xl " allowFullScreen src={url}  title={watchList.animeTitle}></iframe>
         </div>
         {/* number of current episode */}
          <div className=" w-full  mt-64 lg:mt-0  top-64 bg-gray-800 shadow-sm shadow-orange-300  p-3 flex justify-between items-center border-b-2 border-yellow-300">
           <p className=" text-sm lg:text-lg font-bold">{watchList.animeTitle}</p>
           <p className=" text-sm lg:text-lg font-bold">Episode {lastpart}</p>
          </div>
         {/* code for anime genres */}
         <div className="w-full  mt-3 mb-0">
           <div className=" flex justify-center flex-wrap ">
            <ul className="w-full  mt-3 p-4 text-left  flex flex-wrap justify-center">
              {watchList.genres?.map((genre)=>{
                return <li key={genre.index} className="p-1 px-2 mx-1 text-yellow-300 text-center font-bold text-xs lg:text-sm border-yellow-300 border-2 rounded-lg mt-2" >{genre}</li>
              })}
            </ul>          
          </div>
       </div>
       {/* code for anime episodesList */}
       <div className=" flex flex-wrap-reverse flex-row-reverse justify-center w-full my-3">
         {watchList.episodesList?.map((eps)=> 
          <div onClick={()=>{setEpsId(eps.episodeId)}}  key={eps.episodeId} className=" focus:bg-slate-400 hover:bg-yellow-500 font-bold text-gray-600 w-16 bg-yellow-300 text-xs p-1 rounded-md m-0.5  cursor-pointer active:bg-red-600  ">
            {eps.episodeNum} 
          </div>)}
       </div>
        <Link to={`/AnimeHome/${id}/${title}`} >
           <i class=" fixed top-3 left-3 fa-solid fa-arrow-left text-3xl bg-gray-500 py-0.5 px-2 rounded-full "></i>
        </Link>  
      </center>
      <p className="text-center font-bold text-xl py-14 text-yellow-300">KURD<small>ANIME</small></p>
     </div>}
     </>
   )}

export default Watch