import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './Constant';
import axios from 'axios';


export const fetchUserRequest = () =>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) =>{
    return {
        type: FETCH_USER_SUCCESS,
        users
    }
}

export const fetchUserError = () =>{
    return {
        type: FETCH_USER_ERROR
    }
}


export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response, 'response');
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error =>{
            console.error(error)
            dispatch(fetchUserError(error))
        })
    }
}
