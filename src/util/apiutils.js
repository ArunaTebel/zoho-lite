import {getValueByName} from "./cookieutils.js";
import {get} from "./httpsutils.js";

const env = import.meta.env;
const zohoApiUrl = env.VITE_ZOHO_API_URL;

const _core = {
    getAuthRequestHeaders: () => {
        return {
            'Authorization': `Bearer ${getValueByName(
                env.VITE_ZOHO_ACCESS_TOKEN_COOKIE_NAME
            )}`
        }
    }
}

export const API = {
    portal: {
        getAll: async () => {
            await get(
                `${zohoApiUrl}/portals/`,
                {headers: _core.getAuthRequestHeaders()}
            )
        }
    }
}