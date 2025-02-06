```bash
cmd > ssh-keygen -t rsa -C 'your-email@gmail.com' -f ~/.ssh/gitlab-rsa
# 查看公钥
cmd > cat ~/.ssh/gitlab-rsa.pub
# 添加密钥
cmd > ssh-add ~/.ssh/gitlab-rsa
# 测试连接
cmd > ssh -T git@gitlab.com
```

#### 保存配置

```bash
cmd > vi ~/.ssh/config
```

```
# GitLab
Host gitlab.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/gitlab-rsa
```

> `*.pub`是公钥文件

#### 常用选项

- `-C`: 注释
- `-f`: 密钥文件名
- `-t`: 加密类型
- `-b`: 密钥长度

#### 使用案例

- [服务端配置](/ssh/linux.md)

#### 参考文档

1. https://gist.github.com/projected1/305cb570f09103d7d4c741627eaf1891