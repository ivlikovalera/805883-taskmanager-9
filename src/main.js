import {getMenuTemplate} from './components/menu-template.js';
import {getSearchTemplate} from './components/search-template.js';
import {getFilterTemplate} from './components/filter-template.js';
import {getTaskTemplate} from './components/task-template.js';
import {getFormTemplate} from './components/form-template.js';
import {getBoardContainerTemplate} from './components/board-container-template.js';
import {getButtonLoadMoreTemplate} from './components/load-more-button-template.js';
import {getSortTemplate} from './components/sorting-template.js';
import {getTask} from './data.js';
import {getFilter} from './data-filter.js';
const TASK_COUNT = 3;
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
const renderFilter = (container, filters) => {
  container.insertAdjacentHTML(Position.BEFOREEND, new Array(filters).fill(``).map(getFilterTemplate).join(``));
};
renderFilter(pageApplication, getFilter());

renderTemplate(pageApplication, Position.BEFOREEND, getBoardContainerTemplate());
const board = pageApplication.querySelector(`.board`);
renderTemplate(board, Position.AFTERBEGIN, getSortTemplate());
const boardTasks = board.querySelector(`.board__tasks`);
renderTemplate(boardTasks, Position.AFTERBEGIN, getFormTemplate());

const renderTasks = (container, count) => {
  container.insertAdjacentHTML(Position.BEFOREEND, new Array(count)
    .fill(``)
    .map(getTask)
    .map(getTaskTemplate)
    .join(``));
};

renderTasks(boardTasks, TASK_COUNT);

renderTemplate(board, Position.BEFOREEND, getButtonLoadMoreTemplate());
renderTemplate(controlContainer, Position.BEFOREEND, getMenuTemplate());
