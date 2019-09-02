import {tasks} from './data.js';
export const ALL_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

export const getFilters = () =>
  ALL_FILTERS
    .map((it) => ({
      title: it,
      count: getCountTasks(it)
    }));

const getCountTasks = (it) => {
  switch (it) {
    case ALL_FILTERS[0]:
      it = tasks.length;
      break;
    case ALL_FILTERS[1]:
      it = tasks.reduce((acc, {dueDate}) =>
        ((Date.now() > dueDate) ? acc + 1 : acc), 0);
      break;
    case ALL_FILTERS[2]:
      it = tasks.reduce((acc, {dueDate}) =>
        (dueDate === Date.now() ? acc + 1 : acc), 0);
      break;
    case ALL_FILTERS[3]:
      it = tasks.reduce((acc, {isFavorite}) =>
        (isFavorite ? acc + 1 : acc), 0);
      break;
    case ALL_FILTERS[4]:
      it = tasks.reduce((acc, {repeatingDays}) =>
        (Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? acc + 1 : acc), 0);
      break;
    case ALL_FILTERS[5]:
      it = tasks.reduce((acc, {tags}) =>
        (tags.size ? acc + 1 : acc), 0);
      break;
    case ALL_FILTERS[6]:
      it = tasks.reduce((acc, {isArchive}) => (isArchive ? acc + 1 : acc), 0);
      break;
  }
  return it;
};

