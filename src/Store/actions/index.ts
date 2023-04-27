import { ActionType } from "../action-type";
interface CheckAction {
    type: ActionType.CHECKTICKER,
    payload: number
}

export type Action = CheckAction