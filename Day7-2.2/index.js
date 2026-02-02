function getAllprice(items){
    let total=0
    // 我们要拿到每项的价格总和尝试去做一下呢
    for(const item of items){
        total+=Number(item?.price)
    }
    return total.toFixed(2)
}
const items=[
  {
    "id": 1001,
    "name": "无线降噪耳机 Pro",
    "price": 1299.00,
    "category": "电子产品",
    "stock": 45,
    "isOnSale": false
  },
  {
    "id": 1002,
    "name": "人体工学办公椅",
    "price": 899.50,
    "category": "家具",
    "stock": 12,
    "isOnSale": true
  },
  {
    "id": 1003,
    "name": "极简纯棉T恤 (白色)",
    "price": 59.90,
    "category": "服装",
    "stock": 200,
    "isOnSale": false
  },
  {
    "id": 1004,
    "name": "智能运动手表",
    "price": 499.00,
    "category": "电子产品",
    "stock": 0,
    "isOnSale": true
  },
  {
    "id": 1005,
    "name": "手冲咖啡豆套装",
    "price": 128.00,
    "category": "食品",
    "stock": 88,
    "isOnSale": false
  }
]
console.log(getAllprice(items));
// 算法题】我们需要编写一个函数 isPalindrome(str) 来判断字符串是否是“回文”（正读反读都一样，例如 'madam'）
function isPalindrome(str){
    const newStr=str.split(' ').reverse().join('')
    if(newStr==str){
        return true
    }else{
        return false
    }
}
isPalindrome('madam')