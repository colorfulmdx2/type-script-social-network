import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navigationState: navigationReducer,
    usersState: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppStateType = ReturnType<typeof reducers>


export default store

// @ts-ignore
window.store=store