```
# 默认配置文件
Windows: %APPDATA%\Code\User\settings.json
MacOS: ~/Library/Application Support/Code/User/settings.json
Linux: ~/.config/Code/User/settings.json
```

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
  "prettier.semi": false,
  "prettier.useTabs": false,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.trailingComma": "none"
}
```