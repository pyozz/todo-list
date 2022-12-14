const todolistTime = document.querySelector('.todolist-time');
const date = todolistTime.querySelector('.date');
const time = todolistTime.querySelector('.time');

// Datetime
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDate = now.getDate();

const nowHours = now.getHours();
const nowMinutes = now.getMinutes();

todolistTime.setAttribute('datetime', `${nowYear}-${nowMonth}-${nowDate} ${nowHours}:${nowMinutes}`);

date.innerText = `${nowYear}/${nowMonth}/${nowDate}`;
time.innerText = `${nowHours}:${nowMinutes}`;