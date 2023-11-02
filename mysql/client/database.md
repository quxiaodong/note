#### 查看数据库

```mysql
mysql> SHOW DATABASES;
```

#### 创建数据库

```mysql
mysql> CREATE DATABASE 数据库名;
```

```mysql
# 使用IF NOT EXISTS避免创建同名数据库报错
mysql> CREATE DATABASE IF NOT EXISTS 数据库名;
```

#### 删除数据库

```mysql
mysql> DROP DATABASE 数据库名;
```

```mysql
# 使用IF EXISTS避免删除不存在的数据库报错
mysql> DROP DATABASE IF EXISTS 数据库名;
```

#### 切换数据库

```mysql
mysql> USE 数据库名;
```

#### 当前所在库

```mysql
mysql> SELECT DATABASE();
```