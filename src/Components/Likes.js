import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import HashLoader from "react-spinners/HashLoader";
import Menu from './Menu'
import AnimeCard from './AnimeCard'
import {useSelector} from 'react-redux'


function Likes() {
    
      const [loading,setLoading] = useState(true);
      const [liked,setLiked]= useState(false)
      
          
       /* redux geting likeid */
         const like=useSelector(
         (state)=>state.likeId
         );
        console.log(like.data);
         useEffect(()=>{
          if(like.data.length <= 0){setLiked(true)}else{setLiked(false)}
        },[like.data])
        console.log(liked);
        setTimeout(()=>{setLoading(false)},1500)
       

  return (
    <div>
      {loading?<div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300 "><HashLoader color={"yellow"} loading={loading} size={60} /></div>
      :<div>
          <div className="m-0 lg:m-4"><Menu/></div>
  
        {liked?
        <div className=" flex flex-col items-center justify-center min-h-screen p-2 rounded-md text-center text-yellow-300 text-xl font-bold  " >
         No Liked Anime
         <Link to="/Home" className="mt-5"  >
          <svg className=" cursor-pointer bg-yellow-300 w-9 h-9  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
        </Link>
         </div>:<>
         <div className="text-center text-xl text-yellow-300 font-bold py-4" >Liked Anime</div>
        <div className="flex flex-row-reverse flex-wrap justify-evenly p-0  ">
         {like.data.map((anime)=>{
          return(    
           <AnimeCard  key={anime.id} id={anime.id} title={anime.title} img={anime.img}/>
         )})}
        </div>
        </>
        }
        
       <p className="text-center font-bold text-xl py-20 text-yellow-300">KURD<small>ANIME</small></p>

        </div>}
        

    </div>
  )
}

export default Likes