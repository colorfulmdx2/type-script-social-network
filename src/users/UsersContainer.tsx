import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../redux/users-reducer";

let mapStateToProps = (state:any) => {
    return {
        users: state.usersState.users
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId:any) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:any) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users);