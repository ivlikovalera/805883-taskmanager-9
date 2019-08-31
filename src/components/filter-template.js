export const getFilterTemplate = (filter) =>
  `<input
    type="radio"
    id="filter__${filter.title}"
    class="filter__input visually-hidden"
    name="filter"
    checked
  />
  <label for="filter__${filter.title}" class="filter__label">
  ${filter.title} <span class="filter__all-count">${filter.count}</span></label
  >`;
