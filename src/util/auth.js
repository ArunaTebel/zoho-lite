import {getValueByName} from "./cookieutils.js";
import jwt_decode from "jwt-decode";

export const isLoggedIn = () => {
    return !!getValueByName('zoho_access_token')
        && !!getValueByName('zoho_id_token')
}

export const getLoggedInUserInfo = () => {
    return jwt_decode(getValueByName('zoho_id_token'))
}