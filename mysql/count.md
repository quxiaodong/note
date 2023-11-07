```mysql
# 对所有列进行计数，不会过滤值为NULL的行
mysql> SELECT COUNT(*) FROM 表名;

# 对指定列进行计数，会过滤值为NULL的行
mysql> SELECT COUNT(列名) FROM 表名;
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
mysql> SELECT COUNT(*) FROM user;
+----------+
| COUNT(*) |
+----------+
|        5 |
+----------+
1 row in set (0.01 sec)
```

```mysql
mysql> SELECT COUNT(gender) FROM user;
+---------------+
| COUNT(gender) |
+---------------+
|             4 |
+---------------+
1 row in set (0.00 sec)
```