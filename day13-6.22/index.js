
// // 要求得到
// [
//  {
//   id:1,
//   children:[
//     {
//       id:2,
//       children:[
//         {
//           id:4,
//           children:[
//             {
//               id:5,
//               children:[]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id:3,
//       children:[]
//     }
//   ]
// }
// ]
// // 写一个遍历数组并得到数组的函数
// const getarray=(arr)=>{
//     const map={}
//     const result=[]
//     for (const item of arr) {
//         // 建议一个map对象
//         map[item.id]={
//             ...item,
//             children:[]
//         }
//     }
//     // 再遍历一下这个数组
//     for (const item of arr) {
//         if(item.parentId){
//             // 如果有父节点
//             map[item.parentId].children.push(map[item.id])
//             // 这段代码自动将树结构进行合并处理
//         }else{
//             result.push(map[item.id])
//         }
//     }
//     return {map,result}
// }
// const list = [
//   { id:1,parentId:null },
//   { id:2,parentId:1 },
//   { id:3,parentId:1 },
//   { id:4,parentId:2 },
//   { id:5,parentId:4 }
// ]
// console.log(getarray(list));
// question1:树的扁平化

// 要求得到:
// [
//  {id:1},
//  {id:2},
//  {id:4},
//  {id:3}
// ]
// 写一个函数呗,遍历处理的函数
const result=[]
const testarray=[
 {
   id:1,
   children:[
      {
        id:2,
        children:[
           {
             id:4,
             children:[]
           }
        ]
      },
      {
        id:3,
        children:[]
      }
   ]
 }
]
const getNode=(list)=>{
    for (const item of list) {
     result.push({
        id:item.id
     })
     if(item.children&&item.children.length>0){
        getNode(item.children)
     }
    }
}
const categories = [
  { id:1,name:'科幻' },
  { id:2,name:'文学' }
]

const books = [
  { id:101,title:'三体',categoryId:1 },
  { id:102,title:'球状闪电',categoryId:1 },
  { id:103,title:'活着',categoryId:2 }
]
const getbooks=(books,categories)=>{
    const result=[]
  
    // 先将这个写为一个可映射的对象
    const booksobj=books.reduce((sum,current)=>{
        if(sum[current.categoryId]){
            sum[current.categoryId].push(current.title)
        }else{
            sum[current.categoryId]=[current.title]
        }
        return sum
    },{})
    const cateobj=categories.reduce((sum,current)=>{
        if(!sum[current.id]){
            sum[current.id]=current.name
        }
        return sum
    },{})
    console.log(cateobj);
    
    // 直接遍历这个booksobj
        for (const [key,value] of Object.entries(booksobj)) {
            result.push({
                category:cateobj[key],
                books:value
            })
        }
        return result
    
}

// 得到
// [
//  {
//    category:'科幻',
//    books:['三体','球状闪电']
//  },
//  {
//    category:'文学',
//    books:['活着']
//  }
// ]
const tree = [
 {
   id:1,
   children:[
     {
       id:2,
       children:[
         {
           id:4,
           children:[]
         }
       ]
     },
     {
       id:3,
       children:[]
     }
   ]
 }
]
// 得到:
// [
//  {id:1,level:1},
//  {id:2,level:2},
//  {id:4,level:3},
//  {id:3,level:2}
// ]
const newresult=[]
let level=1
const flatNode=(tree,level)=>{
    for (const item of tree) {
        newresult.push({
            id:item.id,
            level:level
        })
        if(item.children.length>0){
            flatNode(item.children,level+1)
        }
    }
}
flatNode(tree,level)
console.log(newresult,'---');



