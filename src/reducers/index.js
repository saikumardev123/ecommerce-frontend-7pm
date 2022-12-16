import { combineReducers } from 'redux';
import user from './User';

const rootReducer = combineReducers({
    accessToken: user
})

export default rootReducer;