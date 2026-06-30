const list = [
  { province:'北京', gender:'男', name:'张三' },
  { province:'上海', gender:'男', name:'李四' },
  { province:'北京', gender:'女', name:'王五' },
  { province:'上海', gender:'男', name:'小明' },
  { province:'上海', gender:'男', name:'小红' }
]
// 要求得到
// [
//  { province:'北京', rowSpan:3 },
//  { province:'北京', rowSpan:0 },
//  { province:'北京', rowSpan:0 },
//  { province:'上海', rowSpan:2 },
//  { province:'上海', rowSpan:0 }
// ]
// rowspan行合并
// 先写一个统计传一个数组统计不同的省份出现的次数
const getcount=(list,str,index)=>{
    let count=0
    for(let i=index;i<list.length;i++){
      if(list[i].province==str){
        count++
      }else{
        break
      }
    }
    return count
}
console.log(getcount(list,'上海',3));

// 最后写一个得到相应的结果的函数
const getarr=(list)=>{
    const result=[]
    for (const item of list) {
        result.push({
            ...item,
            rowSpan:0
        })
    }
    result.forEach((item,index)=>{
         if((index==0||result[index-1].province!==result[index].province)){
            result[index].rowSpan=getcount(list,item.province,index)
        }
    })
}

