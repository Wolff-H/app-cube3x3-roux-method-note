/**
 * 必须使用 commonjs 格式的模块定义，否则 eslintrc 文件将不能被成功解析，进而影响 eslint 功能。
 */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential', // vue 官方对模板中的格式化配置
        'plugin:@typescript-eslint/recommended', // 支持对 ts 的解析
        // 'eslint:recommended',
        // '@vue/typescript',
        './.eslintrc-auto-import.json', // 自动引入 vue 相关的类型定义
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-dangle': ['warn', 'always-multiline'],
        // 'brace-style': ['warn', 'allman', { 'allowSingleLine': true }],
        'brace-style': 'off',
        // 'keyword-spacing': ["warn", { "before": false, "after": false }],
        // "no-unused-vars": ["off", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false }],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'vue/multi-word-component-names': 'off',
        // "no-unused-vars": 'warn',
        // 'vue/script-setup-uses-vars': 'warn',
    },
    globals: {
        'processResponse': 'readonly',
        'app_session_storage': 'readonly',
        'app_local_storage': 'readonly',
    },
}