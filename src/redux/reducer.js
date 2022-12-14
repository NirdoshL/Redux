//if action-creator dispatches the app then app flow 
//to reducer and get store in data.
import * as actionTypes from "./action-types"
const initialState = {
    count: 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case actionTypes.RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}