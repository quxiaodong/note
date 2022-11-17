#### 软件安装

https://www.oracle.com/java

- bin
  - java.exe
  - javac.exe
- lib

#### 环境变量

```
# 系统变量
JAVA_HOME
C:\Program Files\java\jdk-15.0.1;
```

```
# 系统变量
PATH
C:\Program Files\java\jdk-15.0.1\bin;
```

```
# 系统变量
CLASSPATH
C:\Program Files\java\jdk-15.0.1\lib;
```

#### 验证安装

```bash
cmd > java 回车
cmd > javac 回车
```

#### 快速开始

```java
// HelloWorld.java

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("hello world");
  }
}
```

```bash
# 编译
cmd > javac HelloWorld.java

# 执行
cmd > java HelloWorld
```