const list = [
  { id: 1, parentId: null, title: '第一章' },
  { id: 2, parentId: 1, title: '第一节' },
  { id: 3, parentId: 1, title: '第二节' },
  { id: 4, parentId: 2, title: '第一小节' },
  { id: 5, parentId: null, title: '第二章' }
]
// q1:
// [
//   {
//     id: 1,
//     parentId: null,
//     title: '第一章',
//     children: [
//       {
//         id: 2,
//         parentId: 1,
//         title: '第一节',
//         children: [
//           {
//             id: 4,
//             parentId: 2,
//             title: '第一小节',
//             children: []
//           }
//         ]
//       },
//       {
//         id: 3,
//         parentId: 1,
//         title: '第二节',
//         children: []
//       }
//     ]
//   },
//   {
//     id: 5,
//     parentId: null,
//     title: '第二章',
//     children: []
//   }
// ]
// 要写一个函数来合并一下章节和小节
const getNode=(list)=>{
    const result=[]
    const map={}
    // 写一个对象形式来映射这个树
    for (const item of list) {
        // 用唯一的id来作为的键
        map[item.id]={
            ...item,
            children:[]
        }
    }
    // 再遍历一下这个数组
    for (const item of list) {
        if(item.parentId!==null){
            map[item.parentId].children.push(map[item.id])
        }else{
            // 为一级节点
            result.push(map[item.id])
        }
    }
    return result
}
console.log(getNode(list));

