import React from 'react';
import MyPage from "./MyPage";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/profile-reducer";


export type ProfilePropsDispatch = {
    setUserProfile: (arg: any) => void
}

class MyPageContainer extends React.Component<ReturnType<typeof mapStateToProps> & ProfilePropsDispatch, {}> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect(mapStateToProps, {setUserProfile})(MyPageContainer);



