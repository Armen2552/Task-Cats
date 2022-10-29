import {combineReducers} from 'redux';
import commonReducer from "./common/common.reducer";

export const rootReducer = combineReducers({
    common:commonReducer
})