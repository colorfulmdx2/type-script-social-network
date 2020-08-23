import React from 'react';
import stylePosts from "./Posts.module.css";
import AddedPost from "./added-posts/AddedPost";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../src/utils/validators/validators"
import {Textarea} from "../../components/common/Forms-Control/FormsControls";


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

export default Posts;