#### Flex Container

> - `flex`: 块状元素
> - `inline-flex`: 行内元素

##### flex-direction

设置主轴方向

- row: 默认，主轴为水平方向，起点在左边
- row-reverse: 主轴为水平方向，起点在右边
- column: 主轴为垂直方向，起点在上边
- column-reverse: 主轴为垂直方向，起点在下边

<iframe src="css/flex/flex-direction.html"></iframe>

##### flex-wrap

设置`flex-item`是否换行，及换行形式

- nowrap: 默认，不换行
- wrap: 换行，第一行在上边
- wrap-reverse: 换行，第一行在下边

<iframe src="css/flex/flex-wrap.html"></iframe>

##### flex-flow

`flex-direction`和`flex-wrap`的结合，默认值是`row nowrap`

<iframe src="css/flex/flex-flow.html"></iframe>

##### justify-content

设置`flex-item`在主轴上的对齐方式

- flex-start: 默认
- flex-end
- center
- space-around
- space-between

<iframe src="css/flex/justify-content.html"></iframe>

##### align-items

设置`flex-item`在交叉轴上的对齐方式

- flex-start
- flex-end
- center
- baseline: 项目的第一行文字的底部对齐
- stretch: 默认，如果`flex-item`未设置高度或设为`auto`，将占满整个容器的高度

<iframe src="css/flex/align-items.html"></iframe>

##### align-content

设置多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

<iframe src="css/flex/align-content.html"></iframe>

#### Flex Item

##### flex-grow

设置自身的放大比例。默认为`0`，即如果存在剩余空间，也不放大。如果其一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

<iframe src="css/flex/flex-grow.html"></iframe>

##### flex-shrink

设置自身的缩小比例。默认为`1`，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小

<iframe src="css/flex/flex-shrink.html"></iframe>

##### flex-basis

设置自身的尺寸，默认为`auto`

<iframe src="css/flex/flex-basis.html"></iframe>

##### align-self

设置自身与其他项目不一样的对齐方式，可覆盖`flex-container`的`align-items`属性

- auto: 默认，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
- flex-start
- flex-end
- center
- baseline
- stretch

<iframe src="css/flex/align-self.html"></iframe>

##### flex

`flex-grow`、`flex-shrink`和`flex-basis`的结合，默认值是`0 1 auto`，后两个属性可选

- auto: 即`1 1 auto`
- none: 即`0 0 auto`

<iframe src="css/flex/flex.html"></iframe>

##### order

设置自身的排列顺序。数值越小，排列越靠前，默认为`0`

<iframe src="css/flex/order.html"></iframe>