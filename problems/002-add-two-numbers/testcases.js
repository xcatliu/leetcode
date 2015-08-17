function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(num) {
  var numbers = num.toStrint().split('').map(Number);
  var result;
  var tmp;
  numbers.forEach(function (number, index) {
    if (index === 0) {
      result = new ListNode(numbers[0]);
      return;
    }
    tmp = new ListNode(numbers[index]);
    tmp.next = result;
    result = tmp;
  });
  return result;
}

module.exports = [
  {
    input: [generateList(342), generateList(465)],
    output: [generateList(807)],
  },
  {
    input: [generateList(999), generateList(888)],
    output: [generateList(1887)],
  },
  {
    input: [generateList(81), generateList(0)],
    output: [generateList(81)],
  },
  {
    input: [generateList(0), generateList(0)],
    output: [generateList(0)],
  },
];
