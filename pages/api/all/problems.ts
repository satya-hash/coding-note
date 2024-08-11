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
  },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],

  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",
  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{
  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],

  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",
  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{
  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],

  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",
  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{
  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"blog",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],

  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  // {
  //   "id": "two-sum",
  //   "title": "1.Two Sum",
  //   "type":"problem",

  //   "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  //   "examples": [
  //     {
  //       "input": "nums = [2,7,11,15], target = 9",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
  //     },
  //     {
  //       "input": "nums = [3,2,4], target = 6",
  //       "output": "[1,2]",
  //       "explanation": "Because nums[1] + nums[2] == 6, we return [1, 2]."
  //     },
  //     {
  //       "input": "nums = [3,3], target = 6",
  //       "output": "[0,1]",
  //       "explanation": "Because nums[0] + nums[1] == 6, we return [0, 1]."
  //     }
  //   ],
  //   "steps": [
  //     "Initialize a map to store the indices of elements.",
  //     "Iterate through the array using a loop.",
  //     "For each element, check if the complement (target - current element) exists in the map.",
  //     "If the complement is found, return the indices.",
  //     "If the complement is not found, add the current element and its index to the map."
  //   ],
  //   "code": {
  //     "javascript": `/**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  */
  // var twoSum = function(nums, target) {
  //     let mp = new Map();
  //     for(let i = 0; i < nums.length; i++){
  //         if(mp.has(target - nums[i])){
  //             return [mp.get(target - nums[i]), i];
  //         }
  //         mp.set(nums[i], i);
  //     }
  //     return [-1, -1];
  // };`,
  //     "python": `def twoSum(nums, target):
  //     complementMap = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in complementMap:
  //             return [complementMap[complement], i]
  //         complementMap[num] = i
  //     return [-1, -1]`,
  //     "java": `class Solution {
  //     public int[] twoSum(int[] nums, int target) {
  //         Map<Integer, Integer> map = new HashMap<>();
  //         for (int i = 0; i < nums.length; i++) {
  //             int complement = target - nums[i];
  //             if (map.containsKey(complement)) {
  //                 return new int[] { map.get(complement), i };
  //             }
  //             map.put(nums[i], i);
  //         }
  //         return new int[] {-1, -1};
  //     }
  // }`
  //   },
  //   "complexity":{

  //     "timeComplexity": "O(n)",
  //     "spaceComplexity": "O(n)",
  //   },
  //   "tags":["leetcode","two sum","java script","java","python"],
  //   "difficulty": "medium",
  //   "link": "/leetcode/two-sum",
  //   "dateOfUpload": "2024/08/10"
  // },
  ];

export default problems;
