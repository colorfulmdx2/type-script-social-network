import profileReducer, {addPost, deletePost, updateNewPostText} from "./profile-reducer";

const startState: any = {
    postData: [
        {id: 1, like: '12', message: 'Hello world'},
        {id: 2, like: '16', message: 'Learning React....'},
        {id: 3, like: '19', message: 'Fucked up...'}
    ]
}

test('add post', () => {


    const action = addPost('test');

    const endState = profileReducer(startState, action)


    expect(endState.postData.length).toBe(4);
});

test('update new post text', () => {


    const action = updateNewPostText('xxx');

    const endState = profileReducer(startState, action)


    expect(endState.postData[3].message).toBe('xxx');
});

test('delete post', () => {


    const action = deletePost(1);

    const endState = profileReducer(startState, action)


    expect(endState.postData.length).toBe(2);
});