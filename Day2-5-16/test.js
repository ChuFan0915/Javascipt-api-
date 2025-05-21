// 找到第一个年龄大于 18 的用户
const users = [
  { name: 'Tom', age: 15 },
  { name: 'Jerry', age: 20 },
  { name: 'Anna', age: 17 }
];
// 输出: { name: 'Jerry', age: 20 }
console.log(users.find((item)=>item.age>18));
// 找到分数大于 90 的第一个学生的索引
const scores = [60, 85, 88, 92, 70];
// 输出: 3
console.log(scores.findIndex((item)=>item>90));
const products = [
  { name: '电脑', price: 300 },
  { name: '手机', price: 2000 },
  { name: '耳机', price: 800 }
];
// 使用sort来进行排序
const newproducts=products.sort((a,b)=>a.price-b.price)
console.log(newproducts);

const fruits = ['apple', 'banana', 'orange'];
// 用 splice 替换掉 banana 为 mango
fruits.splice(1,0,'mango')
console.log(fruits);
// find方法
const books = [
  { title: 'JS 入门', price: 30 },
  { title: 'Vue 高手', price: 100 }
];
// 找出价格大于 50 的书
const target=books.find(item=>item.price>50)
console.log(target);
const items = ['apple', 'banana', 'pear'];
// 找到 'banana' 的索引
const people = [
  { name: 'Tom', age: 17 },
  { name: 'Jerry', age: 22 }
];
// 是否有人成年（18岁及以上）
// 调用some方法
console.log(people.some(item=>item.age>18));


const goods = [
  { name: '鼠标', price: 80 },
  { name: '电脑', price: 3000 },
  { name: '手机', price: 2000 },
  { name: 'U盘', price: 50 }
];
// 选出价格高于 100 的商品
// 提取它们的名字数组
// 求这些高价商品的总价
const newgoods=goods.filter(item=>item.price>100)
// 高于100的商品
const goodsname=newgoods.map(item=>item.name)
// 提取所有名字数组
const totalgoods=newgoods.reduce((sum,item)=>sum+item.price)
// 提取总价