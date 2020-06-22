import React from 'react';
import './App.css';
import './container/container.css'

import Header from './header/Header';
import Navigation from "./navigation/Navigation";
import MyPage from "./content/MyPage";
import Messages from "./messages/Messages";
import {Route} from "react-router-dom";
import Music from "./music/Music";
import Setting from "./setting/Setting";
import UsersContainer from "./users/UsersContainer";




function App(props: any) {

    return (
            <div className='container'>
                <Header/>
  {/*              <Navigation friendIconData={props.state.navigationReducer.friendIconData}/>*/}
                <Navigation />
                    <Route path='/dialogs' render = {() => <Messages />}/>
                    <Route path='/profile' render = {() => <MyPage />}/>
                    <Route path='/users' render = {() => <UsersContainer/>}/>
                    <Route path='/music' render = {() => <Music/>}/>
                    <Route path='/setting' render = {() => <Setting/>}/>
            </div>
    );
}

export default App;