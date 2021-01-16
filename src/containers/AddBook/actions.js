import { addBook } from "../../services/myShop.service";
import Swal from "sweetalert2";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const sendAddBook = (book) => {
  return (dispatch) => {
    dispatch(request());
    addBook(book)
      .then((addBookResponse) => {
        dispatch(success());
        Swal.fire({
          title: "Đăng bán sách thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(failure());
        Swal.fire({
          title: "Đăng bán sách thất bại, vui lòng thử lại sau",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  function request() {
    return {
      type: ADD_BOOK_REQUEST,
    };
  }
  function success() {
    return {
      type: ADD_BOOK_SUCCESS,
    };
  }
  function failure() {
    return {
      type: ADD_BOOK_FAILURE,
    };
  }
};
