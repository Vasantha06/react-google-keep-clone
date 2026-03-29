import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./homeSlice.js";
export const store = configureStore({
	reducer: {
		noteStore: notesReducer,
	},
});