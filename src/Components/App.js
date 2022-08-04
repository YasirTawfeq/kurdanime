import React ,{ useState,useEffect } from 'react'
import '../App.css';
import Main from './Main';
import NewEpisode from './NewEpisode';
import Footer from './Footer';
import AnimatedText from 'react-animated-text-content';

function App() {

   const [loading,setLoading] = useState(false);
        
       useEffect(()=>{
       setLoading(true);
         setTimeout(()=>{
             setLoading(false);
         },3000)
      },[])


  return (
    <div>
    {loading?  
    <div className=" flex justify-center items-center rounded-3xl  bg-gray-800 min-h-screen text-yellow-300 text-4xl">
    
       <AnimatedText
         type="chars" 
         animation={{
         x: '200px',
         y: '-20px',
         scale: 1.1,
         ease: 'ease-in-out',
         }}
         animationType="throw"
         interval={0.06}
         duration={1}
         tag="p"
         className="animated-paragraph"
         includeWhiteSpaces
         threshold={0.1}
         rootMargin="20%">
        Kurd Anime
      </AnimatedText>
    
    </div>
     :<>
     <Main />
     <NewEpisode />
     <Footer />
     </>}
    </div>
  )
}

export default App