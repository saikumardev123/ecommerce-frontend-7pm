import { combineReducers } from 'redux';
import user from './User';

console.log("user in root reducer", user);

const rootReducer = combineReducers({
    accessToken: user
})

export default rootReducer;