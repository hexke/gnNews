export const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleDateString();
}

export const getCurrentTime = () => {
    return new Date().toLocaleTimeString();
}