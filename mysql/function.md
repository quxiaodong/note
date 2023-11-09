#### 查看函数

```mysql
mysql> SHOW FUNCTION STATUS [LIKE 函数名];
```

```mysql
mysql> SHOW CREATE FUNCTION 函数名;
```

#### 创建函数

```mysql
mysql> CREATE FUNCTION 存储函数名([参数1 数据类型, ..., 参数n 数据类型])
  RETURNS 返回值类型
  BEGIN
    函数体内容
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
mysql> CREATE FUNCTION calcAvg(_gender ENUM('male', 'female'))
  RETURNS DOUBLE
  BEGIN
    RETURN (SELECT AVG(age) FROM user WHERE gender = _gender);
  END
$
mysql> DELIMITER ;
```

```mysql
mysql> SELECT calcAvg('male');
+-----------------+
| calcAvg('male') |
+-----------------+
|              20 |
+-----------------+
1 row in set (0.00 sec)
```

#### 删除函数

```mysql
mysql> DROP FUNCTION 函数名;
```

#### 注意事项

> 必须使用`RETURNS`指定一个返回值