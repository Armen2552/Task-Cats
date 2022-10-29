import {types} from "./common.types";
import {filterData} from "./common.util";

const INITIAL_STATE = {
    categories:[],
    catsData:[],
}

const commonReducer = (state = INITIAL_STATE , {type,payload}) => {
    switch (type){
        case types.SET_CATEGORIES:
            return {...state,categories: payload}
        case types.SET_CATS_DATA:
            return {...state,catsData: payload}
        case types.MORE_DATA:
            return {...state,catsData:[...state.catsData,...filterData(state.catsData,payload)] }
        default:
            return state
    }
}

export default commonReducer;