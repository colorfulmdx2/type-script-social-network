import React from 'react';
import './App.css';
import './container/container.css'
import Navigation from "./navigation/Navigation";
import Messages from "./messages/Messages";
import {Route, withRouter} from "react-router-dom";
import Music from "./music/Music";
import Setting from "./setting/Setting";
import UsersContainer from "./users/UsersContainer";
import MyPageContainer from "./content/MyPageContainer";
import HeaderContainer, {AuthUsersPropsStateType} from "./header/HeaderContainer";
import Login from "./login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout, ThunkActionType} from "./redux/auth-reducer";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


type MapDispatchToPropsType = {
    initializeApp: () => any
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType


class App extends React.Component<AppPropsType> {

    componentDidMount():void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='container'>
                <HeaderContainer/>
                {/*              <Navigation friendIconData={props.state.navigationReducer.friendIconData}/>*/}
                <Navigation/>
                <Route path='/dialogs' render={() => <Messages/>}/>
                <Route path='/profile/:userId?' render={() => <MyPageContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType):any => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass