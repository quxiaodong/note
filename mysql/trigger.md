#### 查看触发器

```mysql
mysql> SHOW TRIGGERS;
```

```mysql
# 查看某个触发器
mysql> SHOW CREATE TRIGGER 触发器名;
```

#### 创建触发器

```mysql
mysql> CREATE TRIGGER 触发器名
  {BEFORE|AFTER}
  {INSERT|DELETE|UPDATE}
  ON 表名
  FOR EACH ROW
  BEGIN
    触发器内容
  END
;
```

> - `BEFORE`: 在执行操作前调用触发器内容
> - `AFTER`: 在执行操作后调用触发器内容

> 对每条受影响的记录执行触发器内容时，提供了`NEW`和`OLD`代表新老记录
> - `INSERT`: NEW代表准备插入的记录，OLD无效
> - `DELETE`: OLD代表删除前的记录，NEW无效
> - `UPDATE`: NEW代表修改后的记录，OLD代表修改前的记录

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
  ('e', 50, NULL)
;
```

```mysql
mysql> DELIMITER $
mysql> CREATE TRIGGER filterAge
  BEFORE INSERT ON user
  FOR EACH ROW
  BEGIN
    IF NEW.age > 100 THEN
      SET NEW.age = 100;
    ELSEIF NEW.age < 1 THEN
      SET NEW.age = 1;
    END IF;
  END
$
mysql> DELIMITER ;
```

```mysql
mysql> INSERT INTO user(nickname, age, gender) VALUES('f', 110, NULL);
mysql> SELECT * FROM user;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  1 | a        |   10 | male   |
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
|  4 | d        |   40 | female |
|  5 | e        |   50 | NULL   |
|  6 | f        |  100 | NULL   |
+----+----------+------+--------+
6 rows in set (0.01 sec)
```

#### 删除触发器

```mysql
mysql> DROP TRIGGER 触发器名;
```