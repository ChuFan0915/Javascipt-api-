// listToTree(list)
// 数组转换成树

// treeToList(tree)
// 树转成数组
// findNode(tree, id)
// 遍历找节点
// findPath(tree, id)
// 遍历找路径
// updateNode(tree, id, newData)
// 修改节点字段
// deleteNode(tree, id)
// 通过id删除节点
const list = [
  { id: 1, parentId: null, title: '第一章' },
  { id: 2, parentId: 1, title: '第一节' },
  { id: 3, parentId: 1, title: '第二节' },
  { id: 4, parentId: 2, title: '第一小节' },
  { id: 5, parentId: null, title: '第二章' }
]


const listToTree=(list)=>{
    const map={}
    const result=[]
    // 首先我们写一个map的映射对象,用每一个id来作为唯一键值
    for (const item of list) {
        if(!map[item.id]){
            map[item.id]={
                ...item,
                children:[]
            }
        }
    }
    for (const item of list) {
        if(item.parentId!==null){
            // 就代表他是某个节点的子节点
            map[item.parentId].children.push(map[item.id])
        }
        else{
            // 代表是跟节点
            result.push(map[item.id])
        }
    }
    return result
}
// 
const tree=[
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
  },
  {
    id: 5,
    parentId: null,
    title: '第二章',
    children: []
  }
]
const treeToList = (tree) => {
   const dfs=(tree,level)=>{
    const result=[]
    for (const item of tree) {
        const {children,...rest}=item
        result.push({
            ...rest,
            level:level
        })
        if(children?.length>0){
             const childrens=dfs(children,level+1)
            //  这个递归的函数要用一个变量来接
            result.push(...childrens)
        }
    }
    return result
   }
   return dfs(tree,1)
}
// 找到指定的节点
const findNode=(tree,id)=>{
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
    return null
}
// editNode
const editNode=(tree,id,newData)=>{
    return tree.map(item=>{
        if(item.id===id){
            return {
                ...item,
                ...newData
            }
        }
        if(item.children&&item.children.length>0){
            return{
                ...item,
                children:editNode(item.children,id,newData)
            }
        }
        // 保留兄弟节点
        return item
    })
}
// 删除节点
const Deletenode=(tree,id)=>{
    return tree.filter(i=>i.id!==id).map(item=>{
        if(item.children&&item.children.length>0){
            return {
                ...item,
                children:Deletenode(item.children,id)
            }
        }
        return item
    })
}
console.log(findPath(tree,4));


