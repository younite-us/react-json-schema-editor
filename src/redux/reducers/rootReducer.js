
import { combineReducers } from "redux";
import {createNewElementReducer} from './jsonBuilderReducer'
export default combineReducers({
    createNewElementReducer: createNewElementReducer
})