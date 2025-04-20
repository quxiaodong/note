```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "always", // 自动删除未使用的变量
    "source.organizeImports": "always" // 自动对引入的库排序
  },
  "editor.formatOnSave": true, // 保存时自动格式化
  "editor.defaultFormatter": "esbenp.prettier-vscode" // 默认格式化工具
}
```

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.trailingComma": "none"
}
```