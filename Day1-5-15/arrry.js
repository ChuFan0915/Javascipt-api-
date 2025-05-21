// 深拷贝，浅拷贝
const obj1={
    name:'黄磊',
    age:{
        age1:23
    }
}
const obj2={...obj1}

// 总结一下就是浅拷贝通过函数运算符，两个对象不会相对独立
// 深拷贝就是通过ob????



// task1:实现数组反转
let string=['a','b','c','d','f']
let newString=[]

for(let i=string.length;i>=0;i--){
    newString.push(string[i])
}
// 两种方法 实现字符串反转
const text='absbddsbbasxdba'
const newtext=text.split('').reverse().join('')

function ReverseString(){
    let newt=''
    for(let index=text.length-1;index>=0;index--){
        newt+=text.charAt(index)
    }
    return newt
}
// 反转单词 
const speaks="i love javascript"
const newspeaks=speaks.split(' ').reverse().join(' ')
// 空格是有很大的用处滴
function ReverseSpeaks(){
    const speaks1=speaks.split(' ')
     let speaks2=[]
    for(let i=speaks1.length-1;i>=0;i--){
        speaks2.push(speaks1[i])
    }
    const str3=speaks2.join(' ')
    return str3
}
// 反转单词，但顺序不变
const word="hello word"
const newword=word.split(' ').map(i=>i.split('').reverse().join('')).join(' ')
// 判断是否为回文数组
const str4="abba"
// 思路：数组反转之后看它是否相等
function IsHui(str4){
    const newstr4=str4.split('').reverse().join('')
    if(newstr4===str4){
        return true
    }else{
        return false
    }
}







