import { combineReducers } from "redux";
import userSlice from "../slice/userSlice";

const reducers = combineReducers({
    users: userSlice
})

export type State = ReturnType<typeof reducers>
export default reducers


