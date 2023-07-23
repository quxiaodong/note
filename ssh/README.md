```bash
cmd > ssh-keygen -t rsa -C 'your-email@gmail.com' -f ~/.ssh/gitlab-rsa
cmd > cat ~/.ssh/gitlab-rsa.pub
```

> `*.pub`是公钥文件

#### 常用选项

- `-C`: 注释
- `-f`: 密钥文件名
- `-t`: 密钥类型