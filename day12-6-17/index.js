// const books = [
//   { id: 1, title: '三体', category: '科幻' },
//   { id: 2, title: '活着', category: '文学' },
//   { id: 3, title: '球状闪电', category: '科幻' }
// ]

// const histories = [
//   { bookId: 1, duration: 30 },
//   { bookId: 1, duration: 20 },
//   { bookId: 2, duration: 50 },
//   { bookId: 3, duration: 10 },
//   { bookId: 3, duration: 40 }
// ]
// // 要求返回:
// // [
// //   {
// //     title:'三体',
// //     totalDuration:50
// //   },
// //   {
// //     title:'活着',
// //     totalDuration:50
// //   },
// //   {
// //     title:'球状闪电',
// //     totalDuration:50
// //   }
// // ]
// const getArr=(books,histories)=>{
//     // 直接对histor这个数组先进行一个合并
//     const newHis=histories.reduce((sum,current)=>{
//         if(sum[current.bookId]){
//             sum[current.bookId]+=current.duration
//         }else{
//             sum[current.bookId]=current.duration
//         }
//         return sum
//     },{})
//     // 拿到这个对象之后,我们继续跟进这个对象来进行处理
//     const newArr=[]
//     for (const item of books) {
//         newArr.push({
//             title:item.title,
//             totalDuration:newHis[item.id]
//         })
//     }
//     return newArr
// }
const books = [
  { id: 1, title: '三体', authorId: 101 },
  { id: 2, title: '活着', authorId: 102 },
  { id: 3, title: '球状闪电', authorId: 101 }
]

const authors = [
  { id: 101, name: '刘慈欣' },
  { id: 102, name: '余华' }
]
// 要求得到:
// [
//   {
//     title:'三体',
//     author:'刘慈欣'
//   },
//   {
//     title:'活着',
//     author:'余华'
//   },
//   {
//     title:'球状闪电',
//     author:'刘慈欣'
//   }
// ]
// function getauthorArr(books,authors){
//     // 先把这个authors转换成一个对象
//     const newauthors=authors.reduce((sum,current)=>{
//         if(!sum[current.id]){
//             sum[current.id]=current.name
//         }
//         return sum
//     },{})
//     const result=[]
//     for (const item of books) {
//         result.push({
//             title:item.title,
//             author:newauthors[item.authorId]
//         })
//     }
//     return result
// }
// const books = [
//   { id: 1, title: '三体' },
//   { id: 2, title: '活着' },
//   { id: 3, title: '球状闪电' }
// ]

// const favorites = [
//   { bookId: 1 },
//   { bookId: 3 }
// ]
// 要求得到:
// [
//   {
//     id:1,
//     title:'三体',
//     isFavorite:true
//   }
// ]
// 先转换对象
const getobj=(books,favorites)=>{
    const favoritesObj=favorites.reduce((sum,current)=>{
    if(!sum[current.bookId]){
        sum[current.bookId]=true
    }
    return sum
},{})
const newbooks=[]
for (const item of books) {
        newbooks.push({
            id:item.id,
            title:item.title,
            isFavorite:favoritesObj[item.id]?true:false
        })
}
return newbooks
}
const categories = [
  { id: 1, name: '科幻' },
  { id: 2, name: '文学' }
]

const histories = [
  { bookId: 1, duration: 30 },
  { bookId: 1, duration: 20 },
  { bookId: 2, duration: 50 }
]
const books = [
  { id: 1, title: '三体', categoryId: 1 },
  { id: 2, title: '活着', categoryId: 2 },
  { id: 3, title: '球状闪电', categoryId: 1 }
]
const getthreeobj=(books,categories,histories)=>{
    const newarr=[]
    // 两个都变成映射对象
    const categoriesobj=categories.reduce((sum,current)=>{
        if(!sum[current.id]){
            sum[current.id]=current.name
        }
        return sum
    },{})
    const historiesobj=histories.reduce((sum,current)=>{
        if(sum[current.bookId]){
            sum[current.bookId]+=current.duration
        }else{
            sum[current.bookId]=current.duration
        }
        return sum
    },{})
    for (const item of books) {
        newarr.push({
            title:item.title,
            category:categoriesobj[item.id],
            totalDuration:historiesobj[item.id]
        })
    }
    return newarr
}
const books = [
  { id: 1, title: '三体', readCount: 100 },
  { id: 2, title: '活着', readCount: 300 },
  { id: 3, title: '球状闪电', readCount: 200 }
]
// 我们按照gpt给出的提示来进行写下去
// 先找出第一大的值,然后过滤掉,再找,再过滤,但由于filter会改变原数组,所以先克隆一下,浅拷贝一手
function gettopthree(books){
    const clonearr=[...books]
    let maxElement=book[0]
    for (const item of books ) {
        if(maxElement<item.readCount){
            maxElement=item
        }
    }
}