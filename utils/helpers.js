const dayjs = require("dayjs");

module.exports = {
  format_date: (date) => {
    return dayjs(date).format("MMMM DD, YYYY");
  }
};
