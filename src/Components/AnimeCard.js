import '../App.css';
import {Link} from 'react-router-dom';
import {delimiter} from './asset/TextLimiter';

function Anime(anime) {
  return (
    
    <Link to={`/AnimeHome/${anime.id}/${anime.title}`}>
       <div className="m-0.5 w-40 lg:w-40 overflow-hidden rounded-sm text-yellow-300 ">
        <div className="bg-gray-600 text-yellow-300 hover:bg-yellow-300 hover:text-gray-600">
         <img className=" w-full h-48 " src={anime.img} alt={anime.title}/>
         <div className="flex justify-between px-1 ">
          {anime.num?<p>{"Eps "+anime.num}</p>:<p></p>}
          <p>{anime.subORdub}</p>
         </div>
        </div> 
        <h6 className="p-1  text-sm">{delimiter(anime.title,23)}</h6>
       </div>
     
    </Link>
  
  )
}

export default Anime;