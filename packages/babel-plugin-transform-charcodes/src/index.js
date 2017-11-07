// @flow
import * as charcodes from "charcodes"

export default function (babel) {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
    visitor: {
      ImportDeclaration(path, state) {
        state.importedLocalName = path.node.specifiers[0].local.name
      },
      
      MemberExpression(path, state) {
        if (path.node.object.name == state.importedLocalName) {
          const rightName = path.node.property.name

          // TODO(sven): we can evaluate the function and inline the result
          if (typeof charcodes[rightName] !== "function") {
            path.replaceWith(t.NumericLiteral())
          }
        }
      }
    }
  };
}
