const arr = [1, 2, 3];
const res = myMap(arr, x => x * 2);
// 自己实现一个 myMap 函数，使得以下代码能正确运行：
function myMap(arr,fn){
    const result=[]
    for(let i =0;i<arr.length;i++){
        result.push(fn(arr[i],i,arr))
    }
    return result
}
console.log(res);
// 实现一个myfilter函数
function myFilter(arr,fn){
    const result=[]
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
}
// 手写一个myreduce函数
function myReduce(arr,fn,Chu){
    // 看看是否传了初始值
    let isChu=arguments.length===3
    let sumChu=isChu?Chu:arr[0] //初始值
    let starting=isChu?0:1//遍历索引
    for(let i=starting;i<arr.length;i++){
        sumChu=fn(sumChu,arr[i],i,arr)
    }
    return sumChu
}