import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unFollow,
    UsersType
} from "../redux/users-reducer";
import {AppStateType} from "../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../components/common/Preloader/Preloader";


/*export type UsersProps = {
    users: any
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}*/
/*export type UsersPropsState = {
    users: any
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}*/
export type UsersPropsDispatch = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}



class UsersContainer extends React.Component<ReturnType<typeof mapStateToProps> & UsersPropsDispatch, {}> {

    componentDidMount(): void {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then((response: any) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then((response: any) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType)  => {
    return {
        users: state.usersState.users,
        pageSize: state.usersState.pageSize,
        totalUsersCount: state.usersState.totalUsersCount,
        currentPage: state.usersState.currentPage,
        isFetching: state.usersState.isFetching
    }
}

export default connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setIsFetching
    }
)(UsersContainer);