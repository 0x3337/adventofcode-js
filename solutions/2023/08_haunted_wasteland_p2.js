/**
 * @day 8
 * @title Haunted Wasteland - Part 2
 * @url https://adventofcode.com/2023/day/8/
 */

const hauntedWasteland = (instructions, nodes) => {
  let step = 0;
  let currentNodes = [];
  let resultNodes = {};

  for (const node in nodes) {
    if (node[2] === 'A') {
      currentNodes.push(node);
    }
  }

  while (currentNodes.length !== Object.keys(resultNodes).length) {
    for (const instruction of instructions) {
      for (let i = 0; i < currentNodes.length; i++) {
        let node = nodes[currentNodes[i]];

        currentNodes[i] = instruction === 'L' ? node[0] : node[1];

        if (resultNodes[currentNodes[i]] === undefined && currentNodes[i][2] === 'Z') {
          resultNodes[currentNodes[i]] = step + 1;
        }
      }

      step++;
    }
  }

  let steps = Object.values(resultNodes);

  if (steps.length === 1) {
    return steps[0];
  }

  let gcd = findGCD(steps);

  return steps.reduce((result, step) => {
    return result * step / gcd;
  }, gcd);
};

const findGCD = (numbers) => {
  const gcdOfTwoNumbers = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  };

  let result = gcdOfTwoNumbers(numbers[0], numbers[1]);

  for (let i = 2; i < numbers.length; i++) {
    result = gcdOfTwoNumbers(result, numbers[i]);
  }

  return result;
};
