import { strict as assert } from 'node:assert';

import { capitalize } from '../src/capitalize.js';

assert.deepEqual(capitalize('hello'), 'Hello');
assert.deepEqual((''), '');
console.log('Все тесты пройдены!');
