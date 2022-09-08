import axios from 'axios';

export const get = (url, config) => {
    try {
        return axios.get(
            url,
            {method: 'get', ...config}
        );
    } catch (error) {
        console.error(error);
    }
}