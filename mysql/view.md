#### 查看视图

```mysql
mysql> SHOW TABLES;
```

```mysql
# 查看视图定义
mysql> SHOW CREATE VIEW 视图名;
```

#### 创建视图

```mysql
mysql> CREATE VIEW 视图名 AS 查询语句;
```

##### 案例

```mysql
mysql> CREATE TABLE user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(10),
  age INT,
  gender ENUM('male', 'female')
);

mysql> INSERT INTO user(nickname, age, gender) VALUES
  ('a', 10, 'male'),
  ('b', 20, 'female'),
  ('c', 30, 'male'),
  ('d', 40, 'female'),
  ('e', 50, NULL);
```

```mysql
mysql> CREATE VIEW searchUser AS SELECT * FROM user;
```

#### 使用视图

> 视图也可以被称为虚拟表，因为我们可以跟表一样进行增删改查

```mysql
mysql> SELECT nickname FROM searchUser WHERE gender IS NULL;
+----------+
| nickname |
+----------+
| e        |
+----------+
1 row in set (0.01 sec)
```

#### 删除视图

```mysql
mysql> DROP VIEW 视图名;
```