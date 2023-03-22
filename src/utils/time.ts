export const formatDate = (dateTime: string) => {
    return new Date(dateTime).toLocaleDateString();
}