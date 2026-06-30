// 输入
const data = [
  { id: 1, city: '杭州', name: '张三' },
  { id: 2, city: '杭州', name: '李四' },
  { id: 3, city: '上海', name: '王五' },
  { id: 4, city: '上海', name: '小明' },
  { id: 5, city: '上海', name: '小红' },
  { id: 6, city: '杭州', name: '小刚' }
]
// 要求返回
const newarr=[
  { id: 1, department: '前端', name: '张三', rowSpan: 2 },
  { id: 2, department: '前端', name: '李四', rowSpan: 0 },
  { id: 3, department: '后端', name: '王五', rowSpan: 2 },
  { id: 4, department: '后端', name: '小明', rowSpan: 0 },
  { id: 5, department: '测试', name: '小刚', rowSpan: 1 }
]
// 写一个函数来进行返回数组
// 还是和昨天一样先写一个返回连续出现的次数多函数
const getcount=(list,key,index)=>{
    let count=0
    for(let i=index;i<list.length;i++){
        if(list[i][key]==list[index][key]){
            count++
        }else{
            break
            // 直到找不到了,就break
        }
    }
    return count
}
// 这个函数我们昨天是写死了字段来进行比对的


const getrowspan=(list,key)=>{
    const result=[]
    for (const item of list) {
            result.push({
                ...item,
                rowSpan:0
            })
    }
    result.forEach((item,index)=>{
        if(index==0||result[index-1][key]!==item[key]){
            // 这个if判断的是该字段第一次出现
            item.rowSpan=getcount(list,key,index)
        }
    })
    return result
}


const newdata = [
  { id: 1, province: '浙江', city: '杭州', name: '张三' },
  { id: 2, province: '浙江', city: '杭州', name: '李四' },
  { id: 3, province: '浙江', city: '宁波', name: '王五' },
  { id: 4, province: '浙江', city: '宁波', name: '小明' },
  { id: 5, province: '江苏', city: '南京', name: '小红' },
  { id: 6, province: '江苏', city: '南京', name: '小刚' },
  { id: 7, province: '江苏', city: '苏州', name: '小强' }
]
// 要求返回
// [
//   { id: 1, province: '浙江', city: '杭州', name: '张三', cityRowSpan: 2 },
//   { id: 2, province: '浙江', city: '杭州', name: '李四', cityRowSpan: 0 },
//   { id: 3, province: '浙江', city: '宁波', name: '王五', cityRowSpan: 2 },
//   { id: 4, province: '浙江', city: '宁波', name: '小明', cityRowSpan: 0 },
//   { id: 5, province: '江苏', city: '南京', name: '小红', cityRowSpan: 2 },
//   { id: 6, province: '江苏', city: '南京', name: '小刚', cityRowSpan: 0 },
//   { id: 7, province: '江苏', city: '苏州', name: '小强', cityRowSpan: 1 }
// ]
// 首先要判断是不是同一组,满足合并的条件
const isSameGroup=(a,b,keys)=>{
    // a,b是两个不同的对象,这儿如果a和b相等,也就是当前这一行
    const isSame=keys.every(key=>a[key]==b[key])
    return isSame
}
const getGruopCount=(list,keys,index)=>{
    let count=0
    for(let i=index;i<list.length;i++){
        if(isSameGroup(list[index],list[i],keys)){
            count++
        }else{
            break
        }
    }
    return count
}
const getRowSpanByKeys=(data,keys,rowSpanKey)=>{
    // 这儿的rowspankey不是写死的,它是一个变量
    const result=data.map(item=>({
        ...item,
        [rowSpanKey]:0
    }))
    // 找到result的组头
    result.forEach((item,index)=>{
        if(index==0||!isSameGroup(result[index-1],item,keys)){
            item[rowCitySpan]=getGruopCount(data,keys,index)
        }
    })
}