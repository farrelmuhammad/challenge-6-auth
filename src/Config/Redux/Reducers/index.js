import { combineReducers } from 'redux';
import authReducer from './authReducer';
import carAdminReducer from './carAdminReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    carAdminReducer,
});

export default rootReducer;