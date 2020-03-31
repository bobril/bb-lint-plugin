module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-parameter-properties": "warn",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        camelcase: "warn",
        curly: "warn",
        "dot-notation": "off",
        "eol-last": "off",
        eqeqeq: ["warn", "always"],
        "guard-for-in": "off",
        "id-blacklist": "warn",
        "id-match": "warn",
        "no-bitwise": "off",
        "no-caller": "warn",
        "no-console": [
            "warn",
            {
                allow: [
                    "dirxml",
                    "warn",
                    "error",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "table",
                    "Console",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-fallthrough": "warn",
        "no-new-wrappers": "warn",
        "no-redeclare": "warn",
        "no-shadow": [
            "warn",
            {
                hoist: "all"
            }
        ],
        "no-underscore-dangle": "warn",
        "no-unused-expressions": "off",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "prefer-const": "warn",
        radix: "warn",
        "spaced-comment": "warn"
    }
};