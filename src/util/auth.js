import {getValueByName, setCookieValue} from "./cookieutils.js";
import jwt_decode from "jwt-decode";

const env = import.meta.env

export const isLoggedIn = () => {
    return getValueByName(env.VITE_ZOHO_ACCESS_TOKEN_COOKIE_NAME)
        && getLoggedInUserInfo().hasOwnProperty('sub')
}

export const getLoggedInUserInfo = () => {
    try {
        return jwt_decode(getValueByName(env.VITE_ZOHO_ID_TOKEN_COOKIE_NAME))
    } catch (e) {
        return {}
    }
}

export const setCookiesOnLogin = (callback) => {
    const params = new URLSearchParams(location.hash);
    if (params.has('access_token') && params.has('id_token')) {
        setCookieValue(
            env.VITE_ZOHO_ACCESS_TOKEN_COOKIE_NAME,
            params.get('access_token')
        )
        setCookieValue(
            env.VITE_ZOHO_ID_TOKEN_COOKIE_NAME,
            params.get('id_token')
        )
        callback(true)
    }
    callback(false)
}

export const clearCookiesOnLogout = () => {
    setCookieValue(
        env.VITE_ZOHO_ACCESS_TOKEN_COOKIE_NAME,
        '',
        'Thu, 01 Jan 1970 00:00:00 UTC'
    );
    setCookieValue(
        env.VITE_ZOHO_ID_TOKEN_COOKIE_NAME,
        '',
        'Thu, 01 Jan 1970 00:00:00 UTC'
    );
}

export const getAuthURI = () => {
    return `${env.VITE_ZOHO_AUTH_URL}?scope=${env.VITE_ZOHO_AUTH_SCOPES}&client_id=${env.VITE_ZOHO_CLIENT_ID}&response_type=token&access_type=online&redirect_uri=${env.VITE_APP_BASE_URI}`
}