module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "rules":{
        "valid-jsdoc": ["error", {
            "requireReturn": true,
            "requireReturnType": true,
            "requireParamDescription": false,
            "requireReturnDescription": true
          }],
          "require-jsdoc": ["error", {
              "require": {
                  "FunctionDeclaration": true,
                  "MethodDefinition": true,
                  "ClassDeclaration": true
              }
          }],
        "consistent-return":["off"],
        "prefer-template": ["off"],
        "class-methods-use-this": ["off"],
        "linebreak-style": ["off"]
    }
};