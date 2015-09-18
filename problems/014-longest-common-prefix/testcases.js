module.exports = [
  {
    input: [[]],
    output: '',
  },
  {
    input: [['a']],
    output: 'a',
  },
  {
    input: [['']],
    output: '',
  },
  {
    input: [['a', 'a']],
    output: 'a',
  },
  {
    input: [['ab', 'ac']],
    output: 'a',
  },
  {
    input: [['aa', 'ab', 'aab']],
    output: 'a',
  },
  {
    input: [['abc', 'abd', 'abcd']],
    output: 'ab',
  },
  {
    input: [['a b', 'a ']],
    output: 'a ',
  },
  {
    input: [['a', '']],
    output: '',
  },
];
