import axios from 'axios';
import * as constants from './constant';

const updateSuccess = (data) => {
    return {
        type:constants.UPDATE_SUCCESS,
        data
    } 
}
const updateError = (data) => {
    return {
        type:constants.UPDATE_ERROR,
        content:data
    } 
}



export const saveInfo = (data) => {
    return (dispatch) => {
        axios.post('/user/update',data).then(res => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(updateSuccess(res.data.data))
            }else{
                dispatch(updateError(res.data.msg))
            }
        })
    }
    
}






