import React from 'react'
import Footer from '../Components/Footer'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useDispatch} from 'react-redux'
import {addLike,removeLike} from '../redux/likeSlice'
import {useSelector} from 'react-redux'

function AnimeHome() {
      
       const {id,title}=useParams();
       const [loading,setLoading] = useState(true);
       const [animeList,setAnomeList]=useState([]);
       const [animeDetail,setDetail] = useState([]);
       const [like,setLike] = useState(false);
       
       /* code for geting likeid */
       const dispatch =useDispatch();
        const liked=useSelector(
         (state)=>state.likeId
         );
       
       /* API request to find the anime id */  
       useEffect(()=>{
          Axios.get(`https://gogoanime.herokuapp.com/search?keyw=${title}`) 
          .then((response)=>{
          setAnomeList(response.data.filter((para)=>para.animeId===id))
          if(liked.data.find((e)=>e.id ===id)){setLike(true)}else{setLike(false)}
          })
          .catch((e)=>{console.log(e);})
        },[id,title,liked.data])
       
       /* API request for anime details */
         useEffect(()=>{
          Axios.get(`https://gogoanime.herokuapp.com/anime-details/${id}`)
          .then((response)=>{ 
          setDetail(response.data)
         })
         .catch((e)=>{console.log(e);})
         },[id])
         
         /* code to disable Watch button if there was no episode to watch (works for upcoming anime) */
         let film;
         if(animeDetail.totalEpisodes>0){film=true}else{film=false};

        setTimeout(function(){ setLoading(false);},2000)
       
      return (<>
       {loading? 
         <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300"><HashLoader color={"yellow"} loading={loading} size={60} /></div>
         :<div><>
         {/*code for anime details*/}
          {animeList?.map((anime)=>{return(
           <center key={anime.animeId} className="text-yellow-300 h-full ">
            <div className=" lg:flex flex-row-reverse p-0 m-0 " >
             <div className="lg:w-1/2">
              <img className=" w-full h-80 lg:min-h-full lg:rounded-tr-3xl object-center " src={anime.animeImg} alt={anime.animeTitle} />
             </div>
            <div className="lg:w-1/2 lg:border-r-2 border-yellow-300 lg:min-h-full ">
              <div className=" w-full  mt-2  p-3 flex justify-between items-center border-b-2 border-yellow-300">
                <Link to="/Home" className="fixed top-3 left-3" >
                  <i className="fa-solid fa-arrow-left text-3xl bg-gray-500 py-0.5 px-2 rounded-full "></i>
                 </Link>
                <p className=" text-xl font-bold">{anime.animeTitle}</p>
                <i className="cursor-pointer"  onClick={()=>{setLike(!like);if(!like){dispatch(addLike({id:anime.animeId,title:anime.animeTitle,img:anime.animeImg}))}else{dispatch(removeLike({id:anime.animeId,title:anime.animeTitle,img:anime.animeImg}))} }} >{like?<FavoriteIcon sx={{ fontSize: 36 }} />:<FavoriteBorderIcon sx={{ fontSize: 36 }} />}</i>
             </div>
             {/*code for anime genres*/}
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
             {/* code to disable Watch button if there was no episode to watch (works for upcoming anime) */}
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