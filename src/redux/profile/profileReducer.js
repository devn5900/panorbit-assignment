import { ADD_PROFILE } from "./actionTypes"

const init={
    profile:{}
}

export const profileReducer=(state=init,{type,payload})=>{

    switch(type){
        case ADD_PROFILE:
            return {...state,profile:payload}
        default:
            return state;
    }

}