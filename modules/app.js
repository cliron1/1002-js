import { data } from './data.js';

const preElem = document.getElementById('my-json');
preElem.innerHTML = JSON.stringify(data, undefined, 2);