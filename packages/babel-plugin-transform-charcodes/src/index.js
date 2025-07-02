import * as charcodes from "charcodes";
import { parse } from "@babel/parser";
import traverse from '@babel/traverse';

type ast = Object

export default function (babel) {
  const { types: t } = babel;

  function parseFunctionSource(str: string): ast {
    const root = parse(str, {
      sourceType: 'script',
    })

    return root.program.body[0];
  }

  function createInlineFunction(func: ast, id: ast): ast {

    traverse(func, {
      noScope: true,

      Identifier(path) {
        const name = path.node.name

        if (typeof charcodes[name] !== "undefined" && typeof charcodes[name] !== "function") {
          path.replaceWith(t.NumericLiteral(charcodes[name]))
        }
      }
    })

    return t.variableDeclaration(
      'var',
      [t.variableDeclarator(
        id,
        t.toExpression(func),
      )]
    )
  }

  return {

    visitor: {

      ImportDeclaration(path, state) {

        if (path.node.source.value === "charcodes") {
          state.importedLocalName = path.node.specifiers[0].local.name

          // We remove the import just in case
          path.remove()
        }
      },

      MemberExpression(path, state) {
        if (typeof state.importedLocalName !== "undefined" && path.node.object.name == state.importedLocalName) {
          const rightName = path.node.property.name
          const charCodeValue = charcodes[rightName]

          if (typeof charCodeValue === "undefined") {
            throw new Error("unknown key " + rightName)
          } else if (typeof charCodeValue !== "function") {
            path.replaceWith(t.NumberLiteral(charCodeValue))
          } else {
            const fn = parseFunctionSource(charCodeValue.toString())
            const id = path.scope.generateUidIdentifier(rightName)

            state._toHoist.push(createInlineFunction(fn, id))

            path.replaceWith(id)
          }
        }
      },

      Program: {
        enter(path, state) {
          state._toHoist = [];
        },

        exit(path, state) {
          state._toHoist.forEach(x => {
            path.node.body.unshift(x)
          })
        }
      }
    }

  };
}
