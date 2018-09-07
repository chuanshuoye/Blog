# 页面表单高阶组件


## props

type
- 抽象组件类型`input`/`select`/`number`/`picker`/`datepicker`/`radio`/`checkbox`

properties
- 抽象组件元素属性定义,包含Props，Data，Emit事件回调等

rules
- 基本schemaModel validate规则

events
 - `[eventName, callback]`
 - eventName: `onclick`,`onchange`,`oninput`,`onfocus`,`onblur`
 - callback(value)

## component


```vue

<FormField/>


```


```vue

<template>
  <za-cell title="properties.title">
    <component :is="type" />
  </za-cell>
</template>

```
