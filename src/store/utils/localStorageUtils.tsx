export const setItem = (key: string, token: string) => {
    return localStorage.setItem(key, token)
}

export const getItem = (key: string) => {
    return localStorage.getItem(key)
}

export const remove = (key: string) => {
    return localStorage.removeItem(key)
}
export const clear = () => {
    return localStorage.clear()
}