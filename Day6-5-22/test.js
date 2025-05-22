countChar("hello world", "l") // 返回 3
countChar("JavaScript", "a") // 返回 2
countChar("Hello", "z") // 返回 0
// 统计字符串出现的次数
function countChar(string,val){
    let count=0
    for(let i=0;i<string.length;i++){
        if(string[i]===val){
            count++
        }
    }
    return count
}
const demo=countChar("hello world", "l")
console.log(demo);
// 字符转换函数
function getLetter(str){
    if(!str[0]){
        return ''
    }
    return str[0].toUpperCase()+str.slice(1).toLowerCase()
}
console.log(getLetter("JAVASCRIPT"));

// 去除空格
// removeSpaces(str)
console.log(removeSpaces("H U A N G"));
 // 返回 "helloworld"
removeSpaces("  a b  c ") // 返回 "abc"
function removeSpaces(str){
    return str.trim()
}