import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './Components/App';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import Home from './Components/Home';
import Like from './Components/Likes'
import AnimeHome from './Components/AnimeHome';
import Watch from './Components/Watch';
import NotFound from './Components/NotFound';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<App />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/genre/:genre" element={<Home />} />
       <Route path="/:like" element={<Like />} />
       <Route path="/Home/:name" element={<Home />} />
       <Route path="/AnimeHome/:id/:title" element={<AnimeHome/>} />
       <Route path="/Watch/:id/:title" element={<Watch/>} />
       <Route path="/*" element={<NotFound/>}/>

     </Routes>
   </BrowserRouter>
  </Provider>

);

