#### 查看过程

```mysql
mysql> SHOW PROCEDURE STATUS [LIKE 过程名];
```

```mysql
mysql> SHOW CREATE PROCEDURE 过程名;
```

#### 创建过程

```mysql
mysql> CREATE PROCEDURE 过程名([[IN|OUT|INOUT] 参数1 数据类型, ..., [IN|OUT|INOUT] 参数n 数据类型])
  BEGIN
    执行语句
  END
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
mysql> DELIMITER $
mysql> CREATE PROCEDURE insertUser(_nickname VARCHAR(10), _age INT)
  BEGIN
    SELECT * FROM user;
    INSERT INTO user(nickname, age) VALUES(_nickname, _age);
    SELECT * FROM user;
  END
$
mysql> DELIMITER ;
```

```mysql
mysql> CALL insertUser('f', 60);
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  1 | a        |   10 | male   |
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
|  4 | d        |   40 | female |
|  5 | e        |   50 | NULL   |
+----+----------+------+--------+
5 rows in set (0.01 sec)

+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  1 | a        |   10 | male   |
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
|  4 | d        |   40 | female |
|  5 | e        |   50 | NULL   |
|  6 | f        |   60 | NULL   |
+----+----------+------+--------+
6 rows in set (0.02 sec)
```

#### 删除过程

```mysql
mysql> DROP PROCEDURE 过程名;
```