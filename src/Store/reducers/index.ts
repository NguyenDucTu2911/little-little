import { combineReducers } from "redux";
import CheckReducers from "./CheckReducers";

const reducers = combineReducers({
    bank: CheckReducers
})

export type State = ReturnType<typeof reducers>
export default reducers


