import axios from 'axios';
import * as constants from './constant'; 

const loginSuccess = {
    type:constants.LOGIN_SUCCESS,
    data:true
}
const loginError = (data) => {
    return {
        type:constants.LOGIN_ERROR,
        content:data
    } 
}

export const userLogin = (data) => {
    return (dispatch) => {
        axios.post('/user/login',data).then( (res) => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(loginSuccess);
            }else {
                dispatch(loginError(res.data.msg));
            }
        })
    }
    
}






