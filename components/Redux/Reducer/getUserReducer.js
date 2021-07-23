import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../Constant';


const initialState = {
    users:[],
    isLoadiing: false,
    isSuccess: false,
    isError: false
}

export default getUserReducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST: {
            return{
                isLoadiing:true,
                isSuccess: false,
                isError: false
            }
        }
        case FETCH_USER_SUCCESS: {
            return{
                isLoadiing:false,
                isSuccess: true,
                isError: false,
                users: action.users
            }
        }
        case FETCH_USER_ERROR: {
            return{
                isLoadiing:false,
                isSuccess: false,
                isError: true
            }
        }
        default:
            return state;
    }
}