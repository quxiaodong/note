```c
/**
 * 1个字节(Byte) = 8位(bit)
 * 在以字节为寻址单位的系统中，一个内存地址对应一个字节。
 *
 * 以 int 占用4个字节为例，整数 10 在内存中表示如下：
 * 对应内容  0000 0000  0000 0000  0000 0000  0000 1010
 * 对应字节  ↑ 第4字节   ↑ 第3字节   ↑ 第2字节   ↑ 第1字节
 * 内存地址  0x1003     0x1002     0x1001     0x1000
 *           高位                              低位
 *
 * 以 char 占用1个字节为例，ASCII编码的字符 A 在内存中表示如下：
 * 对应内容  0100 0001
 * 对应字节  ↑ 第1字节
 * 内存地址  0x1000
 */

// c语言中使用 sizeof 来得到某个类型占用的字节大小
sizeof(int)
```

```
假设某个类型占用 n 个字节，1个字节=8位
有符号里面，符号位0表示正数，1表示负数
有符号最小值是 -2^((n * 8) - 1)
有符号最大值是  2^((n * 8) - 1) - 1
无符号最大值是  2^(n * 8) - 1
```

| 有符号类型    | 最小值      | 最大值      | 无符号类型                         | 最小值 | 最大值       |
| ------------- | ----------- | ----------- | ---------------------------------- | ------ | ------------ |
| `char`        | `CHAR_MIN`  | `CHAR_MAX`  | char是有符号还是无符号取决于编译器 |        |
| `signed char` | `SCHAR_MIN` | `SCHAR_MAX` | `unsigned char`                    | `0`    | `UCHAR_MAX`  |
| `short`       | `SHRT_MIN`  | `SHRT_MAX`  | `unsigned short`                   | `0`    | `USHRT_MAX`  |
| `int`         | `INT_MIN`   | `INT_MAX`   | `unsigned int`                     | `0`    | `UINT_MAX`   |
| `long`        | `LONG_MIN`  | `LONG_MAX`  | `unsigned long`                    | `0`    | `ULONG_MAX`  |
| `long long`   | `LLONG_MIN` | `LLONG_MAX` | `unsigned long long`               | `0`    | `ULLONG_MAX` |

```c
#include <stdio.h>
#include <limits.h>

int main()
{
  printf("INT_MIN = %d\n", INT_MIN);
  printf("INT_MAX = %d\n", INT_MAX);
  printf("CHAR_BIT = %d\n", CHAR_BIT); // CHAR_BIT 表示一个 char（即一个字节）包含的位数

  return 0;
}
```

- [gcc](/c-lang/gcc.md)
- [module](/c-lang/module.md)

#### stdio.h

- [printf](/c-lang/printf.md)
