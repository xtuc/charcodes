// @flow
import * as charcodes from "charcodes"

export default function (babel) {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
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

          if (typeof charCodeValue !== "function") {
            path.replaceWith(t.NumericLiteral(charCodeValue))
          } else {
            path.replaceWithSourceString(charCodeValue.toString()) 
          }
        }
      }
    }
  };
}

