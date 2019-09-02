import {TaskCount} from './utils.js';
import {getMenuTemplate} from './components/menu-template.js';
import {getSearchTemplate} from './components/search-template.js';
import {getFilterTemplate} from './components/filter-template.js';
import {getFiltersBoxTemplate} from './components/filters-box-template.js';
import {getTaskTemplate} from './components/task-template.js';
import {getTaskEditTemplate} from './components/task-edit-template.js';
import {getBoardContainerTemplate} from './components/board-container-template.js';
import {getButtonLoadMoreTemplate} from './components/load-more-button-template.js';
import {getSortTemplate} from './components/sorting-template.js';
import {tasks} from './data.js';
import {getFilters} from './data-filter.js';

const Position = {
  BEFOREEND: `beforeEnd`,
  AFTERBEGIN: `afterBegin`,
};

const pageApplication = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.main__control`);

const renderTemplate = (container, place, Template) => {
  container.insertAdjacentHTML(place, Template);
};

renderTemplate(pageApplication, Position.BEFOREEND, getSearchTemplate());
renderTemplate(pageApplication, Position.BEFOREEND, getFiltersBoxTemplate());
const filtersBox = pageApplication.querySelector(`.main__filter`);
const renderFilters = (container, filters) => {
  container.insertAdjacentHTML(Position.BEFOREEND,
      filters
      .map((filter) => getFilterTemplate(filter))
      .join(``));
};

renderFilters(filtersBox, getFilters());

renderTemplate(pageApplication, Position.BEFOREEND, getBoardContainerTemplate());
const board = pageApplication.querySelector(`.board`);
renderTemplate(board, Position.AFTERBEGIN, getSortTemplate());
const boardTasks = board.querySelector(`.board__tasks`);

const renderComponentTask = (template, start, count) => {
  boardTasks.insertAdjacentHTML(Position.BEFOREEND, tasks
    .slice(start, count)
    .map(template)
    .join(``));
};
renderComponentTask(getTaskEditTemplate, TaskCount.start, TaskCount.edit);
renderComponentTask(getTaskTemplate, TaskCount.edit, TaskCount.step);

renderTemplate(board, Position.BEFOREEND, getButtonLoadMoreTemplate());
const buttonLoadMore = pageApplication.querySelector(`.load-more`);

buttonLoadMore.addEventListener(`click`, () => {
  renderComponentTask(getTaskTemplate, TaskCount.step);
  buttonLoadMore.remove();
});

renderTemplate(controlContainer, Position.BEFOREEND, getMenuTemplate());
