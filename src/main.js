import {getMenuTemplate} from './components/menu-template.js';
import {getSearchTemplate} from './components/search-template.js';
import {getFilterTemplate} from './components/filter-template.js';
import {getTaskTemplate} from './components/task-template.js';
import {getFormTemplate} from './components/form-template.js';
import {getBoardContainerTemplate} from './components/board-container-template.js';
import {getButtonLoadMoreTemplate} from './components/load-more-button-template.js';
import {getSortTemplate} from './components/sorting-template.js';

const CARD_COUNT = 3;
const pageApplication = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.main__control`);

const renderTemplate = (container, place, Template) => {
  container.insertAdjacentHTML(place, Template);
};

renderTemplate(pageApplication, `beforeEnd`, getSearchTemplate());
renderTemplate(pageApplication, `beforeEnd`, getFilterTemplate());

renderTemplate(pageApplication, `beforeEnd`, getBoardContainerTemplate());
const board = pageApplication.querySelector(`.board`);
renderTemplate(board, `afterBegin`, getSortTemplate());
const boardTasks = board.querySelector(`.board__tasks`);
renderTemplate(boardTasks, `afterBegin`, getFormTemplate());
for (let i = 0; i < CARD_COUNT; i++) {
  renderTemplate(boardTasks, `beforeEnd`, getTaskTemplate());
}

renderTemplate(board, `beforeEnd`, getButtonLoadMoreTemplate());
renderTemplate(controlContainer, `beforeEnd`, getMenuTemplate());
