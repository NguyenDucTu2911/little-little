import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store