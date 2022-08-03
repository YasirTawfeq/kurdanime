import React from 'react'
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Menu() {
    const anime=[{index:0,genre:"action"},{index:1,genre:"adventure"},{index:2,genre:"cars"},
                 {index:5,genre:"comedy"},{index:4,genre:"crime"},{index:3,genre:"dementia"},
                  {index:6,genre:"demons"},{index:7,genre:"drama"},{index:8,genre:"sports"},
                 {index:11,genre:"ecchi"},{index:10,genre:"family"},{index:9,genre:"fantasy"},
                 {index:12,genre:"game"},{index:13,genre:"gourmet"},{index:14,genre:"harem"},
                {index:17,genre:"historical"},{index:16,genre:"horror"},{index:15,genre:"josei"},
                {index:18,genre:"kids"},{index:19,genre:"magic"},{index:20,genre:"martial-arts"},
                 {index:23,genre:"mecha"},{index:22,genre:"military"},{index:21,genre:"Mmusic"},
                  {index:24,genre:"mystery"},{index:25,genre:"parody"},{index:26,genre:"police"},
                 {index:29,genre:"psychological"},{index:28,genre:"romance"},{index:27,genre:"samurai"},
                 {index:30,genre:"super-power"},{index:31,genre:"vampire"},{index:32,genre:"yuri"},
                {index:35,genre:"thriller"},{index:34,genre:"shounen"},{index:33,genre:"shoujo"}];
                
  return (
    <div>
    <div className="lg:w-full w-screen flex lg:rounded-md justify-between px-1 bg-gray-700 mb-2 lg:justify-between items-center  text-white drop-shadow-md">
        <Link to="/">
        <div className="px-2 text-2xl text-yellow-400 font-extrabold">
            Kurd<small className="text-yellow-300">ANIME</small>
        </div>
        </Link>
        <div className="flex px-2 " >        
        <div className="group">
            <button className="px-3 py-4 group-hover:bg-yellow-300 font-bold text-yellow-300 text-lg  group-hover:text-black">
                Genres
            </button>
            <div
                className="hidden group-hover:flex flex-col absolute left-0 p-10 w-full rounded-lg bg-gray-700 mt-0 text-black duration-300">
                <div className="pb-5">
                    <h2 className="text-xl font-bold text-yellow-300 ">Genres</h2>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
                   {anime?.map((genre)=>{
                  return(
                    <Link to={`/genre/${genre.genre}`}>
                     <div key={genre.index} className="flex flex-col">
                        <h3 className="text-xs lg:text-sm text-yellow-300">{genre.genre}</h3>
                    </div>
                    </Link>
                  )})}
                    
                </div>
            </div>
        </div>
         <Link to={`/${"Likes"}`} >
         <div className=" cursor-pointer px-3 py-4 hover:bg-yellow-300 text-yellow-300 hover:text-black font-bold text-lg ">
          <FavoriteIcon sx={{ fontSize: 36 }} />
         </div>
         </Link>
                
        <MediaQuery minWidth={600}>
         <div className=" font-mono h-10  rounded-xl mt-2 mb-3 py-2 mx-3  ">
           <div className="flex justify-between mx-2 ">
            <div className="flex bg-yellow-300 p-0.5 lg:mr-1 rounded-lg">
             <button className=" text-xs lg:text-sm  cursor-pointer my-0 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500 rounded-l-lg  bg-gray-800 text-yellow-300 "  >JP</button>
             <button className=" text-xs lg:text-sm  cursor-pointer mx-0.5 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500   bg-gray-800 text-yellow-300 "  >EN</button>
             <button className=" text-xs lg:text-sm  cursor-pointer mr-0.5 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500   bg-gray-800 text-yellow-300 "  >CH</button>
             <button className=" text-xs lg:text-sm  cursor-not-allowed my-0 px-2 py-0.5 focus:bg-gray-600  hover:bg-gray-500 rounded-r-lg  bg-gray-800 text-yellow-300 " disabled>KU<small className="ml-0.5 text-yellow-300  text-xs" >soon</small></button>
            </div>
           </div>
        </div>
        </MediaQuery>
       </div>
    </div>
</div>
  )
}

export default Menu