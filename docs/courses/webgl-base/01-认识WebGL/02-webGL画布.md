---
title: webGL画布
showGlslEditor: true
author: MaxBoren
date: 
categories:
 - webGL画布
tags:
 - webGL画布
---


## webGL画布

接下来咱们说一个在webgl 画布上刷底色的简单栗子。

### 1-刷底色的基本步骤

1.在html中建立canvas 画布

```html
<canvas id="canvas"></canvas>
```

2.在js中获取canvas画布

```js
const canvas=document.getElementById('canvas’);
```

3.使用canvas 获取webgl 绘图上下文

```js
const gl=canvas.getContext('webgl’);
```

4.指定将要用来清空绘图区的颜色

```js
gl.clearColor(0,0,0,1);
```

5.使用之前指定的颜色，清空绘图区

```js
gl.clear(gl.COLOR_BUFFER_BIT);
```

整体代码

```html
<canvas id="canvas"></canvas>
<script>
    const canvas=document.getElementById('canvas');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    const gl=canvas.getContext('webgl');
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
</script>
```

clearColor(r,g,b,a) 中的参数是红、绿、蓝、透明度，其定义域是[0,1]



### 2-灵活操作webgl中的颜色

css 中有一个“rgba(255,255,255,1)” 颜色，其中r、g、b的定义域是[0,255]，这里要和webgl里的颜色区分一下。

我们可以简单了解一下将css颜色解析为webgl 颜色的原理：

```js
const rgbaCSS = "rgba(255,0,0,1)";
const reg = RegExp(/\((.*)\)/);
const rgbaStr = reg.exec(rgbaCSS)[1];
const rgb = rgbaStr.split(",").map((ele) => parseInt(ele));
const r = rgb[0] / 255;
const g = rgb[1] / 255;
const b = rgb[2] / 255;
const a = rgb[3];

gl.clearColor(r, g, b, a);
gl.clear(gl.COLOR_BUFFER_BIT);
```

在three.js 里有一个非常完美的颜色对象-Color，我们通过这个对象可以轻松的控制颜色。



### 案例-多姿多彩的画布

1.引入Color 对象

```js
import { Color } from "https://unpkg.com/three/build/three.module.js";
```

我这是通过CDN 引入的，这种方法不适用于nodejs，因为nodejs 无法直接通过网络路径请求资源。

2.实例化Color 对象

```
const color = new Color(1, 0, 0);
```

3.建立色相偏移动画

```js
!(function ani() {
    color.offsetHSL(0.005, 0, 0);
    gl.clearColor(color.r, color.g, color.b, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    requestAnimationFrame(ani);
})();
```

关于颜色的操作我们就说到这，Color 对象还有很多其它方法，可以在threejs官网查看。



### 3-webgl 坐标系

webgl画布的建立和获取，和canvas 2d是一样的。

一旦我们使用canvas.getContext()方法获取了webgl 类型的上下文对象，那这张画布就不再是以前的canvas 2d 画布。

当然，它也不会变成三维的，因为我们的电脑屏幕始终是平的。

那这张画布有什么不一样了呢？

它的坐标系变了。

canvas 2d 画布和webgl 画布使用的坐标系都是二维直角坐标系，只不过它们坐标原点、y 轴的坐标方向，坐标基底都不一样了。

#### 3-1-canvas 2d画布的坐标系

canvas 2d 坐标系的原点在左上角。

canvas 2d 坐标系的y 轴方向是朝下的。

canvas 2d 坐标系的坐标基底有两个分量，分别是一个像素的宽和一个像素的高，即1个单位的宽便是1个像素的宽，1个单位的高便是一个像素的高。

如下图，下图两个方块表示两个像素：

![image-20200910145149750](../../../public/img/course/webgl-base/image-20200910145149750.png)



#### 3-2-webgl的坐标系

webgl坐标系的坐标原点在画布中心。

webgl坐标系的y 轴方向是朝上的。

webgl坐标基底中的两个分量分别是半个canvas的宽和canvas的高，即1个单位的宽便是半个个canvas的宽，1个单位的高便是半个canvas的高。

如下图：

![image-20210124233132935](../../../public/img/course/webgl-base/image-20210124233132935.png)

