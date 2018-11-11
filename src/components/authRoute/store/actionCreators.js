import * as constants from './constant'; 

const load = (data) => {
    return {
        type:constants.LOAD_DATA,
        data
    }
}

export const loadData = (data) => {
    return (dispatch) => {
       dispatch(load(data));
    }
    
}






