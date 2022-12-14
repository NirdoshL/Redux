//combines all reducers present in reducer.js
import { reducer } from "./reducer";

import { combineReducers } from "redux"

export const rootReducer=combineReducers({
    ourState:reducer
})
//in reducer.js we have export one reducer so here
//we combine that reducer only if 2 reducers are 
//used in reducer.js then add that reducer after 
//OurState(which is statename userdefined):reducer(reducer we wanna use)
