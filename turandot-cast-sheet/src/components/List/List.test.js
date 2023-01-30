// TODO:

import { test, expect } from "@jest/globals";
import { createList } from './index.js';

test(`Given objLength and listLength, 
      the createList function returns "true" 
      when objLength is equal to listLength, and returns "false" when objLength is inequal to listLength`, 
      function() {
  let objLength = 4;
  let listLength = 4;
  let actual = createList(objLength, listLength);
  let expected = `true`;
  expect(actual).toBe(expected);
  console.log(
  `
     actual: ${actual}. 
     expected: ${expected}.
  `
    );
});