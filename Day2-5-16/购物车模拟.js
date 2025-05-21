const cart = [
  { name: '书', price: 30, count: 2, selected: true },
  { name: '耳机', price: 100, count: 1, selected: false },
  { name: '键盘', price: 200, count: 1, selected: true }
];
// 输出：被勾选的商品数组
// 被勾选的商品
const selectedCart=cart.filter(item=>item.selected===true)
const names=selectedCart.map(item=>item.name)
const totalPrice=selectedCart.reduce((sum,item)=>sum+(item.price*item.count),0)
// 总价

// 判断是否勾选
const IsSelected=cart.some(item=>item.selected===true)
