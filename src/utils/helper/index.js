import * as QueryString from 'query-string';

export function getQueryString = (queryParams) => QueryString.stringify(queryParams, {
  arrayFormat: 'bracket',
  skipNull: true,
});

export function getQueryParams = (queryString) => QueryString.parse(queryString, {
  arrayFormat: 'bracket',
  parseBooleans: true,
});
