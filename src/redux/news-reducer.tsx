import {newsAPI} from "../api/api";


const SET_NEWS = 'SET_NEWS';

export type setNewsType = {
    type: 'SET_USERS'
    users: Array<any>
}

let initialState = {
    news: []

}

export const newsReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }

        default:
            return state;
    }
}


export const setNews = (news: Array<any>) => ({type: SET_NEWS, news});

export const getNews = () => {
    return async (dispatch: any) => {

        let data = await newsAPI.getnews()
        console.log(data)
        dispatch(setNews(data.data.articles));

    }
}


export default newsReducer;
