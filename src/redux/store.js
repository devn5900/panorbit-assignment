import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/profileReducer";
import { usersReducer } from "./users/usersReducer";


const rootReducer=combineReducers({
    profileReducer,
    usersReducer
})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));
