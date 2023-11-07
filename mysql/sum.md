```mysql
mysql> SELECT SUM(列名) FROM 表名;
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
mysql> SELECT SUM(age) FROM user;
+----------+
| SUM(age) |
+----------+
|      150 |
+----------+
1 row in set (0.00 sec)
```