import * as babylon from 'babylon';
import * as types from '@babel/types';
import generate from '@babel/generator';
import traverse from '@babel/traverse';
import {assert} from 'chai';

import visitor from '../src';

function transform(code) {
  const ast = babylon.parse(code, {
    sourceType: 'module',
  });

  traverse(ast, visitor({ types }).visitor, null, {});

  return generate(ast).code;
}

function assertOutput(code, expected) {
  const out = transform(code);

  assert.equal(out, expected);
}

describe('function', () => {

  it('should hoist a function and call it', () => {

    const out = transform(`
      import * as charcodes from "charcodes"

      (charcodes.isDigit(1))
    `)

    const expected = `
      var _temp = function isDigit(code) {
          return code >= 48 && code <= 57;
      };
      _temp(1);
    `

    assertOutput(expected, out)
  })

})

describe('constant', () => {

  it('should inline a constant', () => {

    const out = transform(`
      import * as charcodes from "charcodes"

      charcodes.space
    `)

    const expected = `
      32
    `

    assertOutput(expected, out)
  })

})
