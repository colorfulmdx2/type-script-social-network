import React from 'react';
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getUserProfile} from "../redux/profile-reducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";

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
        if (!this.props.isAuth) {
            return <Redirect to='/login'/>
        }
        return (
            <MyPage {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profileState.profile,
        isAuth: state.auth.isAuth
    })
}

let withUrlDataContainerComponent = withRouter<any, any>(MyPageContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);



