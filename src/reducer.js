import { combineReducers } from "redux";

import checkOutReducer from "./containers/CheckOut/reducer";
import profileReducer from "./containers/Profile/reducer";

const reducer = combineReducers({
  checkOutReducer,
  profileReducer,
});

export default reducer;
