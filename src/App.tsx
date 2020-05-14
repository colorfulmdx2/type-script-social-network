import React from 'react';
import './App.css';
import './container/container.css'

import Header from './header/Header';
import Navigation from "./navigation/Navigation";
import MyPage from "./content/MyPage";
import Messages from "./messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./news/News";
import Music from "./music/Music";
import Setting from "./setting/Setting";


function App() {
    return (
       <BrowserRouter>
            <div className='container'>
                <Header/>
                <Navigation/>
                    <Route path='/dialogs' render = {() => <Messages/>}/>
                    <Route path='/profile' render = {() => <MyPage/>}/>
                    <Route path='/news' render = {() => News}/>
                    <Route path='/music' render = {() => <Music/>}/>
                    <Route path='/setting' render = {() => <Setting/>}/>
            </div>
       </BrowserRouter>

    );
}

export default App;