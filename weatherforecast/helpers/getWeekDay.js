export const getWeekDay = (date) => {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let formatDate = new Date(date * 1000);

    return days[formatDate.getDay()];
}