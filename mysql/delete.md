```mysql
# 删除所有数据
mysql> DELETE FROM 表名;
```

```mysql
# 删除满足条件的数据
mysql> DELETE FROM 表名 [表达式];
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
mysql> DELETE FROM user ORDER BY id DESC LIMIT 1;
```