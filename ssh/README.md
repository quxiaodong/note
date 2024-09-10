```bash
cmd > ssh-keygen -t rsa -C 'your-email@gmail.com' -f ~/.ssh/gitlab-rsa
cmd > cat ~/.ssh/gitlab-rsa.pub
cmd > ssh-add ~/.ssh/gitlab-rsa
cmd > ssh -T git@gitlab.com # 测试
```

> `*.pub`是公钥文件

#### 常用选项

- `-C`: 注释
- `-f`: 密钥文件名
- `-t`: 密钥类型