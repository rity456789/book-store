import React, { useRef } from "react";
import Swal from "sweetalert2";
const ResetPassword = (props) =>{
  const newPassword = useRef("");
  const confirmNewPassword = useRef("");
  const changePasswordClick = ()=>{
    
    const newPass= confirmNewPassword.current.value;
    
     if(newPassword.current.value!==confirmNewPassword.current.value){
      Swal.fire({
          title: "invalid between newpass and repeatedpass",
          icon: "error",
          confirmButtonText: "Try again!",
      })
     }
      else  {props.changePassword(newPass);}
  }
  return (
    <div className="col-lg-9 pt-lg-4">
      <h2 className="pre-label font-size-base">Change password</h2>
      <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="old-pass">
            Old password
          </label>
          <input
            className="form-control form-control-simple"
            type="password"
            id="old-pass"
          />
        </div>
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="new-pass">
            New password
          </label>
          <input
            className="form-control form-control-simple"
            type="password"
            id="new-pass"
            ref = {newPassword}
          />
        </div>
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="new-pass-rep">
            Repeat New password
          </label>
          <input
            className="form-control form-control-simple"
            type="password"
            id="new-pass-rep"
            ref = {confirmNewPassword}
          />
        </div>
        <div className="text-right mt-4 pt-2">
          <button
            className="btn btn-rounded btn-outline-primary btn-sm px-3"
            type="button"
            onClick = {()=>changePasswordClick()}
          >
            <i className="fa fa-save mr-2" />
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
