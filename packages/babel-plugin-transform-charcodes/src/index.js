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
          
          path.replaceWith(t.numberLiteral(charcodes[rightName]))
        }
      }
    }
  };
}

