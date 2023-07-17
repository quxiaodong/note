```bash
cmd > docker run -d -p 8080:8080 -p 50000:50000 --name test-jenkins jenkins/jenkins:latest

# cmd > mkdir -p /docker-jenkins
# cmd > chown -R 1000:1000 /docker-jenkins
# cmd > docker run \
# -d \
# -p 8080:8080 \
# -p 50000:50000 \
# -v /docker-jenkins:/var/jenkins_home \
# --restart=always \
# --name test-jenkins \
# jenkins/jenkins:latest
```

```bash
# 本地电脑测试验证
# 浏览器访问 宿主机IP:8080
```