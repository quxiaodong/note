```mysql
# 过滤每条数据中指定列相同的值
mysql> SELECT DISTINCT 列名 FROM 表名;

# 过滤每条数据中指定多个列都相同的值
mysql> SELECT DISTINCT 列名1, ..., 列名n FROM 表名;
```

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
  ('e', 50, NULL)
;
```

```mysql
mysql> SELECT DISTINCT gender FROM user;
+--------+
| gender |
+--------+
| male   |
| female |
| NULL   |
+--------+
3 rows in set (0.01 sec)
```