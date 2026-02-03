//task1:昨天的回文函数对大小写敏感，比如 "Racecar" 会报错。 请修改下面的函数，利用 .toLowerCase() 方法，使其忽略大小写。
function Hanlehw(str){
    let newStr=str.toLowerCase()
    // 先将传进来的str转换为小写
    let isHw=newStr.split(' ').reverse().join('')===newStr?true:false
    return isHw 
}
console.log(Hanlehw('Racecar'));
// task2
console.log("--- 任务2测试 ---");

// 2.1 比较
console.log("1 == '1' 是:", 1 == '1');
console.log("1 === '1' 是:", 1 === '1');

// 2.2 作用域
let score = 100;
if (true) {
    let score = 50; // 这里重新声明了 score
    console.log("里面的 score:", score);
}
console.log("外面的 score:", score);
// task3 题目：寻找数组最大值 不要使用 Math.max() 这种现成的方法。请写一个函数，通过遍历数组找出最大的那个数字。
function FindMax(arr){
    let max=arr[0]
    // 第一项为霸主
    for(let i= 1;i<arr.length;i++){
            if(arr[i]>max){
                // 打过了就交换
                max=arr[i]
            }
    }
}