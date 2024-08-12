import { Content } from "@/lib/interfaces";

const problems: Content[] = [
  {
    "id": "two-sum",
    "title": "1.Two Sum",
    "type":"problem",
    "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
      }
    ],
    "steps": [
      "Initialize a map to store the indices of elements.",
      "Iterate through the array using a loop.",
      "For each element, check if the complement (target - current element) exists in the map.",
      "If the complement is found, return the indices.",
      "If the complement is not found, add the current element and its index to the map."
    ],
    "code": {
      "javascript": `/**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var twoSum = function(nums, target) {
      let mp = new Map();
      for(let i = 0; i < nums.length; i++){
          if(mp.has(target - nums[i])){
              return [mp.get(target - nums[i]), i];
          }
          mp.set(nums[i], i);
      }
      return [-1, -1];
  };`,
      "python": `def twoSum(nums, target):
      complementMap = {}
      for i, num in enumerate(nums):
          complement = target - num
          if complement in complementMap:
              return [complementMap[complement], i]
          complementMap[num] = i
      return [-1, -1]`,
      "java": `class Solution {
      public int[] twoSum(int[] nums, int target) {
          Map<Integer, Integer> map = new HashMap<>();
          for (int i = 0; i < nums.length; i++) {
              int complement = target - nums[i];
              if (map.containsKey(complement)) {
                  return new int[] { map.get(complement), i };
              }
              map.put(nums[i], i);
          }
          return new int[] {-1, -1};
      }
  }`
    },
    "complexity":{
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)",
    },
    "tags":["leetcode","two sum","java script","java","python"],
    "difficulty": "medium",
    "link": "/leetcode/two-sum",
    "dateOfUpload": "2024/08/10"
  },{
    id: "find-closest-number",
    title: "Find Closest Number to Zero",
    type: "problem",
    statement:
      "Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.",
    examples: [
      {
        input: "nums = [-4,-2,1,4,8]",
        output: "1",
        explanation:
          "The distance from -4 to 0 is |−4| = 4.\n" +
          "The distance from -2 to 0 is |−2| = 2.\n" +
          "The distance from 1 to 0 is |1| = 1.\n" +
          "The distance from 4 to 0 is |4| = 4.\n" +
          "The distance from 8 to 0 is |8| = 8.\n" +
          "Thus, the closest number to 0 in the array is 1.",
      },
      {
        input: "nums = [2,-1,1]",
        output: "1",
        explanation:
          "1 and -1 are both the closest numbers to 0, so 1 being larger is returned.",
      },
    ],
    steps: [
      "Initialize a variable `minDist` with a value of Infinity to keep track of the closest number.",
      "Iterate through each number in the array.",
      "For each number, check its absolute value and compare it with the absolute value of `minDist`.",
      "If the current number's absolute value is smaller, or if it is equal to the absolute value of `minDist` and is greater, update `minDist`.",
      "Return `minDist` as the closest number to zero.",
    ],
    code: {
      javascript: `var findClosestNumber = function(nums) {
        let minDist = Infinity;
        for (let i = 0; i < nums.length; i++) {
          if (Math.abs(nums[i]) < Math.abs(minDist) || nums[i] === Math.abs(minDist)) {
            minDist = nums[i];
          }
        }
        return minDist;
      };`,
      python: `def findClosestNumber(nums):
        minDist = float('inf')
        for num in nums:
            if abs(num) < abs(minDist) or num == abs(minDist):
                minDist = num
        return minDist`,
      java: `public class Solution {
        public int findClosestNumber(int[] nums) {
            int minDist = Integer.MAX_VALUE;
            for (int num : nums) {
                if (Math.abs(num) < Math.abs(minDist) || num == Math.abs(minDist)) {
                    minDist = num;
                }
            }
            return minDist;
        }
      }`,
    },
    complexity: {
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },
    difficulty: "easy",
    link: "/leetcode/find-closest-number",
    dateOfUpload: "2024-08-12", 
    subheadings: [
      {
        heading: "Problem Overview",
        description:
          "This problem requires finding the number closest to zero in an array. If there are multiple such numbers, the largest one should be returned.",
      },
      {
        heading: "Approach",
        description:
          "The approach involves iterating through the array while keeping track of the number with the smallest absolute value. The code checks each number against the current closest number and updates if a closer or equally close but larger number is found.",
      },
    ],
    tags: ["LeetCode", "Array", "Greedy", "Easy"],
  },
    ];

export default problems;
