export const convertDateFormat = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const formattedDate = [year, month, day].join('-');
    return formattedDate;
};