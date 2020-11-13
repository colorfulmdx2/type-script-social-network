import React, {useEffect} from 'react';
import style from './App.module.scss'
import Navigation from "./components/a5-navigation/Navigation";
import Messages from "./components/a4-messages/Messages";
import {Redirect, Route} from "react-router-dom";
import Music from "./components/a6-music/Music";
import Setting from "./components/a7-settings/Setting";
import UsersContainer from "./components/a8-users/UsersContainer";
import MyPageContainer from "./components/a3-profile/ProfileContainer";
import HeaderContainer from "./components/a2-header/HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {LoginPage} from "./components/a1-login/Login-Page/LoginPage";
import NewsContainer from "./components/a9-news/NewsContainer";


export const App = () => {

    useEffect(() => {
        //debugger
        dispatch(initializeApp())
    }, [])

    const dispatch = useDispatch()

    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div>
            {
                isAuth && <div>
                    <HeaderContainer/>
                </div>
            }
            <Route path='/login' render={() => <LoginPage/>}/>
            <div className={style.container}>

                {
                    isAuth ? <Navigation/> : null
                }


                <Route path='/dialogs' render={() => <Messages/>}/>
                <Route path='/profile/:userId?' render={() => <MyPageContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>


            </div>
        </div>
    );
}


//---------------------------------------------------------------------------------------------------------------------

/*
type MapDispatchToPropsType = {
    initializeApp: () => any
}
type MapStateToPropsType = {
    initialized: boolean,
    isAuth: boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType


class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <div>
                    <HeaderContainer/>
                </div>
                <div className='container'>
                    {/!*              <Navigation friendIconData={props.state.navigationReducer.friendIconData}/>*!/}
                    {
                        this.props.isAuth ? <Navigation/> : null
                    }
                    <Route path='/' render={() => <Redirect to={"/a3-profile"}/>}/>
                    <Route path='/dialogs' render={() => <Messages/>}/>
                    <Route path='/a3-profile/:userId?' render={() => <MyPageContainer/>}/>
                    <Route path='/a8-users' render={() => <UsersContainer/>}/>
                    <Route path='/a6-music' render={() => <Music/>}/>
                    <Route path='/a7-settings' render={() => <Setting/>}/>
                    <Route path='/a1-login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): any => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass*/
