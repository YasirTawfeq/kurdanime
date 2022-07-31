import React from 'react'
import Footer from './Footer'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";

function AnimeHome() {
      
       const {id,title}=useParams();
       const [loading,setLoading] = useState(false);
       const [animeList,setAnomeList]=useState([]);
       const [animeDetail,setDetail] = useState([]);
      
       useEffect(()=>{
        setLoading(true);
        Axios.get(`https://gogoanime.herokuapp.com/search?keyw=${title}`) 
        .then((response)=>{
        console.log(response.data)
        setAnomeList(response.data.filter((para)=>para.animeId===id))
        setLoading(false);
        })
        .catch((e)=>{console.log(e);})

      },[id,title])

       useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
        .then((response)=>{console.log(response.data); setDetail(response.data)
        })
        .catch((e)=>{console.log(e);})
      },[id])
      let film;
      if(animeDetail.totalEpisodes>0){film=true}else{film=false};
    return (
    <>
     {loading? 
    <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div>
      <>
      {animeList?.map((anime)=>{return(
     <center key={anime.animeId} className="text-yellow-300 h-full ">
      <div className=" lg:flex flex-row-reverse p-0 m-0 " >
       <div className="lg:w-1/2">
       <img className=" w-full h-80 lg:min-h-full lg:rounded-tr-3xl object-cover " src={anime.animeImg} alt={anime.animeTitle} />
      </div>
      <div className="lg:w-1/2 lg:border-r-2 border-yellow-300 lg:min-h-full ">
       <div className=" w-full  mt-2  p-3 flex justify-center items-center border-b-2 border-yellow-300">
        <Link to="/Home" className="fixed top-3 left-3" >
          <svg className=" cursor-pointer bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>
        <p className=" text-xl font-bold">{anime.animeTitle}</p>
      
       </div>

        <ul className="w-full  mt-3 p-4 text-left  flex flex-wrap justify-center">
          {animeDetail.genres?.map((genre)=>{
            return <li key={genre.index} className="p-1 px-2 mx-1 text-yellow-300 text-center font-bold text-xs lg:text-sm border-yellow-300 border-2 rounded-lg mt-2" >{genre}</li>
          })}
        </ul>
     
       <div className="w-full  mt-3 mx-1 p-4 text-left min-h-full lg:text-lg">

            
          <ul className="text-yellow-400 ">
            <li><span className="text-yellow-200">Name :</span> {animeDetail.animeTitle}</li>
            <li><span className="text-yellow-200">Type :</span> {animeDetail.type}</li>
            <li><span className="text-yellow-200">Year :</span> {animeDetail.releasedDate}</li>
            <li><span className="text-yellow-200">Statue :</span> {animeDetail.status}</li>
            <li><span className="text-yellow-200">Episodes :</span> {animeDetail.totalEpisodes}</li>
            <li className="mt-2"><span className="text-yellow-200">Description :</span> {animeDetail.synopsis}</li>
          </ul>
      {film?
      <div className="w-full mt-3">
        <Link to={`/Watch/${anime.animeId}/${title}`}>
          <div className="w-full p-2 font-bold uppercase text-gray-600 bg-yellow-300 rounded-lg cursor-pointer text-center "> Watch  </div>
        </Link>
      </div>:<div></div>}
          

      </div>

      </div>
      </div>  
      
         
  
      </center>
     )})}
     </>
        <Footer/>
    </div>}
    </>
  )
}

export default AnimeHome