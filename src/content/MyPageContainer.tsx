import React from 'react';
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: any
}
export type ProfilePropsDispatchType = {
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (status: string) => void
    savePhoto: (arg:any) => any
}
export type ProfilePropsStateType = ReturnType<typeof mapStateToProps>

export type ProfileCommonStatePropsType = ProfilePropsStateType & ProfilePropsDispatchType

type PropsType = RouteComponentProps<PathParamsType> & ProfileCommonStatePropsType

class MyPageContainer extends React.Component<PropsType> {

    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <MyPage
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profileState.profile,
        status: state.profileState.status,
        autorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
   )(MyPageContainer) as React.ComponentClass






