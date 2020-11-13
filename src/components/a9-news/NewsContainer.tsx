import React from 'react';
import {connect} from 'react-redux';
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from 'redux';
import News from "./News";
import {getNews} from "../../redux/news-reducer";
import {AppStateType} from "../../redux/redux-store";

class NewsContainer extends React.Component<any> {
    componentDidMount(): void {
        this.props.getNews1();
    }

    render() {
        return (
            <News
                news={this.props.news}
                getNews={this.props.getNews}/>

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        news: state.news.news
    }
}

let mapDispatchToProps = (dispatch: any) => ({
    getNews1: () => dispatch(getNews())
})


export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(NewsContainer)