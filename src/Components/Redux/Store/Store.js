import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { ReduxMovies } from "../ReduxMovies/ReduxMovies";

export const Store = createStore(ReduxMovies, applyMiddleware(thunk))
