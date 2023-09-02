import '../App.css'
import AnimeCard from './AnimeCard'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

function NewEpisode() {
       const [newEpisod,setNewEpisode]=useState<Array<{animeId:number;episodeId:number;animeTitle:string;animeImg:any;episodeNum:number;subOrDub:string;}>>([{animeId:0,episodeId:0,animeTitle:"",animeImg:"",episodeNum:0,subOrDub:""}]);
       const [type,setType]= useState<number>(1);
       const [page,setPage]= useState<number>(1);

       /* API request for new episodes*/
       useEffect(()=>{
         Axios.get(`https://web-production-2ae42.up.railway.app/recent-release?type=${type}&page=${page}`)
         .then((response)=>{
         setNewEpisode(response.data)
         }).catch((e)=>{console.log(e);})
       },[type,page]);

      const handleChange = (event:any, value:number) => {
       setPage(value);
       };
      
  return (
    <>
    <div className=" m-1 ">
      {/* language option buttons */}
      <div className=" font-mono w-full h-10 bg-yellow-300 rounded-xl mt-2 mb-3 py-1.5 ">
       <div className="flex justify-between lg:justify-evenly mx-3 ">
        <div className=" text-sm cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-lg  bg-gray-800 text-yellow-300 "><Link to="/Home" >Home page</Link></div>
        <div className="flex">
          <button className=" text-sm  cursor-pointer my-0 px-2 py-1 hover:bg-gray-500 rounded-l-lg focus:bg-gray-600  bg-gray-800 text-yellow-300 " onClick={()=>setType(1)} >JP</button>
          <button className=" text-sm  cursor-pointer mx-0.5 px-2 py-1 hover:bg-gray-500 focus:bg-gray-600   bg-gray-800 text-yellow-300 " onClick={()=>setType(2)} >EN</button>
          <button className=" text-sm  cursor-pointer mr-0.5 px-2 py-1 hover:bg-gray-500 focus:bg-gray-600   bg-gray-800 text-yellow-300 " onClick={()=>setType(3)} >CH</button>
          <button className=" text-sm  cursor-not-allowed my-0 px-2 py-1 hover:bg-gray-500 rounded-r-lg focus:bg-gray-600  bg-gray-800 text-yellow-300 " disabled>KU<small className="ml-0.5 text-yellow-300  text-xs" >soon</small></button>
        </div>
       </div>
      </div>
       {/* new episodes code */}
       <div className="text-xl lg:text-2xl text-yellow-300 my-4 text-center font-bold ">
         New Episodes
       </div>  
      <div className="grid xl:grid-cols-6 lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center">
         {newEpisod.slice(0,21)?.map((anime)=>{
          return(
           <AnimeCard  key={anime.episodeId} num={anime.episodeNum} id={anime.animeId} title={anime.animeTitle} image={anime.animeImg} subORdub={anime.subOrDub}/>
         )})}
      </div>
      <div className="bg-gray-500 text-yellow-300 flex  justify-center rounded-lg">
       <Pagination  count={5} page={page}  onChange={handleChange} />
     </div>
    </div>
  </>
)}



export default NewEpisode;