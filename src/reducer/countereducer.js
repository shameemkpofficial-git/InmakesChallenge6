import { State } from "react-native-gesture-handler";
import { COUNTER_INCREAMENT, COUNTER_DECREAMENT } from "../constatnts";

const initialState = {
    count:0
}

const countReducer = (state= initialState, action)=> {
    switch(action.type){
        case COUNTER_INCREAMENT:
            return{
                ...state,
                count:state.count + 1
            };

        case COUNTER_DECREAMENT:
            return{
                ...state,
                count:state.count - 1
            }; 
            
            default:
                return state;
    }
}

export default countReducer;