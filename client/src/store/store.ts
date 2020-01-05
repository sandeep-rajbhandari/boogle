import {applyMiddleware, createStore} from "redux";
import homePageReducer from "../container/homePage/store/homePage.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export type AppState = ReturnType<typeof homePageReducer>;


export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        homePageReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}
