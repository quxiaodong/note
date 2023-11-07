```mysql
mysql> SELECT 列名1, ..., 列名n FROM 表名 LIMIT 起始行数, 限制条数;
```

> `LIMIT`后面只有一个参数时，代表的是限制条数，起始行数默认为`0`

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
mysql> SELECT * FROM user LIMIT 1, 2;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
+----+----------+------+--------+
2 rows in set (0.01 sec)
```