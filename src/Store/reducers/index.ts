import { combineReducers } from "redux";
import userSlice from "../slice/userSlice";
import eventSlice from "../slice/eventSlice";
import paySlice from "../slice/paySlice";

const reducers = combineReducers({
    users: userSlice,
    events: eventSlice,
    pay: paySlice,
})

export type State = ReturnType<typeof reducers>
export default reducers


