---
layout: docs
---

# Icon 图标

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

:::info
图标来源-[ElementPlus](https://github.com/element-plus/element-plus-icons)
:::

## 基础用法

通过 `name` 属性来指定需要使用的图标，可以直接传入对应的名称来使用。

```html
<eot-icon name="loading"></eot-icon>
```

## 图标颜色

通过 `color` 属性来设置图标的颜色。

```html
<eot-icon name="cart-o" color="#1989fa" />
<eot-icon name="fire-o" color="#ee0a24" />
```

## 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 `CSS` 单位。

```html
<eot-icon name="chat-o" size="40px" />
<!-- 指定使用 rem 单位 -->
<eot-icon name="chat-o" size="3rem" />
```
