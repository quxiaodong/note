| 操作符 | 描述 | 用法 |
| - | - | - |
| `=` | 等于 | SELECT * FROM 表名 WHERE 列名 = 值; |
| `<>`或者`!=` | 不等于 | SELECT * FROM 表名 WHERE 列名 != 值; |
| `<` | 小于 | SELECT * FROM 表名 WHERE 列名 < 值; |
| `<=` | 小于等于 | SELECT * FROM 表名 WHERE 列名 <= 值; |
| `>` | 大于 | SELECT * FROM 表名 WHERE 列名 > 值; |
| `>=` | 大于等于 | SELECT * FROM 表名 WHERE 列名 >= 值; |
| `BETWEEN` | 在...之间 | SELECT * FROM 表名 WHERE 列名 BETWEEN 值1 AND 值2; |
| `NOT BETWEEN` | 不在...之间 | SELECT * FROM 表名 WHERE 列名 NOT BETWEEN 值1 AND 值2; |
| `IN` | 满足其中一个 | SELECT * FROM 表名 WHERE 列名 IN (值1, 值2); |
| `NOT IN` | 不满足任何一个 | SELECT * FROM 表名 WHERE 列名 NOT IN (值1, 值2); |
| `IS NULL` | 值是`NULL` | SELECT * FROM 表名 WHERE 列名 IS NULL; |
| `IS NOT NULL` | 值不是`NULL` | SELECT * FROM 表名 WHERE 列名 IS NOT NULL; |
| `AND` | 满足全部条件 | SELECT * FROM 表名 WHERE 列名1 = 值 AND 列名2 > 值; |
| `OR` | 满足其中一个条件 | SELECT * FROM 表名 WHERE 列名1 = 值 OR 列名2 > 值; |
| `XOR` | 有且只有一个条件为真 | SELECT * FROM 表名 WHERE 列名1 = 值 XOR 列名2 > 值; |
| `LIKE` | 匹配 | SELECT * FROM 表名 WHERE 列名 LIKE '值%'; |
| `NOT LIKE` | 不匹配 | SELECT * FROM 表名 WHERE 列名 NOT LIKE '值_'; |

> 1. `%`匹配0~n个字符
> 2. `_`匹配一个字符
> 3. `AND`操作符的优先级高于`OR`操作符