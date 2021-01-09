import {
  GO_TO_INFORMATION_TAB,
  GO_TO_NOTIFICATIONS_TAB,
  GO_TO_ORDERS_TAB,
  GO_TO_WHISHLIST_TAB,
  GO_TO_RESET_PASSWORD_TAB,
} from "./actions";

const inititalState = {
  tab: 1,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case GO_TO_INFORMATION_TAB:
      return {
        ...state,
        tab: 1,
      };
    case GO_TO_NOTIFICATIONS_TAB:
      return {
        ...state,
        tab: 2,
      };
    case GO_TO_ORDERS_TAB:
      return {
        ...state,
        tab: 3,
      };
    case GO_TO_WHISHLIST_TAB:
      return {
        ...state,
        tab: 4,
      };
    case GO_TO_RESET_PASSWORD_TAB:
      return {
        ...state,
        tab: 5,
      };
    default:
      return state;
  }
};

export default reducer;
