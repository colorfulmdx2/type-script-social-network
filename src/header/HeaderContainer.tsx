import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getAuthUserData} from "../redux/auth-reducer";

export type AuthUsersPropsStateType = {
    isAuth: boolean
    login: string | null
}
export type AuthUsersPropsDispatchType = {
    getAuthUserData: () => any
}
export type CommonAuthUsersPropsType = AuthUsersPropsStateType & AuthUsersPropsDispatchType

class HeaderContainer extends React.Component<CommonAuthUsersPropsType> {

    componentDidMount(): void {

        this.props.getAuthUserData()
    }

    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): AuthUsersPropsStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);