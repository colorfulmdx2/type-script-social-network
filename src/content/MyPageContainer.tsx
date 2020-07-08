import React from 'react';
import MyPage from "./MyPage";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";

type PathParamsType = {
    userId: any
}
export type ProfilePropsDispatchType = {
    setUserProfile: (arg: any) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: any) => {

                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <MyPage {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profileState.profile
    })
}

 let withUrlDataContainerComponent = withRouter<any, any>(MyPageContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);



