// List1 字符串的翻转
var reverseString = function(s) {
    let news=s.reverse()
    return news
};
// List2 反转单词
var reverseWords = function(s) {
    const news=s.split(' ').map(m=>m.split('').reverse().join('')).join(' ')
    return news
};
// List3 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
// 示例 1:
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
function MoveZero(s){
    let j=0
    // 非0元素所在的位置
    for(let i =0;i<s.length;i++){
        if(s[i]!==0){
            // 当前的元素不是0，则进入这个判断
            if(i!==j){
                [s[i],s[j]]=[s[j],s[i]]//交换位置
            }
            j++
        }
    }
    return s
}
// List4 移除元素
function RemoveItem(nums,val){
    let newnums=nums.filter(item=>item!==val)
    return newnums
}