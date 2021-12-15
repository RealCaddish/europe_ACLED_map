import _ from 'lodash';
import './style.css';
import "./Eastern-Europe-Conflicts(ckx4yjck60dcg15mm3jhrb33u)/style.json"
import './map'
import makeMap from './map';

// makeMap()

function component() {
  const element = document.createElement('div');

  element.setAttribute('id', 'map')
  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello there,', 'webpack'], ' ');
  // element.classList.add('hello');

   makeMap()

  return element;

}

document.body.appendChild(component());

