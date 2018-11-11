import { fromJS } from 'immutable';
import * as constants from './constant';
import { Toast } from 'antd-mobile';

const defaultState = fromJS({
    
})



export default (state = defaultState,action) => {
    switch(action.type){
        case constants.UPDATE_SUCCESS:
            return state.merge(...action.data);
        default:
            return state;
    }
}