import {AppStateType} from "./redux-store";
import {createSelector} from 'reselect'


//-----MyPageContainer

export const getProfile = (state: AppStateType) => {
    return state.profileState.profile
}
export const getStatus = (state: AppStateType) => {
    return state.profileState.status
}
export const getAutorizedUserId = (state: AppStateType) => {
    return state.auth.id
}
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

//-----UsersContainer

export const getUsers = (state: AppStateType) => {
    return state.usersState.users
}
export const getUsersSelector = createSelector(
    getUsers,
    (users) => {
        return users.filter((u) => true)
    })
export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersState.pageSize
}
export const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersState.totalUsersCount
}
export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersState.currentPage
}
export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersState.isFetching
}
export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersState.followingInProgress
}


