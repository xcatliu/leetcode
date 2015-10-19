module.exports = [
  {
    input: ['', ''],
    output: 0,
  },
  {
    input: ['a', ''],
    output: 0,
  },
  {
    input: ['abc', 'ababac'],
    output: -1,
  },
  {
    input: ['abc', 'a'],
    output: 0,
  },
  {
    input: ['', 'a'],
    output: -1,
  },
  {
    input: ['abcabc', 'cd'],
    output: -1,
  },
  {
    input: ['abcabc', 'ca'],
    output: 2,
  },
  {
    input: ['bananab', 'nab'],
    output: 4,
  },
];
