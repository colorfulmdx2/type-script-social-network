import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navigationState: navigationReducer,
    usersState: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>



export default store