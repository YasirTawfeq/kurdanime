import '../App.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';

function NewEpisode() {
       const [newEpisod,setNewEpisode]=useState([]);
       
       useEffect(()=>{
         Axios.get("https://gogoanime.herokuapp.com/recent-release")
        .then((response)=>{console.log(response.data)
        setNewEpisode(response.data)
        }).catch((e)=>{console.log(e);})
        
      },[])

  return (
    <>
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 p-2 ">
        <ul className="flex justify-evenly ">
        <li className=" text-sm cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-lg  bg-gray-800 text-yellow-300 "><Link to="/" >New Episods</Link></li>
        <li className=" text-sm cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-lg  bg-gray-800 text-yellow-300 "><Link to="/Home" >Home page</Link></li>
        </ul>
      </div>
        
      <div className="flex flex-row-reverse flex-wrap justify-evenly p-0 lg:pl-20 lg:pr-20 ">
         {newEpisod.slice(0,21)?.map((anime)=>{
        return(
        <AnimeCard  key={anime.episodeId} id={anime.animeId} title={anime.animeTitle} img={anime.animeImg}/>
        )})}
      </div>
    </div>
    </>
  )
}



export default NewEpisode;