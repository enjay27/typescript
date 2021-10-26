import _ from 'lodash';

declare var GLOBAL: string; // it will exist

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);
