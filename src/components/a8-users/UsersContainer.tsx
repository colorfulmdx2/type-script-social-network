import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";
import {Paginator} from "../common/paginator/Paginator";
import style from './Users.module.scss'


export type UsersPropsDispatch = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: any) => void
    getUsers: (currentPage: number, pageSize: number) => any
}
export type UsersStatePropsType = ReturnType<typeof mapStateToProps>

export type OnChangeType = {
    onPageChanged: (pageNumber: number) => void
}


export type UsersPropsType = UsersStatePropsType & UsersPropsDispatch


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div className={style.commonContainer}>
                <div className={style.usersContainer}>

                    <div className={style.paginator}>
                        <Paginator
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            totalItemsCount={this.props.totalUsersCount}
                            onPageChanged={this.onPageChanged}
                        />
                    </div>

                    {
                        this.props.isFetching
                            ? <Preloader/>
                            : <Users
                                totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                onPageChanged={this.onPageChanged}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                unFollow={this.props.unFollow}
                                follow={this.props.follow}
                                isFetching={this.props.isFetching}
                                toggleFollowingProgress={this.props.toggleFollowingProgress}
                                followingInProgress={this.props.followingInProgress}
                            />
                    }
                </div>


            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,

    }
)(UsersContainer)