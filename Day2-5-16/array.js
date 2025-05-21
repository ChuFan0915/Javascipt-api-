// work1:给你一个 非严格递增排列的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
// 返回 k 。
// 举例：输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
function NoSame(nums){
    let j=0
    for(let i=1;i<nums.length;i++){
        if(nums[j]!==nums[i]){
            nums[j++]=nums[i]
            // 跳过重复项并赋值
        }
    }
    return j+1
}
// 数组末尾添加元素
function addTask(queue,task){
    return queue.push(task)
}
// 数组末尾和头部删除元素


// 过滤成绩
const scores=[45,78,89,32,60,99]
const newsco=scores.filter(i=>i>=60)

// 格式化用户名
const users=['Tom','Jerry','Aanna']
const prices=[100,200,300,400]
console.log(prices.reduce((sum,price)=>sum+price));
// test1 筛选活跃用户名字
const user=[
    {name:'Leo',active:true},
    {name:'ChuFan',active:false}
]
const nouser=user.filter(item=>item.active===true)
console.log(nouser);
// 提取商品名和总价
const items = [
  { name: '书', price: 30 },
  { name: '笔', price: 5 },
  { name: '包', price: 100 }
];
const names=items.map(item=>item.name)
const iprices=items.reduce((sum,price)=>sum+price)

