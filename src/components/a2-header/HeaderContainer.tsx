import React from 'react';

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {Header} from "./Header";

export type AuthUsersPropsStateType = {
    isAuth: boolean
    login: string | null
}
export type AuthUsersPropsDispatchType = {
    getAuthUserData?: () => any
    logout: () => any
}
export type CommonAuthUsersPropsType = AuthUsersPropsStateType & AuthUsersPropsDispatchType

class HeaderContainer extends React.Component<CommonAuthUsersPropsType> {


    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): AuthUsersPropsStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);