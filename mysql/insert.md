```mysql
# 单条插入
mysql> INSERT INTO 表名(列1, 列2, ...) VALUES(列1值, 列2值, ...);
```

```mysql
# 批量插入
mysql> INSERT INTO 表名(列1, 列2, ...) VALUES(列1值, 列2值, ...), ..., (列1值, 列2值, ...);
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