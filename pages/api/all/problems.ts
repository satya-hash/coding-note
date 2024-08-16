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
    title: "2239. Find Closest Number to Zero",
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
  {
    id: "merge-intervals",
    title: "56. Merge Intervals",
    type: "problem",
    statement:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation:
          "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
      },
    ],
    steps: [
      "Sort the intervals based on the start time of each interval.",
      "Initialize an empty array 'arr' to store the merged intervals.",
      "Set the first interval as 'prev'.",
      "Iterate through the rest of the intervals.",
      "For each interval 'cur', check if it overlaps with 'prev' (i.e., if 'prev[1]' is greater than or equal to 'cur[0]').",
      "If they overlap, merge them by updating 'prev[1]' to the maximum of 'prev[1]' and 'cur[1]'.",
      "If they don't overlap, push 'prev' to 'arr' and set 'cur' as the new 'prev'.",
      "After the loop, push the last interval 'prev' to 'arr'.",
      "Return 'arr' as the merged intervals.",
    ],
    code: {
      javascript: `/**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  var merge = function (intervals) {
      arr = [];
      intervals.sort((a, b) => a[0] - b[0]);
  
      let prev = intervals[0];
  
      for (let i = 1; i < intervals.length; i++) {
          let cur = intervals[i];
          if (prev[1] >= cur[0]) {
              prev[1] = Math.max(cur[1], prev[1])
          } else {
              arr.push(prev)
              prev = cur;
          }
      }
  
      arr.push(prev)
      return arr;
  };`,
      python: `def merge(intervals):
      intervals.sort(key=lambda x: x[0])
      merged = []
      prev = intervals[0]
      
      for i in range(1, len(intervals)):
          cur = intervals[i]
          if prev[1] >= cur[0]:
              prev[1] = max(prev[1], cur[1])
          else:
              merged.append(prev)
              prev = cur
      
      merged.append(prev)
      return merged`,
      java: `import java.util.Arrays;
  import java.util.LinkedList;
  
  class Solution {
      public int[][] merge(int[][] intervals) {
          Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
          LinkedList<int[]> merged = new LinkedList<>();
          
          for (int[] interval : intervals) {
              if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
                  merged.add(interval);
              } else {
                  merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
              }
          }
          
          return merged.toArray(new int[merged.size()][]);
      }
  }`,
    },
    complexity: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
    },
    tags: ["leetcode", "merge intervals", "javascript", "java", "python"],
    difficulty: "medium",
    link: "/leetcode/merge-intervals",
    dateOfUpload: "2024/08/14",
  },
  {
    id: "spiral-matrix",
    title: "54. Spiral Matrix",
    type: "problem",
    statement:
      "Given an m x n matrix, return all elements of the matrix in spiral order.",
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
        explanation:
          "Start at the top-left corner and move right across the first row to get [1, 2, 3]. Then move down the last column to get [6, 9]. Move left across the bottom row to get [8, 7]. Finally, move up the first column to get [4]. The remaining element is [5] in the center.",
      },
      {
        input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        output: "[1,2,3,4,8,12,11,10,9,5,6,7]",
        explanation:
          "Start at the top-left corner and move right across the first row to get [1, 2, 3, 4]. Then move down the last column to get [8, 12]. Move left across the bottom row to get [11, 10, 9]. Move up the first column to get [5]. The remaining middle elements are collected by moving right in the second row to get [6, 7].",
      },
    ],
    steps: [
      "Initialize four pointers: 'top' at 0, 'bottom' at the last row index, 'left' at 0, and 'right' at the last column index.",
      "While 'top' <= 'bottom' and 'left' <= 'right', perform the following steps:",
      "Traverse from 'left' to 'right' along the 'top' row, and move 'top' pointer down.",
      "Traverse from 'top' to 'bottom' along the 'right' column, and move 'right' pointer left.",
      "If 'top' <= 'bottom', traverse from 'right' to 'left' along the 'bottom' row, and move 'bottom' pointer up.",
      "If 'left' <= 'right', traverse from 'bottom' to 'top' along the 'left' column, and move 'left' pointer right.",
      "Continue this process until the pointers meet or cross each other.",
      "Return the array of elements collected in spiral order.",
    ],
    code: {
      javascript: `/**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  var spiralOrder = function (matrix) {
      let n = matrix.length - 1, m = matrix[0].length - 1;
      let left = 0, right = m, top = 0, bottom = n;
      let res = [];
      while (left <= right && top <= bottom) {
  
          for (let i = left; i <= right; i++) {
              res.push(matrix[top][i])
          }
          top++;
          for (let i = top; i <= bottom; i++) {
              res.push(matrix[i][right]);
          }
          right--;
          if (top <= bottom) {
  
              for (let i = right; i >= left; i--) {
                  res.push(matrix[bottom][i])
              }
              bottom--;
          }
          if (left <= right) {
  
              for (let i = bottom; i >= top; i--) {
                  res.push(matrix[i][left])
              }
              left++;
          }
      }
      return res;
  };`,
      python: `def spiralOrder(matrix):
      res = []
      left, right = 0, len(matrix[0]) - 1
      top, bottom = 0, len(matrix) - 1
      
      while left <= right and top <= bottom:
          for i in range(left, right + 1):
              res.append(matrix[top][i])
          top += 1
          
          for i in range(top, bottom + 1):
              res.append(matrix[i][right])
          right -= 1
          
          if top <= bottom:
              for i in range(right, left - 1, -1):
                  res.append(matrix[bottom][i])
              bottom -= 1
          
          if left <= right:
              for i in range(bottom, top - 1, -1):
                  res.append(matrix[i][left])
              left += 1
      
      return res`,
      java: `import java.util.ArrayList;
  import java.util.List;
  
  class Solution {
      public List<Integer> spiralOrder(int[][] matrix) {
          List<Integer> res = new ArrayList<>();
          int left = 0, right = matrix[0].length - 1;
          int top = 0, bottom = matrix.length - 1;
          
          while (left <= right && top <= bottom) {
              for (int i = left; i <= right; i++) {
                  res.add(matrix[top][i]);
              }
              top++;
              
              for (int i = top; i <= bottom; i++) {
                  res.add(matrix[i][right]);
              }
              right--;
              
              if (top <= bottom) {
                  for (int i = right; i >= left; i--) {
                      res.add(matrix[bottom][i]);
                  }
                  bottom--;
              }
              
              if (left <= right) {
                  for (int i = bottom; i >= top; i--) {
                      res.add(matrix[i][left]);
                  }
                  left++;
              }
          }
          
          return res;
      }
  }`,
    },
    complexity: {
      timeComplexity: "O(m * n)",
      spaceComplexity: "O(1)",
    },
    tags: ["leetcode", "spiral matrix", "javascript", "java", "python"],
    difficulty: "medium",
    link: "/leetcode/spiral-matrix",
    dateOfUpload: "2024/08/14",
  },
  {
    id: "rotate-image",
    title: "48. Rotate Image",
    type: "problem",
    statement:
      "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
        explanation:
          "First, transpose the matrix, converting rows into columns. The matrix becomes [[1,4,7],[2,5,8],[3,6,9]]. Then, reverse each row to get the final rotated matrix.",
      },
      {
        input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
        explanation:
          "First, transpose the matrix. The matrix becomes [[5,2,13,15],[1,4,3,14],[9,8,6,12],[11,10,7,16]]. Then, reverse each row to get the final rotated matrix.",
      },
    ],
    steps: [
      "Transpose the matrix by swapping elements across its diagonal.",
      "Iterate over each row and reverse its elements to achieve the 90-degree rotation.",
      "This method modifies the matrix in place, without using any extra space for another matrix.",
    ],
    code: {
      javascript: `/**
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   */
  var rotate = function(matrix) {
      let rowLen = matrix.length;
      let colLen = matrix[0].length;
     for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < rowLen; i++) {
    matrix[i].reverse();
  }
  };`,
      python: `def rotate(matrix):
      n = len(matrix)
      # Transpose the matrix
      for i in range(n):
          for j in range(i, n):
              matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
      
      # Reverse each row
      for i in range(n):
          matrix[i].reverse()`,
      java: `class Solution {
      public void rotate(int[][] matrix) {
          int n = matrix.length;
          
          // Transpose the matrix
          for (int i = 0; i < n; i++) {
              for (int j = i; j < n; j++) {
                  int temp = matrix[i][j];
                  matrix[i][j] = matrix[j][i];
                  matrix[j][i] = temp;
              }
          }
          
          // Reverse each row
          for (int i = 0; i < n; i++) {
              reverseRow(matrix[i]);
          }
      }
      
      private void reverseRow(int[] row) {
          int left = 0, right = row.length - 1;
          while (left < right) {
              int temp = row[left];
              row[left] = row[right];
              row[right] = temp;
              left++;
              right--;
          }
      }
  }`,
    },
    complexity: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
    },
    tags: ["leetcode", "rotate image", "javascript", "java", "python"],
    difficulty: "medium",
    link: "/leetcode/rotate-image",
    dateOfUpload: "2024/08/15",
  },
  {
    id: "group-anagrams",
    title: "49. Group Anagrams",
    type: "problem",
    statement:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    steps: [
      "Initialize a Map to store the grouped anagrams.",
      "Iterate through each string in the array.",
      "Sort each string alphabetically to create a key.",
      "Check if the key exists in the Map.",
      "If the key exists, append the string to the corresponding array. If not, create a new array for that key.",
      "Finally, convert the values of the Map into an array of arrays and return it.",
    ],
    code: {
      javascript: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let mp = new Map();
    for (const str of strs) {
        let sorted = str.split("").sort().join("");
        if (mp.has(sorted)) {
            mp.set(sorted, [...mp.get(sorted), str]);
        } else {
            mp.set(sorted, [str]);
        }
    }
    return Array.from(mp.values());
};`,
      python: `def groupAnagrams(strs):
    anagram_map = {}
    for s in strs:
        sorted_s = ''.join(sorted(s))
        if sorted_s in anagram_map:
            anagram_map[sorted_s].append(s)
        else:
            anagram_map[sorted_s] = [s]
    return list(anagram_map.values())`,
      java: `import java.util.*;
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagramMap = new HashMap<>();
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            if (!anagramMap.containsKey(key)) {
                anagramMap.put(key, new ArrayList<>());
            }
            anagramMap.get(key).add(s);
        }
        return new ArrayList<>(anagramMap.values());
    }
}`,
    },
    complexity: {
      timeComplexity: "O(n * k * log k)",
      spaceComplexity: "O(n * k)",
    },
    tags: ["leetcode", "group anagrams", "javascript", "java", "python"],
    difficulty: "medium",
    link: "/leetcode/group-anagrams",
    dateOfUpload: "2024/08/16",
  },
];

export default problems;
