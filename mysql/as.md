```mysql
mysql> SELECT 列名 [AS] 列的别名 FROM 表名;
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
mysql> SELECT id, nickname as name, age, gender FROM user;
+----+------+------+--------+
| id | name | age  | gender |
+----+------+------+--------+
|  1 | a    |   10 | male   |
|  2 | b    |   20 | female |
|  3 | c    |   30 | male   |
|  4 | d    |   40 | female |
|  5 | e    |   50 | NULL   |
+----+------+------+--------+
5 rows in set (0.01 sec)
```