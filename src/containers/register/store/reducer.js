import { fromJS } from 'immutable';
import * as constants from './constant';
import { Toast } from 'antd-mobile';

const defaultState = fromJS({
    isRegister:false,
    msg:'',
    redirect:''
})

const getRedirect = (type) => {
    return '/'+type+'info'
}

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.REG_SUCCESS:
            return state.merge({
                'isRegister':action.data,
                'redirect':getRedirect(action.regtype)
            });
        case constants.REG_ERROR:
            Toast.fail(action.data,2);
            return state.merge({
                msg:action.data,
                isRegister:false
            });
        default:
            return state;
    }
}