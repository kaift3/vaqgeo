import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer from "./Components/Contexts/Reducer/AuthReducer";
// import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer  } from "./reducers/productReducer";
// import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
// import { cartReducer } from "./reducers/cartReducer";
// import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer.";

const reducer = combineReducers({
  authentication: AuthReducer,
});

// let initialState = {
//     cart:{
//         cartItems: localStorage.getItem('cartItems')
//         ? JSON.parse(localStorage.getItem('cartItems'))
//         :[],
//         shippingInfo: localStorage.getItem("shippingInfo")
//         ? JSON.parse(localStorage.getItem('shippingInfo'))
//         :{},
//     }
// };
const middleWare = [thunk];
const store = createStore(
  reducer,
  //initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
