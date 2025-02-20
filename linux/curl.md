```bash
# 发送GET请求
curl https://api.example.com

# 发送JSON格式的POST请求
curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "age": 30}' https://api.example.com/submit
```

#### 常用选项

- `-o-`: 表示将下载的内容输出到标准输出（即终端中），而不是保存到文件中

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 等同于，但文件不会下载到本地
curl -o install.sh https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh
bash install.sh
```