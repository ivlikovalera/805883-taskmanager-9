export const FILTER_LIST = new Set([`all`, `overdue`, `today`,
  `favorites`, `repeating`, `tags`, `archive`]);
export const getFilter = (i = 0) => [{
  title: Array.from(FILTER_LIST)[i],
  count: 0
}];
