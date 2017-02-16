import * as R from 'ramda';
import sum, {subtract, div } from './utils';

import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 8, 9, 10, 1, 1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);
console.log(sum(3, 3));
console.log(subtract(4, 2));
console.log(div(8, 8));
