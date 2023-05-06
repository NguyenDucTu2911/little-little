import { combineReducers } from "redux";
import userSlice from "../slice/userSlice";
import eventSlice from "../slice/eventSlice";

const reducers = combineReducers({
    users: userSlice,
    events: eventSlice
})

export type State = ReturnType<typeof reducers>
export default reducers


