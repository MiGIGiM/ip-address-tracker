module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "extends": [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            "parserOptions": {
                "project": ["./tsconfig.json"]
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "react/jsx-indent": [
            "error",
            2
        ],
        "react/jsx-indent-props": [
            "error",
            2
        ],
        "react/function-component-definition": ["error", {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
        }],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }]
    }
}
