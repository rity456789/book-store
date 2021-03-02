import { updatePassword } from "../../services/profile.services.js";
import Swal from "sweetalert2";

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST"
export const CHANGE_PASSWORD_SUCCESS = "CHANG_PASSWORD_SUCCESS"
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE"
export const CHANGE_TAB = "CHANGE_TAB";

export const changeTab = (tab) => ({ 
    type: CHANGE_TAB, 
    tab: tab 
});

export const changePassword = (newpassword) =>{
    return (dispatch) =>{
        dispatch(request());
        updatePassword(newpassword).then((changePasswordResponse)=>{
            dispatch(success());
            Swal.fire({
                title: "Đổi mật khẩu thành công",
                icon: "success",
                confirmButtonText: "OK",
            })
        }).catch((err)=>{
            console.log("err",err.response);
            dispatch(failure());
            Swal.fire({
                title: "Đổi mật khẩu thất bại",
                icon: "error",
                text: err.response.data.message,
                confirmButtonText: "OK",
            })
        })
    }

    function request(){
        return{
            type: CHANGE_PASSWORD_REQUEST
        }
    }
    function success(){
        return{
            type: CHANGE_PASSWORD_SUCCESS
        }
    }
    function failure(){
        return{
            type: CHANGE_PASSWORD_SUCCESS
        }
    }
}