import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";

test('add post', () => {

    const startState: any = {
        postData: [
            {id: 1, like: '12', message: 'Hello world'},
            {id: 2, like: '16', message: 'Learning React....'},
            {id: 3, like: '19', message: 'Fucked up...'}
        ],
        newPostText: ''
    }
    const action = addPostActionCreator();

    const endState = profileReducer(startState, action)


    expect(endState.postData.length).toBe(4);
});

test('update new post text', () => {

    const startState: any = {
        newPostText: ''
    }
    const action = updateNewPostTextActionCreator('xxx');

    const endState = profileReducer(startState, action)


    expect(endState.newPostText).toBe('xxx');
});