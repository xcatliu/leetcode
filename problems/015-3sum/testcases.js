module.exports = [
  {
    input: [[]],
    output: [],
  },
  {
    input: [[1, 2]],
    output: [],
  },
  {
    input: [[1, 2, 3]],
    output: [],
  },
  {
    input: [[0, 0, 0]],
    output: [[0, 0, 0]],
  },
  {
    input: [[0, 0, 1]],
    output: [],
  },
  {
    input: [[-3, 2, 1]],
    output: [[-3, 1, 2]],
  },
  {
    input: [[2, -4]],
    output: [],
  },
  {
    input: [[-1, 0, 1, 2, -1, -4]],
    output: [[-1, 0, 1], [-1, -1, 2]],
  },
  {
    input: [[1, 2, -2, -1]],
    output: [],
  },
  {
    input: [[3, 0, -2, -1, 1, 2]],
    output: [[-1, 0, 1], [-2, 0, 2], [-2, -1, 3]],
  },
];
