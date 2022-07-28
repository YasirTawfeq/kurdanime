import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './Components/App';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import Home from './Components/Home';
import AnimeHome from './Components/AnimeHome';
import Watch from './Components/Watch';
import NotFound from './Components/NotFound'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/:name" element={<Home />} />
      <Route path="/AnimeHome/:id/:title" element={<AnimeHome/>} />
      <Route path="/Watch/:id/:title" element={<Watch/>} />
      <Route path="/*" element={<NotFound/>}/>

    </Routes>
  </BrowserRouter>

);

