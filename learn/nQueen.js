/**
 * 这个问题很经典了，简单解释一下：给你一个 N×N 的棋盘，让你放置 N 个皇后，使得它们不能互相攻击。
 * PS：皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。
 * 这个问题本质上跟全排列问题差不多，决策树的每一层表示棋盘上的每一行；每个节点可以做出的选择是，在该行的任意一列放置一个皇后。
 */
let arr = [];

for (let i = 0; i < n; i++) {
  
  arr.push()
}

function nQueen(n) {
  for (let i = 0; i < n; i++) {
    arr[i] = 1;
    nQueen(n)
  }
}
/**
 * 
 * @param {Array} board 路径数组，[2,-1,...]  代表每一排第x列放置棋子
 * @param {Number} row 行进度
 */
function backtrack(board, row) {
  // row = n ？
  if (row === board.length) {

  }
}