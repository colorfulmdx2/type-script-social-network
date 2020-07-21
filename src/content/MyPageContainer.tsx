import React from 'react';
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getUserProfile} from "../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: any
}
export type ProfilePropsDispatchType = {
    getUserProfile: (userId: any) => void
}
export type ProfilePropsStateType = ReturnType<typeof mapStateToProps>

export type ProfileCommonStatePropsType = ProfilePropsStateType & ProfilePropsDispatchType

type PropsType = RouteComponentProps<PathParamsType> & ProfileCommonStatePropsType

class MyPageContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <MyPage {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profileState.profile,
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(MyPageContainer) as React.ComponentClass






