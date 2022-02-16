async function queryHandler(moduleData, query) {
  // prepare mongo operators
  const queryString = JSON.stringify(query).replace(
    /\b(lt|lte|gt|gte|in)\b/g,
    (match) => `$${match}`
  );
  // determine none params keys
  const noneParams = ["select", "sort", "page", "limit"];
  noneParams.forEach((param) => delete queryString[param]);

  const queryObject = JSON.parse(queryString);
  queryData = moduleData.find(queryObject);

  if (query.select) {
    const selectFields = query.select.split(",").join(" ");
    moduleData.select(selectFields);
  }
  if (query.sort) {
    const selectFields = query.select.split(",").join(" ");
    moduleData.select(selectFields);
  }
  return moduleData;
}

module.exports = queryHandler;
