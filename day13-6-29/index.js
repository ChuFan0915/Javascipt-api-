const tree = [
  {
    id: 1,
    parentId: null,
    title: '第一章',
    children: [
      {
        id: 2,
        parentId: 1,
        title: '第一节',
        children: [
          {
            id: 4,
            parentId: 2,
            title: '第一小节',
            children: []
          }
        ]
      },
      {
        id: 3,
        parentId: 1,
        title: '第二节',
        children: []
      }
    ]
  }]
//   q1找到指定的节点
const findNode =(tree,id)=>{
    for (const item of tree) {
            if(item.id===id){
                return item
            }
            if(item.children&&item.children.length>0){
                const found=findNode(item.children,id)
                if(found){
                    return found
                }
            }
    }
}
const findPath=(tree,id)=>{
    for (const item of tree) {
        if(item.id===id){
            return [item.id]
        }
        if(item.children&&item.children.length>0){
            const found=findPath(item.children,id)
            if(found){
                return [item.id,...found]
            }
        }
    }
    // 如果没找到
    return null
}
// 修改指定的节点
// const updateNode=(tree,id,newData)=>{
//     //  首先我们要先找到这个节点
//     const findNode=(tree,id)=>{
//         for (const item of tree) {
//             if(item.id===id){
//                 return item
//             }
//             if(item.children&&item.children.length>0){
//                 const found=findNode(item.children,id)
//                 if(found){
//                     return found
//                 }
//             }
//         }
//         return null
//     }
//     const foundNode=findNode(tree,id)
//     if(foundNode){
//         Object.keys(newData).forEach(key=>{
//             if(key in foundNode){
//                 // 不要忽略这个api key in object
//                 foundNode[key]=newData[key]
//             }
//         })
//         return foundNode
//     }
//     return null
// }
// 这样修改会改变原数组,所以我们换个方法来进行
const updateNode=(tree,id,obj)=>{
    return tree.map(item=>{
        if(item.id===id){
            return{
                ...item,
                ...obj
            }
            // 因为这儿的拓展运算符,会直接替换掉原有的字段
        }
        if(item.children&&item.children.length>0){
            return {
                ...item,
                children:updateNode(item.children,id,obj)
            }
            // 这代表,如果item没被选择到id匹配,我们要保留这个item,继续对它的children处理
        }
        return item
        // 如果这一项没有一个满足 我们返回这个item
    })
}
// 删除
// const Deletenode=(tree,id)=>{
//     for (const item of tree) {
//         if(item.id===id){
//             return tree.filter(i=>i.id!==id)
//             // 在第一层我们就找到了这个节点,或者递归的children
//         }
//         if(item.children&&item.children.length>0){
//             const found=Deletenode(item.children,id)
//            if(found){
//              return{
//                 ...item,
//                 children:found
//              }
//            }
//         }
//     }
//      return null
// }
// 刚刚的删除最大的问题就是兄弟节点没处理到.重新写一版
const Deletenode=(node,id)=>{
    return node.filter(item=>item.id!==id).map(item=>{
        if(item.children&&item.children.length>0){
            return{
                ...item,
                // 这儿的拓展运算符非常关键,要保留自身的节点包括自己的兄弟节点
                children:Deletenode(item.children,id)
            }
        }
        return item
    })
    // 注意这儿的filter很妙,直接就处理了第一级节点,顺便将整个函数的处理逻辑写的很优雅
}
console.log(Deletenode(tree,4));

