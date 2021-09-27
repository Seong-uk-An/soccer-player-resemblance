function init() {
  countNumber();
  getDate();
}

function countNumber() {
  const count = document.querySelector("#count");
  const COUNTNUM = "25,293";

  count.innerHTML = COUNTNUM;
}

function getDate() {
  const date = document.querySelector("#date");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  date.innerHTML = `${year}.${month}.${day}`;
}

init();
