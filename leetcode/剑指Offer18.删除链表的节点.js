/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function (head, val) {
  if (head.val === val) {
    return head.next;
  }
  let ptr = head;
  while (ptr.next != null) {
    if (ptr.next.val === val) {
      ptr.next = ptr.next.next;
      return head
    } else {
      ptr = ptr.next;
    }
  }
  return head;
};