module.exports = [
  {
    input: ['anagram', 'nagaram'],
    output: true,
  },
  {
    input: ['', 'a'],
    output: false,
  },
  {
    input: ['cat', 'let'],
    output: false,
  },
  {
    input: ['', ''],
    output: true,
  },
  {
    input: ['b', ''],
    output: false,
  },
  {
    input: ['a', 'a'],
    output: true,
  },
];
