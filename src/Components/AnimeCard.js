import '../App.css';
import {Link} from 'react-router-dom'

function Anime(anime) {
  return (
    
    <Link to={`/AnimeHome/${anime.id}/${anime.title}`}>
       <div className="m-0.5 w-40 lg:w-40 overflow-hidden rounded-sm text-yellow-300   ">
        <img className=" w-full h-48 " src={anime.img} alt={anime.title}/> 
        <h6 className="p-1 font-bold text-sm">{anime.title.slice(0,17)}...</h6>
       </div>
     
    </Link>
  
  )
}

export default Anime;