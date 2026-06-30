const books = [
  { title:'三体', author:'刘慈欣' },
  { title:'球状闪电', author:'刘慈欣' },
  { title:'活着', author:'余华' },
  { title:'许三观卖血记', author:'余华' },
  { title:'兄弟', author:'余华' }
]
// 要求得到
// {
//   刘慈欣:[
//     '三体',
//     '球状闪电'
//   ],
//   余华:[
//     '活着',
//     '许三观卖血记',
//     '兄弟'
//   ]
// }
// 先尝试将这个数组转换成对象
const booksobj=books.reduce((sum,current)=>{
    if(sum[current.author]){
        sum[current.author].push(current.title)
    }else{
        // 如果这个第一次没有这个作者时,就是初始状态下
        sum[current.author]=[current.title]
    }
    return sum
},{})
// 找到top前二的值
const arr = [100,300,200,500,400]
function gettoptwo(arr){
    let max=0
    let secondmax=0
    for(let i =0;i<arr.length;i++){
        // 给当前值拿到
        let current=arr[i]
        if(max<current){
            secondmax=max
            // 更新最大值
            max=current
        }else if(current<max&&current>secondmax){
            secondmax=current
        }
    }
    return {max,secondmax}
}
// 找到前三的值
function gettopthree(arr){
    let first=0 
    let second=0
    let three=0
    for(let i=0;i<arr.length;i++){
        let current=arr[i]
        // 拿到当前值
        if(current>first){
            three=second
            second=first
            first=current
        }else if(current>second&&current<first){
            // 当前值大于第二,但同时小于最大值
            three=second
            second=current
        }else if(current>three&&current<second){
            // 当前值大于第三,小于第二
            three=current
        }
    }
    return{first,second,three}
}
console.log(gettopthree(arr));



