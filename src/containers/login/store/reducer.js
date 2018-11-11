import { fromJS } from 'immutable';
import * as constants from './constant';
import { Toast } from 'antd-mobile';

const defaultState = fromJS({
    isLogin:false
})



export default (state = defaultState,action) => {
    switch(action.type){
        case constants.LOGIN_SUCCESS:
            return state.set('isLogin',true)
        case constants.LOGIN_ERROR:
            Toast.fail(action.content,2);
            return state.set('isLogin',false)    
        default:
            return state;
    }
}