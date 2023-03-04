import {legacy_createStore,combineReducers} from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer";


const rootReducer = combineReducers({
    ProductsReducer:ProductsReducer,
    CartReducer:CartReducer
})

const store = legacy_createStore(rootReducer,devToolsEnhancer())

export default store