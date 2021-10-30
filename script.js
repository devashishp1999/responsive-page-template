`use strict`;

const search = document.querySelector(`.search`);
const hamburger = document.querySelector(`.lines-3`);

const navBar = document.querySelector(`.nav-bar`);
const cross = document.querySelector(`.cross`);

search.classList.add(`search`);
search.classList.remove("expand-search");

search.addEventListener(`click`, function () {
  search.classList.toggle(`search`);
  search.classList.toggle("expand-search");
});

hamburger.addEventListener(`click`, function () {
  navBar.style.left = `0`;
});
cross.addEventListener(`click`, function () {
  navBar.style.left = `-100%`;
});
