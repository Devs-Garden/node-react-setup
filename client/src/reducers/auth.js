import {REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT} from '../actions/types';

const initialState = {
    isAuthenticated:null,
    user:null
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return{
                ...state,...payload,isAuthenticated:true
            }
        case REGISTER_FAIL:
            return{
                ...state,isAuthenticated:false
            }
        default:
            return state
    }
}