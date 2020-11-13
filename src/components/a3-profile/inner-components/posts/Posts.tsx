import React, {ChangeEvent, useState} from 'react';
import style from "./Posts.module.scss";
import AddedPost from "./added-posts/AddedPost";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {addPost} from "../../../../redux/profile-reducer";


export const Posts = () => {

    const [enable, setEnable] = useState(false)
    const [text, setText] = useState('')


    const dispatch = useDispatch()

    const addPostHandler = () => {
        dispatch(addPost(text))
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }


    const postData = useSelector<AppStateType, any>(state => state.profileState.postData)
    const profile = useSelector<AppStateType, any>(state => state.profileState.profile)


    let addedPosts = postData.map((element: { id: number; like: string; message: string; }) =>
        <AddedPost id={element.id} like={element.like} message={element.message} key={element.id}/>)

    return (
        <div className={style.container}>
            <div className={style.form}>
                {profile?.photos.small && <img className={style.img}
                                               src={profile.photos.small}/>}
                <textarea onChange={onChange}
                          value={text}
                          placeholder={`What's new?`}
                          />
               <button onClick={addPostHandler}>+</button>

                {/*<button onClick={addPostHandler}>1111</button>*/}
            </div>
            {addedPosts}
        </div>
    )
}


/*
type PostFormDataType = {
    postBody: string
}

let maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'post body'}
                       name={'postBody'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>ADD</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<PostFormDataType>({form: 'addPost'}) (AddPostForm)

const Posts = React.memo((props: any) => {

    let addPostHandler = (values: PostFormDataType) => {
        props.addPostHandler(values.postBody)
    }

    let addedPosts = props.postData.map((element: { id: number; like: string; message: string; }) =>
        <AddedPost id={element.id} like={element.like} message={element.message}/>)

    return (

        <div className={stylePosts.posts}>
            <div className={stylePosts.addPosts}>
                <h2>{props.title}</h2>
                <AddPostReduxForm onSubmit={addPostHandler}/>
            </div>
            {addedPosts}
        </div>

    )
})

export default Posts;*/
