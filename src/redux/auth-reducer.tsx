const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


type InitStateType = typeof initialState

const authReducer = (state: InitStateType = initialState, action: any): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any) => (
    {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
)

export default authReducer