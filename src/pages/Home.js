import React from 'react'
import {useParams} from 'react-router-dom';
import Footer from '../Components/Footer';
import AnimeCard from '../Components/AnimeCard';
import AnimeSmallCard from '../Components/AnimeSmallCard';
import Axios from 'axios';
import Menu from '../Components/Menu';
import { useState,useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import Pagination from '@mui/material/Pagination';
import MediaQuery from 'react-responsive';


function Home() {
 
       const {name,genre}=useParams();
       const [loading,setLoading] = useState(false);
       const [animeList,setAnomeList]=useState([]);
       const [top,setTop]=useState([]);
       const [movie,setMovie]=useState([]);
       const [state,setStatu] = useState(false);
       const [input,setInput] = useState(name);
       const [search,setSearch]= useState("");
       const [type,setType]= useState(1);
       const [page,setPage]= useState(1);
       
       /*API request for anime genre */

       useEffect(()=>{
        setLoading(true);
        if(genre){
        Axios.get(`https://gogoanime.herokuapp.com/genre/${genre}?page=${page}`)
        .then((response)=>{
        setAnomeList(response.data)
        setLoading(false);
        }).catch((e)=>{console.log(e);})
    
       } else {
        /*API request for popular anime*/
        Axios.get(`https://gogoanime.herokuapp.com/popular?type=${type}&page=${page}`)
        .then((response)=>{
        setAnomeList(response.data);
        setLoading(false);
        }).catch((e)=>{console.log(e);})}


        },[type,page,genre])
       
        /*API request to search for anime */
        useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/search?keyw=${"king"||input}`) 
        .then((response)=>{
         setSearch(response.data)
        if(name){ setTimeout(()=>{ setStatu(true);},100)}
        })
        .catch((e)=>{console.log(e);})
        },[input,name])
        
        /*API request for top airing anime*/
        useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/top-airing`) 
        .then((response)=>{
         setTop(response.data.slice(5))})
        .catch((e)=>{console.log(e);})
        },[])
        
        /*API request for anime movie */
        useEffect(()=>{
        Axios.get(`https://gogoanime.herokuapp.com/anime-movies`) 
        .then((response)=>{
         setMovie(response.data.slice(15))})
        .catch((e)=>{console.log(e);})
        },[])
       
        const submitHandler=(e)=>{
        e.preventDefault();
        setStatu(true);}

        const handleChange = (event, value) => {
       setPage(value);
       };

       console.log(animeList)
  return (
    <>
     
    {loading? 
    <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300 "><HashLoader color={"yellow"} loading={loading} size={60} /></div>
    :<div className=" p-0 lg:p-0">
     
      <Menu />
        {/*search for anime form */}
        <form className="flex items-center mb-3 mx-1 px-1" onSubmit={submitHandler}>   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="w-full">
            <input type="text" id="simple-search" value={input} onChange={(e) =>setInput(e.target.value)} className="bg-gray-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Anime Name ..." required="Enter the name please"/>
          </div>
         <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-black bg-yellow-300 rounded-lg border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           <span className="sr-only">Search</span>
         </button>
       </form>
         
         {/*chose language code*/}
        <div className=" font-mono h-10  rounded-xl mt-2 mb-3 py-1.5 mx-3  ">
          <div className="flex justify-between mx-2 ">
           <div className="cursor-pointer my-0 px-2 py-0.5 hover:bg-gray-500 rounded-lg  bg-gray-800 text-yellow-300 text-xl lg:text-2xl font-bold ">{genre?<span className="uppercase">{genre}</span>:<span>Popular</span>}</div>
             <MediaQuery maxWidth={600}>
              <div className="flex bg-yellow-300 p-0.5 lg:mr-1 rounded-lg">
               <button className=" text-xs lg:text-sm  cursor-pointer my-0 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500 rounded-l-lg  bg-gray-800 text-yellow-300 " onClick={()=>setType(1)} >JP</button>
               <button className=" text-xs lg:text-sm  cursor-pointer mx-0.5 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500   bg-gray-800 text-yellow-300 " onClick={()=>setType(2)} >EN</button>
               <button className=" text-xs lg:text-sm  cursor-pointer mr-0.5 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500   bg-gray-800 text-yellow-300 " onClick={()=>setType(3)} >CH</button>
               <button className=" text-xs lg:text-sm  cursor-not-allowed my-0 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500 rounded-r-lg  bg-gray-800 text-yellow-300 " disabled>KU<small className="ml-0.5 text-yellow-300  text-xs" >soon</small></button>
              </div>
             </MediaQuery>
           </div>
         </div>
      
      <div className="flex xl:flex-row-reverse justify-between flex-col-reverse">

      <div className="text-yellow-300 grid grid-cols-1 grid-rows-2  xl:w-1/4 ">
        {/*code for top airing anime*/}
        <div className=" mt-3 p-3">
         <div className=" font-mono rounded-xl py-1.5  ">
           <div className="flex flex-col  justify-left bg-gray-700 ml-2 rounded-md p-3 ">  
            <div className="cursor-pointer rounded-lg text-yellow-300 text-left text-xl font-bold mb-0.5 ">
             Top Airing
            </div>
            <div className="flex flex-col-reverse flex-wrap justify-center p-0 ">
              {top?.map((anime)=>{
              return(
              <AnimeSmallCard  key={anime.animeId} id={anime.animeId} num={anime.latestEp} title={anime.animeTitle} img={anime.animeImg}/>
               )})}
            </div>
          </div>
         </div>
        </div>

        {/*code for anime movie*/}
        <div className=" p-3">
          <div className=" font-mono rounded-xl py-1.5  ">
            <div className="flex flex-col  justify-left bg-gray-700 ml-2 rounded-md p-3 ">
             <div className="cursor-pointer rounded-lg text-yellow-300 text-left text-xl font-bold mb-0.5 ">
               Upcoming Movies
             </div>
             <div className="flex flex-col-reverse flex-wrap justify-center p-0 ">
               {movie?.map((anime)=>{
               return(
               <AnimeSmallCard  key={anime.animeId} id={anime.animeId} num={anime.latestEp} title={anime.animeTitle} img={anime.animeImg}/>
               )})}
             </div>
           </div>
         </div>
       </div>


      </div>

      <div className=" xl:w-3/4 w-full mt-1 p-2 ">
      {/*code for search anime*/}
      {state?
        <div className="flex flex-row-reverse flex-wrap justify-evenly p-0  "> 
          {search?.map((anime)=>{
          return(
          <AnimeCard  key={anime.animeId} id={anime.animeId} title={anime.animeTitle} img={anime.animeImg}/>
          )})}
        </div>
      :<>{/*code for popular anime*/}
         <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center ">
            {animeList?.map((anime)=>{
            return(      
            <AnimeCard  key={anime.animeId} date={anime.releasedDate} id={anime.animeId} title={anime.animeTitle} img={anime.animeImg}/>
            )})}
          </div>
          <div className="bg-gray-500 text-yellow-300 flex  justify-center rounded-lg">
             <Pagination  count={5} page={page}  onChange={handleChange} />
          </div>
        </>}
      </div>
    </div>
   </div>
    }
     <Footer/>
    </>
  )
}

export default Home;