import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signuppage from './components/Signup';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Visit from './components/visit';
import Home from './components/Home';
import Products from './components/products';
import Fitness from './components/homefitness';
import Diet from './components/homediet';
import Life from './components/homelife';
import Choose from './components/userortrainer';
import Profile from './components/profile';
import About from './components/about';
import Contact from './components/contact';
import Trainers from './components/trainers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
const root = ReactDOM.createRoot(document.getElementById('root'));

const initState={
  username:""
}
const myreducer=(state=initState,action)=>{
  if(action.type==="SET_USERNAME")
  {
    console.log(action);
    return{
      ...state,username:action.username
    }
  }
  return state;
}
const store=configureStore({reducer:myreducer})
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Visit" element={<Visit/>} />
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/Signuppage" element={<Signuppage></Signuppage>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/homefitness" element={<Fitness/>}/>
    <Route path="/homediet" el  ement={<Diet/>}/>
    <Route path="/homelife" element={<Life/>}/>
    <Route path="/userortrainer"element ={<Choose/>}/>   
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/trainers" element={<Trainers/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
