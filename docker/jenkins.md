```bash
cmd > docker run -d -p 8080:8080 -p 50000:50000 --name test-jenkins jenkins/jenkins:latest

# cmd > mkdir -p /some-project/jenkins
# cmd > chown -R 1000:1000 /some-project/jenkins
# cmd > docker run \
# -d \
# -p 8080:8080 \
# -p 50000:50000 \
# --restart=on-failure \
# -v /some-project/jenkins:/var/jenkins_home \
# --name test-jenkins \
# jenkins/jenkins:latest
```

```bash
# 本地电脑测试验证
# 浏览器访问 宿主机IP:8080
```