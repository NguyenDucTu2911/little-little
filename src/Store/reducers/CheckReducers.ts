import { ActionType } from "../action-type";
import { Action } from "../actions/index";

const InitialSate = 0
const Reducer = (state: number = InitialSate, action: Action) => {
    switch (action.type) {
        case ActionType.CHECKTICKER:
            return state + action.payload;
        default:
            return state
    }
}

export default Reducer