import axios from 'axios';
import * as constants from './constant'; 


const regSuccess = (regtype) => {
    return {
        type:constants.REG_SUCCESS,
        data:true,
        regtype
    }
}

const regError = (data) => {
    return {
        type:constants.REG_ERROR,
        isRegister:false,
        data
    }
}


export const RegUserInfor = (data) => {
    return (dispatch) => {
        axios.post('/user/reg',data).then((res)=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(regSuccess(data.type))
            }else{
                dispatch(regError(res.data.msg))
            }
        })
    }
}
