// 实现一个 chunk(arr, size) 将数组按指定大小拆分成多个子数组。
function getArray(arr,size){
    const result=[]
    // 给定一个空数组
    for(let i=0;i<arr.length;i+=size){
        let res=arr.slice(i,i+size)
        result.push(res)
    }
    return result
}
//  题目：实现一个 compact(arr) 函数，去除数组中的“虚假值”
// eg compact([0, 1, false, 2, '', 3, null, undefined, NaN]);
// // 输出: [1, 2, 3]
function compact(arr){
    const newarr=arr.filter(item=>Boolean(item)===true)
    return newarr
}
function reverseWords(str){
    const newstr=str.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
    return newstr
}
const files = [
  "index.html",
  "style.css",
  "main.js",
  "about.html",
  "app.js",
  "reset.css",
  "logo.png"
];
// 提出所有文件夹的后缀名,输出一个对象
function getFiles(files){
    const names=files.map(item=>item.slice(item.lastIndexOf('.')+1))
    return names.reduce((acc,ext)=>{
      acc[ext]=(acc[ext]||0)+1
      return  acc
    },{})
}
console.log(getFiles(files));
// 手写一个防抖函数
function FangDou(fn,delay){
    let timer=null
    return function(...agrs){
        if(timer) {
            clearTimeout(timer)
        }
        timer=setTimeout(() => {
            fn.apply(this,agrs)
        }, delay);
    }
}
function JieLiu(fn,delay){
    let lastime=0
    return function(...args){
        let nowtime=new Date()
        if(nowtime-lastime>delay){
            fn.apply(this,args)
            lastime=nowtime
        }
    }
}



