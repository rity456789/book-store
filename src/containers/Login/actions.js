import { login } from "../../services/account.services";
import Swal from "sweetalert2";
import history from "../../ultis/history";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const sendLogin = (username, password) => {
  return (dispatch) => {
    dispatch(request());
    login(username, password)
      .then((loginResponse) => {
        if (loginResponse.statusCode == 401) {
          dispatch(failure());
          Swal.fire({
            title: "Đăng nhập thấp bại",
            icon: "error",
            text: "Vui lòng đăng nhập lại",
            confirmButtonText: "OK",
          });
        } else {
          localStorage.setItem(
            "token",
            JSON.stringify(loginResponse.access_token)
          );
          dispatch(success());
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
        Swal.fire({
          title: "Có lỗi trong quá trình đăng nhập",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  function request() {
    return {
      type: LOG_IN_REQUEST,
    };
  }
  function success() {
    return {
      type: LOG_IN_SUCCESS,
    };
  }
  function failure() {
    return {
      type: LOG_IN_FAILURE,
    };
  }
};

export const reset = () => {
  return (dispatch) => {
    dispatch(callAction());
  };

  function callAction() {
    return {
      type: "LOG_IN_RESET",
    };
  }
};
