import _ from 'lodash';
import './style.css';
import './Eastern-Europe-Conflicts(ckx4yjck60dcg15mm3jhrb33u)/style.json'
// import drawMap from './map';

// drawMap();

function component() {
  const element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello there,', 'webpack'], ' ');
  element.classList.add('hello');

  return element;

}

document.body.appendChild(component());

