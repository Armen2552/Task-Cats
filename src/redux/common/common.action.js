import {types} from "./common.types";

import {api} from './common.api'

const setCategoriesAction = (data)=>{
    return{
        type:types.SET_CATEGORIES,
        payload:data
    }
}

const setCatsDataAction = (data)=>{
    return {
        type:types.SET_CATS_DATA,
        payload:data
    }
}

const moreDataAction = (data)=>{
    return {
        type:types.MORE_DATA,
        payload:data
    }
}


export const getDataCategories = ()=> async (dispatch)=>{
    try{
        const request = await api.getCategories()
        const data = request.data

        dispatch(setCategoriesAction(data))
    }catch (e){
        console.log(e)
    }
}


export const getCatsData = (categoryID,page = 1)=> async (dispatch)=>{
    try {
        const request = await api.getCatsData(categoryID,page)
        const data = request.data

        if(page <= 1){
            dispatch(setCatsDataAction(data))
        }else{
            dispatch(moreDataAction(data))
        }


    }catch (e) {
        console.log(e)
    }
}