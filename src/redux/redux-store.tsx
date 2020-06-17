import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";

let reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navigationState: navigationReducer
})

let store = createStore(reducers)



export default store