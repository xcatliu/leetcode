module.exports = [
  {
    input: ['1'],
    output: 1,
  },
  {
    input: ['0'],
    output: 0,
  },
  {
    input: ['+'],
    output: 0,
  },
  {
    input: ['+1'],
    output: 1,
  },
  {
    input: ['+-2'],
    output: 0,
  },
  {
    input: ['2147483648'],
    output: 2147483647,
  },
  {
    input: [' b11228552307'],
    output: 0,
  },
];
