function init() {
  countNumber();
  getDate();
}

function countNumber() {
  const count = document.querySelector("#count");
  const COUNTNUM = "26,301";

  count.innerHTML = COUNTNUM;
}

function getDate() {
  const date = document.querySelector("#date");

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const day = String(today.getDate()).padStart(2, 0);

  date.innerHTML = `${year}.${month}.${day}`;
}

init();
