const books = [
  {
    id: 1,
    title: '三体',
    readCount: 100
  },
  {
    id: 2,
    title: '活着',
    readCount: 300
  },
  {
    id: 3,
    title: '平凡的世界',
    readCount: 200
  }
]
// 要求返回这样数据
[
  '活着',
  '平凡的世界'
]
const newBook=[]
for (const item of books) {
    const readCount=item.readCount
    if(readCount>=200){
        newBook.push(item.title)
    }
}