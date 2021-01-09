import { combineReducers } from "redux";

import checkOutReducer from "./containers/CheckOut/reducer";

const reducer = combineReducers({
  checkOutReducer,
});

export default reducer;
