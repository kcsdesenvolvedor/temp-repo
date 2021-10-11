module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2
},
  "prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }],
    "prettier/prettier": ["error", {}, {
      "fileInfoOptions": {
        "withNodeModules": false
      }
    }],
      "prettier/prettier": ["error", {}, {
        "fileInfoOptions": {
          "withNodeModules": true
        }
      }]



