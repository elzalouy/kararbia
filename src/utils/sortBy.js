const _ = require("lodash");
export default function (items, sortBy, asc) {
  return _.orderBy(items, [sortBy], [asc]);
}
