import { Problem } from "@/lib/interfaces";

const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    approach:
      "Use a hash map to store the complement of each number and check if the complement exists in the array.",
    code: {
      javascript: `function twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) {
            return [map.get(complement), i];
          }
          map.set(nums[i], i);
        }
      }`,
      python: `def twoSum(nums, target):
        complementMap = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in complementMap:
                return [complementMap[complement], i]
            complementMap[num] = i`,
      java: `class Solution {
        public int[] twoSum(int[] nums, int target) {
            Map<Integer, Integer> map = new HashMap<>();
            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];
                if (map.containsKey(complement)) {
                    return new int[] { map.get(complement), i };
                }
                map.put(nums[i], i);
            }
            return null;
        }
      }`,
    },
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    difficulty: "medium",
    link: "/leetcode/two-sum",
    dateOfSolved: "2024/08/10",
  },
];

export default problems;
