const books = [
  {
    id: 1,
    title: '三体',
    author: '刘慈欣',
    category: '科幻',
    readCount: 258,
    updateTime: '2026-06-10'
  },
  {
    id: 2,
    title: '活着',
    author: '余华',
    category: '文学',
    readCount: 356,
    updateTime: '2026-06-08'
  },
  {
    id: 3,
    title: '球状闪电',
    author: '刘慈欣',
    category: '科幻',
    readCount: 189,
    updateTime: '2026-06-12'
  },
  {
    id: 4,
    title: '平凡的世界',
    author: '路遥',
    category: '文学',
    readCount: 421,
    updateTime: '2026-06-05'
  },
  {
    id: 5,
    title: '明朝那些事儿',
    author: '当年明月',
    category: '历史',
    readCount: 512,
    updateTime: '2026-06-11'
  }
]
// q2:获取所有科幻的
const magicBook=books.filter(i=>i.category=='科幻')
// q3:根据id查书籍
const findBoook=(id)=>{
    for(let i =0;i<books.length;i++){
        if(books[i].id==id){
            return books[i]
        }
    }
}
// q4:找到阅读量最高的书籍
function getMaxReadBook(books) {
    let maxBook=books[0].readCount
    let maxindex=0
    for(let i=1;i<books.length;i++){
        if(books[i].readCount>maxBook){
            maxBook=books[i].readCount
            maxindex=i
        }
    }
    return books[maxindex]
}
const histories = [
    { bookId:1, duration:20 },
    { bookId:1, duration:30 },
    { bookId:2, duration:15 },
    { bookId:1, duration:10 }
]
// // 要去得到{
//     1:60,
//     2:15
// }
const result={}
for(const item of histories){
    const bookid=item.bookId
    if(result[bookid]){
        result[bookid]+=item.duration
    }else{
        result[bookid]=0
    }
}
