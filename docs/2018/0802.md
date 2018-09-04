# SchemaModel 使用方法

## 基本类型校验
```js

const Case = new SchemaModel({
  policyHolderName: {
    type: String,
    required: true,
    message: 'policyHolderName is Required!'
  }
  policyHolderCardNo: {
    type: String,
    pattern: '^.*?/g',
    message: 'policyHolderCardNo is valid!'
  }
})

Case.check({
  policyHolderName: null,
  policyHolderCardNo: null
})

```

## 复杂关系校验

案例1：录入被保人信息，当选择与投保人关系是丈夫时，被保人性别不可为男性

```js
const Case = new SchemaModel({
  insureHolderRelation: {
    type: String,
    required: true,
    message: 'insureHolderRelation is Required!'
  },
  insureHolderSex: (val, data) => {
    // 判断被保人关系与性别的处理
    if (data.insureHolderRelation === '丈夫') {
      if (val === '男') return '被保人性别不可为男性！'
    }
    return true
  }
})

Case.check({
  insureHolderRelation: '丈夫',
  insureHolderSex: '男'
})

```
