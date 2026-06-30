// 
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
//   {
//     id: 5,
//     parentId: null,
//     title: '第二章',
//     children: []
//   }
// ]
// 要求输出
// [
//   { id: 1, parentId: null, title: '第一章', level: 1 },
//   { id: 2, parentId: 1, title: '第一节', level: 2 },
//   { id: 4, parentId: 2, title: '第一小节', level: 3 },
//   { id: 3, parentId: 1, title: '第二节', level: 2 },
//   { id: 5, parentId: null, title: '第二章', level: 1 }
// ]
//写一个遍历的函数
// 先定义这个level
const findLevel=(tree,level)=>{
        const result=[]
        for (const item of tree) {
            result.push({
                ...item,
                level:level
            })
            if(item.children.length>0){
                const childTree= findLevel(item.children,level+1)
                // 它返回了子数组,result也要去接

                result.push(...childTree)
                // 这儿要用拓展运算符,因为childtree是一个数组,要通过拓展运算符来进行拿到每一项值
            }
        }
        return result
}
// 合并一个总的函数
const treeList=(tree)=>{
    const result=[]
    // 写一个递归函数不return
    const dfs=(tree,level)=>{
        for (const item of tree) {
            const {children,...rest}=item
            // 解构item
            result.push({
                ...rest,
                level:level
            })
            // 如果有children的数组不为0
            if(item?.children.length>0){
                dfs(item.children,level+1)
            }
        }
    }
    dfs(tree,1)
    return result
}
// 写一个找到节点的函数
const findNode=(tree,id)=>{
    for (const item of tree) {
        if(item.id==id){
             return item
            //  return它只能return一层
        }
        if(item.children&&item.children.length>0){
               const found= findNode(item.children,id)
               if(found){
                return found
               }
                // 这部分没有接住啊,
            }
        
    }
}


const findNode = (tree, id) => {
  for (const item of tree) {
    if (item.id === id) {
      return item
    }

    if (item.children && item.children.length > 0) {
      const found=findNode(item.children,id)
      if(found){
        return found
        // 因为return只能返回一层的东西
      }
    }
  }

  return null
}
const findPath=(tree,id)=>{
    for (const item of tree) {
        if(item.id===id){
            return [item.id]
        }if(item.children&&item.children.length>0){
            result.push(item.id)
            const found=findPath(item.children,id)
            if(found){
                return found
            }
        }
    }
}
console.log(findPath(tree,4));
