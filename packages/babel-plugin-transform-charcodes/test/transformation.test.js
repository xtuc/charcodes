import { parse } from '@babel/parser';
import * as types from '@babel/types';
import generate from '@babel/generator';
import traverse from '@babel/traverse';

import visitor from '../src';

function transform(code) {
  const ast = parse(code, {
    sourceType: 'module',
  });

  traverse(ast, visitor({ types }).visitor, null, {});

  return generate(ast).code;
}

function assertOutput(code, expected) {
  const out = transform(code);

  expect(out).toEqual(expected);
}

describe('function', () => {

  it('should hoist a function and call it', () => {

    const out = transform(`
      import * as charcodes from "charcodes"

      (charcodes.isDigit(1))
    `)

    const expected = `
      var _isDigit = function isDigit(code) {
          return code >= 48 && code <= 57;
      };
      _isDigit(1);
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

  it('should throw if the key is unknown', () => {

    const fn = () => transform(`
      import * as charcodes from "charcodes"

      charcodes.somethinglikefoobar
    `)

    expect(fn).toThrow(/unknown key/);
  })

})
