import { fromJS } from 'immutable';
import * as constants from './constant';

const defaultState = fromJS({
    user:'',
    type:''
})



export default (state = defaultState,action) => {
    switch(action.type){
        case constants.LOAD_DATA:
            return state.merge({
                'user':action.data.user,
                'type':action.data.type
            })
        default:
            return state;
    }
}