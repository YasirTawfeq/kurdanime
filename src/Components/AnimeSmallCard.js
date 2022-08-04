import '../App.css';
import {Link} from 'react-router-dom';
import {delimiter} from './asset/TextLimiter';

/* anime small card*/
function AnimeSmallCard(anime) {
  return (
   <Link to={`/AnimeHome/${anime.id}/${anime.title}`}>
       <div className="m-0.5  flex bg-gray-600 rounded-lg  ">
        <div className="bg-gray-600  ">
         <img className=" w-14 h-16 rounded-l-md " src={anime.img} alt={anime.title}/>
        </div> 
         <div className="flex flex-col text-xs text-yellow-300 m-1 ">
           <h6 className="text-sm font-bold text-yellow-500 ">{delimiter(anime.title,17)}</h6>
           <p>{anime.num}</p>
           <p>SUB{anime.subORdub}</p>
         </div>
       </div>
     
    </Link>
  )
}

export default AnimeSmallCard