```mysql
# 单个列
mysql> SELECT * FROM 表名 ORDER BY 列名 ASC|DESC;

# 多个列
mysql> SELECT * FROM 表名 ORDER BY 列名1 ASC|DESC, 列名2 ASC|DESC;
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
mysql> SELECT * FROM user ORDER BY age DESC;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  5 | e        |   50 | NULL   |
|  4 | d        |   40 | female |
|  3 | c        |   30 | male   |
|  2 | b        |   20 | female |
|  1 | a        |   10 | male   |
+----+----------+------+--------+
5 rows in set (0.00 sec)
```