import {
    getFridaysOfMonth,
    isMonthLong,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
    showDate,
} from './time.js';

const dateInputEl = document.querySelector('[data-date]');

const buttonFriEl = document.querySelector('[data-button-fridays]');
const infoFriEl = document.querySelector('[data-info-fridays]');

const buttonLongMonthEl = document.querySelector('[data-button-longmonth]');
const infoLongMonthEl = document.querySelector('[data-info-longmonth]');

const buttonShortWeekEl = document.querySelector('[data-button-shortweek]');
const infoShortWeekEl = document.querySelector('[data-info-shortweek]');

const buttonFullWeekEl = document.querySelector('[data-button-fullweek]');
const infoFullWeekEl = document.querySelector('[data-info-fullweek]');

const timeEl = document.querySelector('[data-info-time]');
const dropdownTimezoneEl = document.querySelector('[data-dropdown-timezone]');

let timezone = 'current';

buttonFriEl.addEventListener('click', () => {
    const value = getFridaysOfMonth(dateInputEl.value);
    infoFriEl.textContent = `${value}`;
});

buttonLongMonthEl.addEventListener('click', () => {
    const value = isMonthLong(dateInputEl.value);
    infoLongMonthEl.textContent = `${value}`;
});

buttonShortWeekEl.addEventListener('click', () => {
    const value = shortestWeekDaysNumber(dateInputEl.value);
    infoShortWeekEl.textContent = `${value}`;
});

buttonFullWeekEl.addEventListener('click', () => {
    const value = fullWeeksNumberInMonth(dateInputEl.value);
    infoFullWeekEl.textContent = `${value}`;
});

dropdownTimezoneEl.addEventListener('change', () => {
    timezone = dropdownTimezoneEl.value;
});

setInterval(() => {
    timeEl.textContent = showDate(timezone);
}, 1000);
