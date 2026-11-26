假设我们需要定义一个通用的函数 `sum` 用于计算

```c
// sum.h
// SUM_H 是一个宏名称，约定俗成全用大写，并且通常和文件名对应
#ifndef SUM_H // 如果没有定义名为 SUM_H 的宏
#define SUM_H // 那么就定义这个宏

int sum(int a, int b);

#endif // 结束条件编译
```

> 头文件保护机制，防止同一个头文件被重复展开，导致重复声明等问题。

```c
// sum.c
#include "sum.h" // sum.h 是头文件的文件名

int sum(int a, int b)
{
  return a + b;
}
```

```c
// main.c
#include <stdio.h>
#include "sum.h" // sum.h 是头文件的文件名

int main()
{
  int result = sum(1, 2);
  printf("%d\n", result);

  return 0;
}
```

> 编译的时候文件需要一起编译 `gcc main.c sum.c -o main`

| 对比         | #include <xxx.h>     | #include "xxx.h"             |
| ------------ | -------------------- | ---------------------------- |
| 常见用途     | 系统头文件、标准库   | 自己创建的头文件             |
| 优先搜索位置 | 标准库头文件存放位置 | 当前源文件所在目录           |
| 找不到时     | 报错                 | 继续搜索标准库头文件存放位置 |
