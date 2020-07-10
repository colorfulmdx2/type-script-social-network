import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setAuthUserData} from "../redux/auth-reducer";


export type AuthUsersPropsStateType = {
    isAuth: boolean
    login: string | null
}
export type AuthUsersPropsDispatchType = {
    setAuthUserData: (id: string, email: string, login: string) => any
}
export type CommonAuthUsersPropsType = AuthUsersPropsStateType & AuthUsersPropsDispatchType

class HeaderContainer extends React.Component<CommonAuthUsersPropsType> {

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then((response: any) => {
                if (response.data.resultCode === 0) {

                    let {id, email, login} = response.data.data


                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
                }
            })
    }

    render() {

        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): AuthUsersPropsStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);