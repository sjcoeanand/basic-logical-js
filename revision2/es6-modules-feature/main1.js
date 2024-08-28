import { pi, areaOfCircle, circumferenceOfCircle} from './es6-modules.js'

console.log(pi);
document.querySelector('.pi').innerHTML = pi;
document.querySelector('#area').innerHTML = areaOfCircle(3);
document.querySelector('.circumference').innerHTML = circumferenceOfCircle(3);