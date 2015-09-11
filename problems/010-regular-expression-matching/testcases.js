module.exports = [
  {
    input: ['aa', 'a'],
    output: false,
  },
  {
    input: ['aa', 'aa'],
    output: true,
  },
  {
    input: ['aaa', 'aa'],
    output: false,
  },
  {
    input: ['aa', 'a*'],
    output: true,
  },
  {
    input: ['aa', '.*'],
    output: true,
  },
  {
    input: ['ab', '.*'],
    output: true,
  },
  {
    input: ['aab', 'c*a*b'],
    output: true,
  },
  {
    input: ['bbba', '.*a*a'],
    output: true,
  },
];
