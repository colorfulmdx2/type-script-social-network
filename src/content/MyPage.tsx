import React from 'react';
import styleContent from "./MyPage.module.css";
import BackAvatar from "./back-avatar/BackAvatar";
import Profile from "./profile-info/Profile";
import Posts from "./posts/Posts";
import AddedPost from "./posts/added-posts/AddedPost";
import PostsContainer from "./posts/Posts-container";
import StoreContext from "../store-context";


const MyPage = (props: any) => {


    /*let addedPosts = state.profileReducer.postData.map((element: { id: number; like: string; message: string; }) =>
        <AddedPost id={element.id} like={element.like} message={element.message}/>)*/

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addedPosts = state.profileReducer.postData.map((element: { id: number; like: string; message: string; }) =>
                    <AddedPost id={element.id} like={element.like} message={element.message}/>)
                return (
                    <div className={styleContent.page}>
                        <BackAvatar/>
                        <Profile/>
                        <PostsContainer
                        />
                        {addedPosts}
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPage;
