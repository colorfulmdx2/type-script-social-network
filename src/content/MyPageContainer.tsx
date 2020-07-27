import React from 'react';
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: any
}
export type ProfilePropsDispatchType = {
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (status: string) => void
}
export type ProfilePropsStateType = ReturnType<typeof mapStateToProps>

export type ProfileCommonStatePropsType = ProfilePropsStateType & ProfilePropsDispatchType

type PropsType = RouteComponentProps<PathParamsType> & ProfileCommonStatePropsType

class MyPageContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 8850
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <MyPage
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profileState.profile,
        status: state.profileState.status
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
   )(MyPageContainer) as React.ComponentClass






