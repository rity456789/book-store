import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
} from "./actions";

const inititalState = {
  isSending: false,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        isSending: true,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        isSending: false,
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        isSending: false,
      };
    default:
      return state;
  }
};

export default reducer;
