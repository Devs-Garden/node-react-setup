import axios from 'axios';
import {REGISTER_SUCCESS,REGISTER_FAIL} from './types';



//action register user
export const register = ({firstName,lastName }) => async dispatch => {
    const config ={
        header:{
            'Content-Type':'application/json'
        }
    }
    const newUser ={
        firstName,
        lastName 
    }
    try{
        // const version = "v1.0"
        const res = await axios.post('/api/register',newUser,config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res
        });
    }catch(err){
        const errors = err.response;
        console.log(errors)
        if(errors) {
            dispatch();
        }
        dispatch({
            type:REGISTER_FAIL
        });
    }
}