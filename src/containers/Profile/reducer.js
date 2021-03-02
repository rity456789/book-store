import { CHANGE_TAB, 
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE 
} from "./actions";

const inititalState = {
  isSending: false,
  tab: 1,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case   CHANGE_PASSWORD_REQUEST:
      return{
        ...state,
        isSending: true,
    };
    case   CHANGE_PASSWORD_SUCCESS:
      return{
        ...state,
        isSending: false,
    };
    case   CHANGE_PASSWORD_FAILURE:
      return{
        ...state,
        isSending: false,
    };
      
    default:
      return state;
  }
};

export default reducer;
