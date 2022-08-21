import '../App.css';
import {Link} from 'react-router-dom';
import {delimiter} from '../asset/TextLimiter';

 /* Anime big card*/
function Anime(anime) {
  return (
    <Link to={`/AnimeHome/${anime.id}/${anime.title}`}>
       <div className="mx-0.5 w-44 h-[280px] overflow-hidden rounded-sm text-yellow-300 ">
        <div className=" hover:relative z-0 group  bg-gray-600 text-yellow-300 hover:bg-yellow-300 hover:text-gray-600">
         <img className=" group-hover:brightness-50   w-full h-52 " src={anime.img} alt={anime.title}/>
          <div className="flex justify-between px-1 ">
           {anime.num?<p>{"Eps "+anime.num}</p>:<p>{anime.date}</p>}
           {anime.subORdub?<p>{anime.subORdub}</p>:<p>SUB</p>}
          </div>
           <div className=" absolute invisible group-hover:visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <i className="fa-solid fa-play text-yellow-300 text-3xl "></i>
           </div>
        </div> 
        <h6 className="p-1  text-sm">{delimiter(anime.title,23)}</h6>
       </div>
    </Link>
  
  )
}

export default Anime;