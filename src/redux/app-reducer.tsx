import {getAuthUserData, ThunkActionType} from "./auth-reducer";


//----------------------------------------------------------------------------------------------------------------------
type InitStateType = {
    initialized: boolean
}
type InitializedActionType = ReturnType<typeof initializedSuccess>
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

export const initializedSuccess = () =>  ({type:'INITIALIZED_SUCCESS'} as const)

//----------------------------------------------------------------------------------------------------------------------

export const initializeApp = ():ThunkActionType => async (dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
   // Promise.all([promise]).then(() => {
   //     dispatch(initializedSuccess())
   // })
}

//----------------------------------------------------------------------------------------------------------------------

