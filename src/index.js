import _ from 'lodash';
import './style.css';
import data from './data/cleaned_conflicts.csv';

function component() {
  const element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello there,', 'webpack'], ' ');

  return element;

}

console.log(data)

document.body.appendChild(component());

