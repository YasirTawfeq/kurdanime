import '../App.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';



function NewEpisode() {
       const [newEpisod,setNewEpisode]=useState([]);
       const [type,setType]= useState(1);
       const [page,setPage]= useState(1);

       useEffect(()=>{
         Axios.get(`https://gogoanime.herokuapp.com/recent-release?type=${type}&page=${page}`)
        .then((response)=>{console.log(response.data)
        setNewEpisode(response.data)
        console.log(response.data)
        }).catch((e)=>{console.log(e);})
        
      },[type,page]);

      const handleChange = (event, value) => {
       setPage(value);
       };
      
  return (
    <>
    <div className=" m-5 md:m-3 ">
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 py-1.5 ">
       <div className="flex justify-between lg:justify-evenly mx-3 ">
        <div className=" text-sm cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-lg  bg-gray-800 text-yellow-300 "><Link to="/Home" >Home page</Link></div>
        <div className="flex">
          <button className=" text-sm  cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-l-lg  bg-gray-800 text-yellow-300 " onClick={()=>setType(1)} >JP</button>
          <button className=" text-sm  cursor-pointer mx-0.5 px-2 py-1 hover:bg-gray-500   bg-gray-800 text-yellow-300 " onClick={()=>setType(2)} >EN</button>
          <button className=" text-sm  cursor-pointer mr-0.5 px-2 py-1 hover:bg-gray-500   bg-gray-800 text-yellow-300 " onClick={()=>setType(3)} >CH</button>
          <button className=" text-sm  cursor-not-allowed my-0 px-2 py-1 hover:bg-gray-500 rounded-r-lg  bg-gray-800 text-yellow-300 " disabled>KU<small className="ml-0.5 text-yellow-300  text-xs" >soon</small></button>
        </div>
       </div>
      </div>

      <div className="text-2xl text-yellow-300 my-4 text-center font-bold ">
        New Episodes
      </div>
        
      <div className="flex flex-row-reverse flex-wrap justify-evenly p-0 lg:px-20 ">
         {newEpisod.slice(0,21)?.map((anime)=>{
        return(
        <AnimeCard  key={anime.episodeId} num={anime.episodeNum} id={anime.animeId} title={anime.animeTitle} img={anime.animeImg} subORdub={anime.subOrDub}/>
        )})}


          <div className="bg-yellow-300 rounded-lg my-4">
           <Pagination count={5} page={page}  onChange={handleChange} />
          </div>
          
        
      </div>
    </div>
    </>
  )
}



export default NewEpisode;