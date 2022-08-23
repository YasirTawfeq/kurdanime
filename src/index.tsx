import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import Like from './pages/Likes'
import AnimeHome from './pages/AnimeHome';
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/genre/:genre" element={<Home />} />
       <Route path="/likes" element={<Like />} />
       <Route path="/Home/:name" element={<Home />} />
       <Route path="/AnimeHome/:id/:title" element={<AnimeHome/>} />
       <Route path="/Watch/:id/:title" element={<Watch/>} />
       <Route path="/*" element={<NotFound/>}/>
     </Routes>
   </BrowserRouter>
  </Provider>

);

