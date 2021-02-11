//slice split splice substr substring

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
let rest = []

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

permutation([1, 2, 3],[])