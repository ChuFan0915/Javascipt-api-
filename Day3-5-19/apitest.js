// 独立完成以下练习（不查资料）：

// 实现一个函数 reverseWords(str)
// 将字符串中每个单词反转，整体顺序不变（例："I am boy" => "I ma yob"）
function reverseWords(str){
    const newstr=str.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
    return newstr
}
console.log(reverseWords('i am huanglei'));


// 实现一个函数 unique(arr) 去除数组重复值（例：[1,2,2,3] => [1,2,3]）
function unique(arr){
    const res=[]
    for(let i=0 ;i<arr.length;i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique([1,1,2,23,45,211,22,34,2,23]));



// 实现一个 flatten(arr) 将多维数组拍平成一维数组（例：[1, [2, [3]]] => [1,2,3]）
function flatten(arr){
    const result=[]
    for(let i =0;i<arr.length;i++){
        const item=arr[i]
        if(Array.isArray(item)){
           const flattens= flatten(arr[i])
           result.push(...flattens)
        }else{
            result.push(arr[i])
        }
    }
    return result
}
