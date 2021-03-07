/**请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string} s
 * @return {string}
 */
 let replaceSpace = function (s) {
  return s.replace(/ /g, '%20');
};