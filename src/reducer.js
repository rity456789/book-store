import { combineReducers } from "redux";

import checkOutReducer from "./containers/CheckOut/reducer";
import profileReducer from "./containers/Profile/reducer";
import loginReducer from "./containers/Login/reducer";

const reducer = combineReducers({
  checkOutReducer,
  profileReducer,
  loginReducer,
});

export default reducer;
