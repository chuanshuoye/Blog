# schemaModel

### 参考schema定义

- $schema	$schema 关键字状态，表示这个模式与v4规范草案书写一致。
- title	用它给我们的模式提供了标题。
- description	关于模式的描述。
- type	type 关键字在我们的JSON数据上定义了第一个约束：必须是一个JSON对象。
- properties	定义各种键和他们的值类型，以及用于JSON文件中的最小值和最大值。
- required	存放必要属性列表。
- minimum	给值设置的约束条件，表示可以接受的最小值。
- exclusiveMinimum	如果存在”exclusiveMinimum”并且具有布尔值true，如果它严格意义上大于”minimum”的值则实例有效。
- maximum	给值设置的约束条件，表示可以接受的最大值。
- exclusiveMaximum	如果存在”exclusiveMinimum”并且具有布尔值true，如果它严格意义上小于”maximum” 的值则实例有效。
- multipleOf	如果通过这个关键字的值分割实例的结果是一个数字则表示紧靠”multipleOf”的数字实例是有效的。
- maxLength	字符串实例字符的最大长度数值。
- minLength	字符串实例字符的最小长度数值。
- pattern	如果正则表达式匹配实例成功则字符串实例被认为是有效的。



### 初始化对象

```js
const Model = new SchemaModel({
 field1,
 field2,
 //...
})

```

### 属性

 - SchemaModel: `{ key?: validKey ,value?: validFunc }`

 定义一个基本的SchemaMode对象，传入参数为基本的Validator校验`key-value`,返回结果为Boolean类型



