const data = [
  { id: 1, province: '浙江', city: '杭州', name: '张三' },
  { id: 2, province: '浙江', city: '杭州', name: '李四' },
  { id: 3, province: '浙江', city: '宁波', name: '王五' },
  { id: 4, province: '浙江', city: '宁波', name: '小明' },
  { id: 5, province: '江苏', city: '南京', name: '小红' },
  { id: 6, province: '江苏', city: '南京', name: '小刚' },
  { id: 7, province: '江苏', city: '苏州', name: '小强' }
]
const jg=[
  {
    id: 1,
    province: '浙江',
    city: '杭州',
    name: '张三',
    provinceRowSpan: 4,
    cityRowSpan: 2
  },
  {
    id: 2,
    province: '浙江',
    city: '杭州',
    name: '李四',
    provinceRowSpan: 0,
    cityRowSpan: 0
  },
  {
    id: 3,
    province: '浙江',
    city: '宁波',
    name: '王五',
    provinceRowSpan: 0,
    cityRowSpan: 2
  },
  {
    id: 4,
    province: '浙江',
    city: '宁波',
    name: '小明',
    provinceRowSpan: 0,
    cityRowSpan: 0
  },
  {
    id: 5,
    province: '江苏',
    city: '南京',
    name: '小红',
    provinceRowSpan: 3,
    cityRowSpan: 2
  },
  {
    id: 6,
    province: '江苏',
    city: '南京',
    name: '小刚',
    provinceRowSpan: 0,
    cityRowSpan: 0
  },
  {
    id: 7,
    province: '江苏',
    city: '苏州',
    name: '小强',
    provinceRowSpan: 0,
    cityRowSpan: 1
  }
]
// 首先我们肯定还是写一个拿到count的函数
const getcount=(data,keys,index)=>{
    let count=0
    for(let i=index;i<data.length;i++){
        // 还是从索引这儿开始遍历,拿到数值
        if(isSameGroup(data[index],data[i],keys)){
            // 从传过来的当前索引往后数
            count++
        }else{
            break
        }
    }
    return count
}
// 在写一个判断两个是不是同一个组的函数
const isSameGroup=(a,b,keys)=>{
    const isSame=keys.every(key=>a[key]==b[key])
    return isSame
}
// 写一个装span的函数
const addSpan=(data,keys,rowkey)=>{
    // 我们首先要明白一个道理,一个keys的字段对应一个rowkey,因为我们这儿要调用两次addspan
    const results = data.map(item=>({
        ...item,
        [rowkey]:0
    }))
    results.forEach((item,index)=>{
        if(index==0||!isSameGroup(results[index-1],item,keys)){
            item[rowkey]=getcount(data,keys,index)
        }
    })
    return results
}
// 再写一个封装全部事件函数的总函数
const totalEvent=(data)=>{
    // 两次调用一下这个函数
    let result=addSpan(data,['province'],'provinceRowSpan')
    // 再调用一次
    result=addSpan(data,['province','city'],'cityRowSpan')
    return result
}
