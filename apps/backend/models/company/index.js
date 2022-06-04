const mocks = require('../../mocks');
const issuesImpacts = mocks.issuesImpacts;

const company = ({ company, ...findings }) => {
  let issueTypes = [];

  for (const issuesImpactsKey in issuesImpacts) {
    const score =
      findings[issuesImpactsKey] *
      issuesImpacts[issuesImpactsKey].impact_per_finding;
    issueTypes.push({
      key: issuesImpactsKey,
      score,
      name: issuesImpacts[issuesImpactsKey].name,
    });
  }

  const totalScore = issueTypes.reduce((prev, curr) => prev + curr.score, 0);

  return {
    company,
    score: 100 - totalScore,
    issueTypes,
  };
};

module.exports = company;
