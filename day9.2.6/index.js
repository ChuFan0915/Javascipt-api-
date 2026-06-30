// task1 假设我们有一篮水果，我们要统计每种水果有多少个。 ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
function countTotal(frult){
        const result={}
    for(const item of frult){
        // 来进行统计水果
        if(result[item]){
            // 如果这里面水果存在了
            result[item]=result[item]+1
        }else{
            result[item]=1
            // 初始状态进行赋值1
        }
    }
    return result
}
const fruits = ['apple', 'banana', 'apple'];
// 回到刚才的任务，我们要统计水果数量。这次要把数组变成一个对象 {}。
// 1. 初始值应该是什么？(想要变成对象，就传空对象)
const result = fruits.reduce((acc, curr) => {
    
    // 逻辑：如果 acc 里有 curr 这个key，就 +1，否则就设为 1
    if (acc[curr]) {
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }
    return acc

}, {}); // <--- 3. 这里应该填什么作为初始值？