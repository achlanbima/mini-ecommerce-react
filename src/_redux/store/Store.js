import { combineReducers, createStore, applyMiddleware } from "redux"
import products from "../reducers/Products"
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const rootReducers = combineReducers({
    products,
});

const Store = createStore(rootReducers, applyMiddleware(logger, promise));

export default Store;