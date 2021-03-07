/**
 *https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 *请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]
但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 *  
 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let exist = function (board, word) {
  let flag = [];
  let wordIndex = 0;
  const rowLen = board.length,
    crossLen = board[0].length,
    wordLen = word.length;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < crossLen; j++) {
      if (lookAround(board, i, j, word) === true)
        return true;
    }
  } return false;
  function lookAround(board, i, j) {
    let derection = 0;
    if (board[i][j] === word[wordIndex] && (!flag[i] || flag[i][j] != 1)) {
      if (flag[i] === undefined) flag[i] = [];
      flag[i][j] = 1;
      wordIndex++;
      i + 1 < rowLen && lookAround(board, i + 1, j);// right
      j + 1 < crossLen && lookAround(board, i, j + 1); // down
      i - 1 >= 0 && lookAround(board, i - 1, j); // left
      j - 1 >= 0 && lookAround(board, i, j - 1); // up
      derection = 1
    }
    if (wordIndex === wordLen) {
      return true;
    } else {
      if (wordIndex && derection === 1) {
        wordIndex--;
        flag[i][j] = 0
      };

      if (wordIndex === 0)
        return false;
    }
  }
}


/**
 * 可优化：不需要单独记录flag, 可直接修改board数组，回溯时恢复即可
 */