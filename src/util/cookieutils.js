export const getValueByName = (name) => {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
}

export const setCookieValue = (name, value, expires = 0, path = '/') => {
    document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
}
