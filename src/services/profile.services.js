import axios from "../ultis/axios";

export function getUserInfor() {
    return axios.get("/users/me", {
    });
}