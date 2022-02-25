import { createStore, combineReducers } from "redux";
import countReducer from "../reducer/countereducer";

const rootreducer = combineReducers(
    {
        counter : countReducer
    }
);

const configurestore = ()=>{
    return createStore(rootreducer)
}
export default configurestore;