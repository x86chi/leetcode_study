const { ListNode, addTwoNumbers } = require('./x86chi');

describe('Add Two Numbers', () => {
  test(`Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8`, () => {
    const first = new ListNode(2, new ListNode(4, new ListNode(3)));
    const second = new ListNode(5, new ListNode(6, new ListNode(4)));

    const expectValue = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbers(first, second)).toEqual(expectValue);
  });
  test(` Input: [1, 8], [0]
  Output: [1, 8] `, () => {
    const first = new ListNode(1, new ListNode(8));
    const second = new ListNode(0);

    const expectValue = first;

    expect(addTwoNumbers(first, second)).toEqual(expectValue);
  });
});
