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
                {/*<div className='content-container'>*/}
                    <Route path='/dialogs' component={Messages}/>
                    <Route path='/profile' component={MyPage}></Route>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                {/*</div>*/}



            </div>
       </BrowserRouter>

    );
}

export default App;