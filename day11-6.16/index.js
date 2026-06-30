
// 要求得到:
// {
//   科幻: 2,
//   文学: 2,
//   历史: 1
// }

function getBooks(books){
    const result={}
    for (const item of books) {
    if(result[item.category]){
        result[item.category]++
    }else{
        result[item.category]=1
    }
}
return result
}
const histories = [
  { bookId: 1, duration: 30 },
  { bookId: 2, duration: 15 },
  { bookId: 1, duration: 20 },
  { bookId: 3, duration: 10 },
  { bookId: 2, duration: 25 }
]
// 要求得到:
// {
//   1: 50,
//   2: 40,
//   3: 10
// }
const timeres=histories.reduce((sum,current)=>{
    if(sum[current.bookId]){
        sum[bookId]+=current.duration
    }else{
        sum[bookId]=current.duration
    }
    return sum
},{})
const books = [
  { id: 1, title: '三体', category: '科幻' },
  { id: 2, title: '活着', category: '文学' },
  { id: 3, title: '球状闪电', category: '科幻' },
  { id: 4, title: '平凡的世界', category: '文学' }
]
// 要求得到:{
//   科幻: ['三体', '球状闪电'],
//   文学: ['活着', '平凡的世界']
// }
const newres=books.reduce((sum,current)=>{
    if(sum[current.category]){
        // 如果有这个类型
        sum[current.category].push(current.title)
    }else{
        // 如果没有这个类型,先给他套个数组的壳,然后赋值
        sum[current.category]=[current.title]
    }
    return sum
},{})
const khbooks= [
  { title: '三体', author: '刘慈欣', readCount: 100 },
  { title: '球状闪电', author: '刘慈欣', readCount: 200 },
  { title: '活着', author: '余华', readCount: 300 },
  { title: '许三观卖血记', author: '余华', readCount: 150 }
]
// 要求得到
// {
//   刘慈欣: 300,
//   余华: 450
// }
const authorObj=khbooks.reduce((sum,current)=>{
    if(sum[current.author]){
        // 如果该作者存在了,就累加一下
        sum[current.author]+=current.readCount
    }else{
        // 不存在就赋初始值
        sum[current.author]=current.readCount
    }
    return sum
},{})