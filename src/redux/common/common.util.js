export const filterData = (obj,newObj)=>{
    let copyNewObj = [...newObj]
    for(let itemObj of obj){
        copyNewObj = copyNewObj.filter(item=>item.id !== itemObj.id)
    }

    return copyNewObj
}