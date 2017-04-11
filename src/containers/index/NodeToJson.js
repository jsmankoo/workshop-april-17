export default function nodeToJson(node) {
  if (!node) return null

  if (true) {
    switch (true) {
      case Array.isArray(node.body):
        return {
          name: node.type,
          children: node.body.map(nodeToJson)
        }
      case Array.isArray(node.declarations):
        return {
          name: node.type,
          children: node.declarations.map(nodeToJson)
        }
      case Array.isArray(node.properties):
        return {
          name: node.type,
          children: node.properties.map(nodeToJson)
        }
      case Array.isArray(node.elements):
        return {
          name: node.type,
          children: node.elements.map(nodeToJson),
        }
      case node.type === 'IfStatement':
      case node.type === 'ConditionalExpression':
        return {
          name: node.type,
          children: node.alternate ? [
            {
              name: 'Test',
              children: [nodeToJson(node.test)],
            },
            {
              name: 'Consequent',
              children: [nodeToJson(node.consequent)]
            },
            {
              name: 'Alternate',
              children: [nodeToJson(node.alternate)]
            }
          ] : [
              {
                name: 'Test',
                children: [nodeToJson(node.test)],
              },
              {
                name: 'Consequent',
                children: [nodeToJson(node.consequent)]
              }
            ]
        }
      case node.type === 'ForOfStatement':
        return {
          name: 'ForOfStatement',
          children: [
            {
              name: 'Iterator',
              size: 1,
            },
            {
              name: 'Iteratee',
              children: [nodeToJson(node.right)],
            },
            nodeToJson(node.body),
          ]
        }
      case node.type === 'ForStatement':
        return {
          name: 'ForStatement',
          children: [
            {
              name: 'Init',
              children: [nodeToJson(node.init)]
            },
            {
              name: 'Test',
              children: [nodeToJson(node.test)],
            },
            {
              name: 'Update',
              children: [nodeToJson(node.update)]
            },
            {
              name: 'Body',
              children: [nodeToJson(node.body)]
            }
          ]
        }
      case node.type === 'WhileStatement':
        return {
          name: 'WhileStatement',
          children: [
            {
              name: 'Test',
              children: [nodeToJson(node.test)]
            },
            {
              name: 'Body',
              children: [nodeToJson(node.body)]
            }
          ]
        }
      case node.type === 'Property':
        return {
          name: node.type,
          children: [
            nodeToJson(node.key),
            nodeToJson(node.value)
          ]
        }
      case node.type === 'FunctionDeclaration':
      case node.type === 'ArrowFunctionExpression':
        return {
          name: (node.id && node.id.name) || 'FunctionDeclaration',
          children: [
            {
              name: 'Params',
              children: node.params.map(nodeToJson)
            },
            {
              name: 'Body',
              children: [nodeToJson(node.body)]
            }
          ]
        }
      case node.type === 'ExpressionStatement':
        return {
          name: node.type,
          children: [nodeToJson(node.expression)]
        }
      case node.type === 'MemberExpression':
        return {
          name: 'MemberExpression',
          children: [
            nodeToJson(node.object),
            nodeToJson(node.property)
          ]
        }
      case node.type === 'CallExpression':
        return {
          name: 'CallExpression',
          children: [
            nodeToJson(node.callee),
            {
              name: 'Arguments',
              children: node.arguments.map(nodeToJson)
            }
          ]
        }
      case node.type === 'ReturnStatement':
        return {
          name: 'ReturnStatement',
          children: [nodeToJson(node.argument)]
        }
      case node.type === 'VariableDeclarator':
        return {
          name: 'VariableDeclarator',
          children: [
            nodeToJson(node.id),
            nodeToJson(node.init)
          ]
        }
      case node.type === 'BinaryExpression':
      case node.type === 'AssignmentExpression':
        return {
          name: node.type,
          children: [
            {
              name: 'Left',
              children: [nodeToJson(node.left)]
            },
            {
              name: 'Right',
              children: [nodeToJson(node.right)]
            }
          ]
        }
      default:
        return {
          name: node.type,
          size: 1,
        }
    }
  }
}