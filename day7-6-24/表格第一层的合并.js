const dataSource = [
  { department:'前端', name:'张三', year:3 },
  { department:'前端', name:'李四', year:2 },
  { department:'前端', name:'王五', year:1 },
  { department:'后端', name:'小明', year:4 },
  { department:'后端', name:'小红', year:1 },
  { department:'测试', name:'小刚', year:2 }
]
// 要求得到
// [
//  {
//    department:'前端',
//    name:'张三',
//    year:3,
//    rowSpan:3
//  },
//  {
//    department:'前端',
//    name:'李四',
//    year:2,
//    rowSpan:0
//  },
//  ...
// ]
// 我们首先写一个统计次数的函数
const getcount=(list,str,index)=>{
    // 数组,传过来的字符串,该字符串的索引
    let count=0
    for(let i=index;i<list.length;i++){
            if(list[i].department==str){
                count++
            }else{
                break
            }
    }
    return count
}
const getrowspan=(list)=>{
    const result=[]
    for (const item of list) {
        result.push({
            rowSpan:0,
            ...item,
        })
    }
    // 然后再遍历这个result我们给他加rowspan
    result.forEach((item,index)=>{
        if(index==0||result[index-1].department!==result[index].department){
            // 在第一次出现的时候
            item.rowSpan=getcount(list,item.department,index)
        }
    })
    return result
}
console.log(getrowspan(dataSource));
