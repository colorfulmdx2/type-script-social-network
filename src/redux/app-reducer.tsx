import {getAuthUserData, ThunkActionType} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
//----------------------------------------------------------------------------------------------------------------------
type InitStateType = {
    initialized: boolean
}
type InitializedActionType = {
    type: 'INITIALIZED_SUCCESS'
}
type ActionType = InitializedActionType
//----------------------------------------------------------------------------------------------------------------------
let initialState = {
    initialized: false
}

//----------------------------------------------------------------------------------------------------------------------
export const appReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

//----------------------------------------------------------------------------------------------------------------------

export const initializedSuccess = ():InitializedActionType =>  ({type:INITIALIZED_SUCCESS})

//----------------------------------------------------------------------------------------------------------------------

export const initializeApp = ():ThunkActionType => async (dispatch) => {
    const promise = dispatch(getAuthUserData())
   Promise.all([promise]).then(() => {
       dispatch(initializedSuccess())
   })
}

//----------------------------------------------------------------------------------------------------------------------

