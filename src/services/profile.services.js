import axios from "../ultis/axios";

export function getUserInfor() {
    return axios.get("/users/me", {
    });
}
export function updatePassword(passwordUpdated){
    return axios.patch("/auth/password",{
        passwordUpdated
    });
}