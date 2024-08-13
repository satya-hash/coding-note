import { Content } from "@/lib/interfaces";

const problems: Content[] = [
  {
    id: "two-sum",
    title: "1.Two Sum",
    type: "problem",
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1].",
      },
    ],
    steps: [
      "Initialize a map to store the indices of elements.",
      "Iterate through the array using a loop.",
      "For each element, check if the complement (target - current element) exists in the map.",
      "If the complement is found, return the indices.",
      "If the complement is not found, add the current element and its index to the map.",
    ],
    code: {
      javascript: `/**
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
      python: `def twoSum(nums, target):
      complementMap = {}
      for i, num in enumerate(nums):
          complement = target - num
          if complement in complementMap:
              return [complementMap[complement], i]
          complementMap[num] = i
      return [-1, -1]`,
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
          return new int[] {-1, -1};
      }
  }`,
    },
    complexity: {
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
    tags: ["leetcode", "two sum", "java script", "java", "python"],
    difficulty: "medium",
    link: "/leetcode/two-sum",
    dateOfUpload: "2024/08/10",
  },
  {
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
  {
    id: "121",
    title: "121. Best Time to Buy and Sell Stock",
    type: "problem",
    statement:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 and sell on day 5, profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done, and the max profit = 0.",
      },
    ],
    steps: [
      "Initialize a variable 'buy' with the first price and 'profit' with 0.",
      "Iterate through the prices starting from the second day.",
      "Update 'buy' to the minimum price encountered so far.",
      "Calculate the potential profit by subtracting 'buy' from the current price.",
      "Update 'profit' to the maximum value between the current 'profit' and the calculated profit.",
      "After the loop, return the maximum profit.",
    ],
    code: {
      javascript: `var maxProfit = function(prices) {
            let buy=prices[0], profit=0;
            for(let i=1; i<prices.length; i++){
                buy=Math.min(buy, prices[i]);
                profit = Math.max(profit, prices[i]-buy);
            }
            return profit;
        };`,
      python: `def maxProfit(prices):
            buy = prices[0]
            profit = 0
            for price in prices[1:]:
                buy = min(buy, price)
                profit = max(profit, price - buy)
            return profit`,
      java: `class Solution {
            public int maxProfit(int[] prices) {
                int buy = prices[0];
                int profit = 0;
                for (int i = 1; i < prices.length; i++) {
                    buy = Math.min(buy, prices[i]);
                    profit = Math.max(profit, prices[i] - buy);
                }
                return profit;
            }
        }`,
    },
    complexity: {
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },
    tags: ["array", "easy", "stock"],
    difficulty: "easy",
    link: "/leetcode/121",
    dateOfUpload: "2024/08/13",
  },
  {
    id: "1768",
    title: "1768. Merge Strings Alternately",
    type: "problem",
    statement:
      "You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.",
    examples: [
      {
        input: "word1 = 'abc', word2 = 'pqr'",
        output: "'apbqcr'",
        explanation: "The merged string will be merged as so: a p b q c r",
      },
      {
        input: "word1 = 'ab', word2 = 'pqrs'",
        output: "'apbqrs'",
        explanation: "word2 is longer, so 'rs' is appended to the end.",
      },
      {
        input: "word1 = 'abcd', word2 = 'pq'",
        output: "'apbqcd'",
        explanation: "word1 is longer, so 'cd' is appended to the end.",
      },
    ],
    steps: [
      "Initialize an empty string 'ans' and a variable 'i' to 0 for iteration.",
      "Loop through both strings simultaneously, adding characters from 'word1' and 'word2' alternately to 'ans'.",
      "After the loop, check if any string still has remaining characters.",
      "Append the remaining characters of 'word1' or 'word2' (if any) to 'ans'.",
      "Return the merged string 'ans'.",
    ],
    code: {
      javascript: `var mergeAlternately = function(word1, word2) {
          let i=0, ans='';
          while(i<word1.length && i<word2.length){
              ans+=word1[i];
              ans+=word2[i];
              i++;
          }
          if(i<word1.length){
              ans+=word1.slice(i);
          }
          if(i<word2.length){
              ans+=word2.slice(i);
          }
          return ans;
      };`,
      python: `def mergeAlternately(word1, word2):
          i, ans = 0, ''
          while i < len(word1) and i < len(word2):
              ans += word1[i] + word2[i]
              i += 1
          ans += word1[i:] + word2[i:]
          return ans`,
      java: `class Solution {
          public String mergeAlternately(String word1, String word2) {
              StringBuilder ans = new StringBuilder();
              int i = 0;
              while (i < word1.length() && i < word2.length()) {
                  ans.append(word1.charAt(i)).append(word2.charAt(i));
                  i++;
              }
              ans.append(word1.substring(i)).append(word2.substring(i));
              return ans.toString();
          }
      }`,
    },
    complexity: {
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
    tags: ["string", "easy", "merge"],
    difficulty: "easy",
    link: "/leetcode/1768",
    dateOfUpload: "2024/08/13",
  },
  {
    id: "238",
    title: "238. Product of Array Except Self",
    type: "problem",
    statement:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation:
          "The output array contains the product of all elements except the one at the current index.",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
        explanation:
          "The output array contains the product of all elements except the one at the current index.",
      },
    ],
    steps: [
      "Initialize two arrays pre and post to store prefix and suffix products.",
      "Create an ans array to store the final result.",
      "Iterate through nums to fill pre with prefix products.",
      "Iterate through nums in reverse to fill post with suffix products.",
      "Multiply the corresponding elements of pre and post to fill ans.",
      "Return the ans array.",
    ],
    code: {
      javascript: `var productExceptSelf = function(nums) {
            let pre = new Array(nums.length).fill(1);
            let post = new Array(nums.length).fill(1);
            let ans = new Array(nums.length).fill(1);
            for(let i = 1; i < nums.length; i++){
                pre[i] = pre[i-1] * nums[i-1];
            }
            for(let i = nums.length-2; i >= 0; i--){
                post[i] = post[i+1] * nums[i+1];
            }
            for(let i = 0; i < nums.length; i++){
                ans[i] = pre[i] * post[i];
            }
            return ans;
        };`,
      python: `def productExceptSelf(nums):
            pre = [1] * len(nums)
            post = [1] * len(nums)
            ans = [1] * len(nums)
            
            for i in range(1, len(nums)):
                pre[i] = pre[i-1] * nums[i-1]
                
            for i in range(len(nums)-2, -1, -1):
                post[i] = post[i+1] * nums[i+1]
                
            for i in range(len(nums)):
                ans[i] = pre[i] * post[i]
                
            return ans`,
      java: `class Solution {
            public int[] productExceptSelf(int[] nums) {
                int[] pre = new int[nums.length];
                int[] post = new int[nums.length];
                int[] ans = new int[nums.length];
                
                pre[0] = 1;
                post[nums.length-1] = 1;
                
                for (int i = 1; i < nums.length; i++) {
                    pre[i] = pre[i-1] * nums[i-1];
                }
                
                for (int i = nums.length-2; i >= 0; i--) {
                    post[i] = post[i+1] * nums[i+1];
                }
                
                for (int i = 0; i < nums.length; i++) {
                    ans[i] = pre[i] * post[i];
                }
                
                return ans;
            }
        }`,
    },
    complexity: {
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
    tags: ["array", "prefix", "suffix", "product"],
    difficulty: "medium",
    link: "/leetcode/238",
    dateOfUpload: "2024/08/13",
  },
];

export default problems;
