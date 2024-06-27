const Handlebars = require('handlebars')
const dayjs = require("dayjs");
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

dayjs.extend(isSameOrAfter);

const helpers = {
  
  format_date: (date) => {
    return dayjs(date).format("MMMM DD, YYYY");
  }, 
  
  SameOrAfterToday: (date) => {
    const today = dayjs();

    const checkInDate = dayjs(date);

    // Compare if checkin date is same or after current date for upcoming reservations 
    return checkInDate.isSameOrAfter(today);
  },

  beforeToday: (date) => {
    const today = dayjs();

    const checkInDate = dayjs(date);

    // Compare if checkin date is before today for past reservations
    return checkInDate.isBefore(today);
    
  }, 
};

// Register the helpers with Handlebars
Object.keys(helpers).forEach((key) => {
  Handlebars.registerHelper(key, helpers[key]);
});

module.exports = helpers;