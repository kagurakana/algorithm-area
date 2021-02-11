// slice split splice substr substring
// https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E8%AF%A6%E8%A7%A3%E4%BF%AE%E8%AE%A2%E7%89%88.md

/**
回溯算法的这段核心框架

for 选择 in 选择列表:
    # 做选择
    将该选择从选择列表移除
    路径.add(选择)
    backtrack(路径, 选择列表)
    # 撤销选择
    路径.remove(选择)
    将该选择再加入选择列表
 */

//从[1,2,3]中输出全排列

function permutation(rest, chooseList) {
  if (rest.length === 0) {
    console.log(...chooseList)
  }
  for (let index in rest) {
    chooseList.push(rest.shift())
    permutation(rest, chooseList)
    rest.push(chooseList.pop())
  }

}

permutation([1, 2, 3], [])