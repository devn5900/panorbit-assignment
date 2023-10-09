import { ADD_USERS } from "./actionTypes";

const init={
    users:[]
}

export const usersReducer=(state=init,{type,payload})=>{

    switch(type){

        case ADD_USERS:
            return {...state,users:payload}

        default:
            return state;
    }

}