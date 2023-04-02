import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import threadReducer from "../features/threadSlice";

const rootReducer = combineReducers({
	user: userReducer,
	thread: threadReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

console.log(store.getState());
