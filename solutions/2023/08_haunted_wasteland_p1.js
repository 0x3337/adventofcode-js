/**
 * @day 8
 * @title Haunted Wasteland - Part 1
 * @url https://adventofcode.com/2023/day/8/
 */

const hauntedWasteland = (instructions, nodes) => {
  let step = 0;
  let currentNode = 'AAA';

  while (currentNode !== 'ZZZ') {
    for (const instruction of instructions) {
      let node = nodes[currentNode];

      currentNode = instruction === 'L' ? node[0] : node[1];

      step++;
    }
  }

  return step;
};
