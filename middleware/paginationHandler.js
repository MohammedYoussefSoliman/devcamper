async function paginationHandler(module, query, callback) {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await module.countDocuments();

  const results = await module.skip(startIndex).limit(limit);

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.previous = {
      page: page - 1,
      limit,
    };
  }

  callback(pagination);
  return results;
}

module.exports = paginationHandler;
