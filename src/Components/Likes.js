import React from 'react'
import {useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
import Menu from './Menu'
import AnimeCard from './AnimeCard'
import {useSelector} from 'react-redux'


function Likes() {
    
      const [loading,setLoading] = useState(true);
      
          
       /* redux geting likeid */
         const like=useSelector(
         (state)=>state.likeId
         );
        console.log(like);
        setTimeout(()=>{setLoading(false)},1500)
       

  return (
    <div>
      {loading?<div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300 "><HashLoader color={"yellow"} loading={loading} size={60} /></div>
      :<div>
          <div className="m-0 lg:m-4"><Menu/></div>
        <div className="text-center text-xl text-yellow-300 font-bold py-4" >Liked Anime</div>
        <div className="flex flex-row-reverse flex-wrap justify-evenly p-0  ">
         {like.data.map((anime)=>{
          return(    
           <AnimeCard  key={anime.id} id={anime.id} title={anime.title} img={anime.img}/>
         )})}
        </div>
        
       <p className="text-center font-bold text-xl py-20 text-yellow-300">KURD<small>ANIME</small></p>

        </div>}
        

    </div>
  )
}

export default Likes