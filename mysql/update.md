```mysql
# 更新所有数据
mysql> UPDATE 表名 SET 列1=值1, ..., 列n=值n;
```

```mysql
# 更新满足条件的数据
mysql> UPDATE 表名 SET 列1=值1, ..., 列n=值n [表达式];
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
mysql> UPDATE user SET gender='male' WHERE gender IS NULL;
```