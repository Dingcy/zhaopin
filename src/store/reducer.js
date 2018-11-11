import { combineReducers } from 'redux-immutable';
import { reducer as registerReducer } from '../containers/register/store';
import { reducer as loginReducer } from '../containers/login/store';
import { reducer as atuhReducer } from '../containers/login/store';


const reducer = combineReducers({
    register:registerReducer,
    login:loginReducer,
    auth:atuhReducer,
});

export default reducer;

