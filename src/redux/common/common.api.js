import axios from "axios";

export const api = {
    getCategories(){
        return axios.get('https://api.thecatapi.com/v1/categories')
    },

    getCatsData(categoryID,page){
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${categoryID}`)
    }
}