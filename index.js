import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Pages/home/home';
import Gallery from './Pages/gallery/gallery';
import AboutUs from './Pages/aboutus/aboutus';
import ApplicationMac from './Pages/applicationmac/applicationmac';
import OnlineTerm from './Pages/onlineterm/onlineterm';
import Vacancies from './Pages/vacancies/vacancies';
import Header from "./Header";

render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/applicationmac" element={<ApplicationMac/>}/>
            <Route path="/onlineterm" element={<OnlineTerm/>}/>
            <Route path="/vacancies" element={<Vacancies/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

