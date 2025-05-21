
// 描述：
// 给定一个字符串数组 files，每个元素表示一个文件名
// （如 "image.png"、"video.mp4"、"document.pdf"），
// 请你返回一个对象，统计每种扩展名出现的次数。
// 我们尝试将这个封装成一个函数
function getTimes(files){
    const names=files.map(item=>item.slice(item.lastIndexOf('.')+1))
    // 拿到所有拓展名
     return names.reduce((acc,ext)=>{
        acc[ext]=(acc[ext]||0)+1
        return acc
    },{})
}

// 找出最长的公共前缀
// 给定一个字符串数组 arr，找出它们之间的最长公共前缀。如果没有公共前缀，返回空字符串。
const arr = ["flower", "flow", "flight"];
// 输出: "fl"
const arr2 = ["dog", "racecar", "car"];
// 输出: ""
function getSame(arr){
    // 尝试用纵向扫描
   if(!arr.length) return ""
//    没有长度就返回
    for(let i =0;i<arr.length[0];i++){
        let char=arr[0][i]
        // 拿到第一个字符串的字母
        for(let j=1;j<arr.length;j++){
            if(char!==arr[j][i])
               {
                 return arr[0].slice(0,i)
               }
            // 这里的i代表每个数组里面的对应字符串的索引，j代表后面数组里面的除0之后的索引
        }
    }
    return arr[0]
}
function summarizeFiles(files) {
  return files.reduce((acc, file) => {
    // 提取扩展名并转成小写
    const ext = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();

    // 如果这个扩展名没在acc里，初始化一个对象
    if (!acc[ext]) {
      acc[ext] = { count: 0, totalSize: 0 };
    }
    // 计数加一，文件大小累加
    acc[ext].count += 1;
    acc[ext].totalSize += file.size;
    return acc;
  }, {});
}
// 测试
const files = [
  { name: "photo1.jpg", size: 2048 },
  { name: "video1.mp4", size: 1048576 },
  { name: "doc1.pdf", size: 102400 },
  { name: "photo2.JPG", size: 3072 },
  { name: "video2.MP4", size: 2097152 },
];

console.log(summarizeFiles(files));
function chunk(arr, size) {
  // 补全逻辑
}

console.log(chunk([1,2,3,4,5], 2)); // 输出: [[1,2],[3,4],[5]]