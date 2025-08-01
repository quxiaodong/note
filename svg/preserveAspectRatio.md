```html
<svg width="width" height="height" viewBox="minX minY vbWidth vbHeight"></svg>

scaleX = width / vbWidth
scaleY = height / vbHeight
```

#### none

```
screenX = (elementX - minX) * scaleX
screenY = (elementY - minY) * scaleY
```

#### xMidYMid meet

```
scale = min(scaleX, scaleY)

offsetX = (width - vbWidth * scale) / 2
offsetY = (height - vbHeight * scale) / 2

screenX = (elementX - minX) * scale + offsetX
screenY = (elementY - minY) * scale + offsetY
```

<svg width="200" height="100" viewBox="0 0 100 200" style="box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, .2);">
  <circle cx="100" cy="50" r="40" fill="pink" />
</svg>

```
width: 200, vbWidth: 100
height: 100, vbHeight: 200

scaleX = 200 / 100 = 2
scaleY = 100 / 200 = 0.5

scale = min(scaleX, scaleY) = 0.5

offsetX = (200 - 100 * 0.5) / 2 = 75
offsetY = (100 - 200 * 0.5) / 2 = 0

cx = (100 - 0) * 0.5 + 75 = 125
cy = (50 - 0) * 0.5 + 0 = 25
 r = (40) * 0.5 = 20
```