import { cartActionType, cartInitialState, cartReducer } from "./cartReducer";
import combineReducers from "./combineReducers";

export const initialState = {
    cart: cartInitialState,
  };
  
  export const rootReducer = combineReducers({
    cart: cartReducer,
  });