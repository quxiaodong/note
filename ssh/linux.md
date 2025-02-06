#### 客户端

```bash
# 生成公密钥
cmd > ssh-keygen -t rsa -b 2048 -f ~/.ssh/aliyun -C 'quxiaodong'
# 查看公钥
cmd > cat ~/.ssh/aliyun.pub
```

```bash
# 编辑配置
cmd > vi ~/.ssh/config

Host aliyun
  User root
  HostName 121.41.102.203
  IdentityFile ~/.ssh/aliyun
```

```bash
# 连接服务器
cmd > ssh aliyun
```

#### 服务端

```bash
cmd > mkdir -p ~/.ssh
echo "你的公钥内容" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

```bash
# 编辑配置
cmd > vi /etc/ssh/sshd_config

# 配置端口
Port 22
# 禁用密码登录
PasswordAuthentication no
# 允许证书登录
PubkeyAuthentication yes
# 证书地址
AuthorizedKeysFile .ssh/authorized_keys

# yes: 允许root用户使用ssh登录，可以密码或公钥
# no: 禁止root用户使用ssh登录
# without-password: 允许root用户使用ssh登录，只允许公钥
# prohibit-password: 允许root用户使用ssh登录，只允许公钥，跟without-password相同
PermitRootLogin yes

# 重启服务
cmd > systemctl restart sshd
```