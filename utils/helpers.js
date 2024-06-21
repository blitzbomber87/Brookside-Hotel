const dayjs = require('dayjs');

module.exports = {
  isValidDate: (dateString) => {
    return dayjs(dateString).isValid();
  },
  isCheckInBeforeCheckOut: (checkIn, checkOut) => {
    const checkInDate = dayjs(checkIn);
    const checkOutDate = dayjs(checkOut);
    return checkInDate.isBefore(checkOutDate);
  },
  formatDate: (date) => {
    return dayjs(date).format("MMMM DD, YYYY");
  }
};
