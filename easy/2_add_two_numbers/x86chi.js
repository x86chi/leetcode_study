function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} first
 * @param {ListNode} second
 * @param {boolean} [carry]
 * @return {ListNode}
 */
function addTwoNumbers(first, second, carry) {
  if (first !== null || second !== null) {
    const added = (first ? first.val : 0) + (second ? second.val : 0);
    const carried = added + (carry ? 1 : 0);

    const node = new ListNode(carried % 10);

    node.next = addTwoNumbers(
      first && first.next,
      second && second.next,
      carried >= 10
    );
    return node;
  }
  if (carry) {
    return new ListNode(1);
  }
  return null;
}

module.exports = {
  ListNode,
  addTwoNumbers,
};
