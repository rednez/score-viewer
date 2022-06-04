const lodash = require('lodash');
const company = require('../../models/company');
const companiesFindings = require('../../mocks').companiesFindings;

const isSortByQueryValid = (value) => value === 'company' || value === 'score';

const getOrderQuery = (value) =>
  value === 'asc' || value === 'desc' ? value : 'desc';

const companiesResponse = (req, res) => {
  const sortByQuery = req.query.sortBy;
  const orderQuery = getOrderQuery(req.query.order);
  const companies = companiesFindings.map(company);

  return res.json(
    isSortByQueryValid(sortByQuery)
      ? lodash.orderBy(companies, [sortByQuery], [orderQuery])
      : companies
  );
};

module.exports = companiesResponse;
