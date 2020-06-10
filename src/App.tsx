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



function App(props: any) {
    return (
       /*<BrowserRouter>*/
            <div className='container'>
                <Header/>
                <Navigation friendIconData={props.state.navigationPage.friendIconData}/>
                    <Route path='/dialogs' render = {() => <Messages messagesData={props.state.dialogsPage.messagesData}
                                                                     dialogsData={props.state.dialogsPage.dialogsData}
                                                                     store={props.store}


                    />}/>
                    <Route path='/profile' render = {() => <MyPage
                        postData={props.state.profilePage.postData}
                        dispatch={props.dispatch}

                    />}/>
                    <Route path='/news' render = {() => <News/>}/>
                    <Route path='/music' render = {() => <Music/>}/>
                    <Route path='/setting' render = {() => <Setting/>}/>
            </div>
       /*</BrowserRouter>*/

    );
}

export default App;