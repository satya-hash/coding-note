import { Content } from "@/app/lib/interfaces";

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
        statement: "Given an m x n matrix, return all elements of the matrix in spiral order. The spiral order starts from the top-left and moves right, down, left, and up, repeating until all elements are visited.",
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
    {
        id: "evaluate-reverse-polish-notation",
        title: "150. Evaluate Reverse Polish Notation",
        type: "problem",
        statement:
            "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression. The valid operators are '+', '-', '*', and '/'. Each operand may be an integer or another expression. The division between two integers always truncates toward zero. There will not be any division by zero. The input represents a valid arithmetic expression in Reverse Polish Notation. The answer and all intermediate calculations can be represented in a 32-bit integer.",
        examples: [
            {
                input: 'tokens = ["2","1","+","3","*"]',
                output: "9",
                explanation: "((2 + 1) * 3) = 9",
            },
            {
                input: 'tokens = ["4","13","5","/","+"]',
                output: "6",
                explanation: "(4 + (13 / 5)) = 6",
            },
            {
                input:
                    'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
                output: "22",
                explanation: "((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22",
            },
        ],
        steps: [
            "Initialize an empty stack.",
            "Iterate through each token in the array.",
            "If the token is an operator, pop the top two elements from the stack, perform the operation, and push the result back onto the stack.",
            "If the token is a number, push it onto the stack.",
            "After iterating through the tokens, the final result will be the only element left in the stack.",
        ],
        code: {
            javascript: `/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let st = [], res = 0;

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            let a = st.pop();
            let b = st.pop();
            res = parseInt(a) + parseInt(b);
            st.push(parseInt(res));
        }
        else if (tokens[i] === '-') {
            let a = st.pop();
            let b = st.pop();
            res = parseInt(b) - parseInt(a);
            st.push(parseInt(res));
        }
        else if (tokens[i] === '*') {
            let a = st.pop();
            let b = st.pop();
            res = parseInt(a) * parseInt(b);
            st.push(parseInt(res));
        }
        else if (tokens[i] === '/') {
            let a = st.pop();
            let b = st.pop();
            res = parseInt(b) / parseInt(a);
            st.push(parseInt(res));
        }
        else {
            st.push(tokens[i]);
        }
    } return st.pop();
};`,
            python: `def evalRPN(tokens):
    stack = []
    for token in tokens:
        if token in {'+', '-', '*', '/'}:
            b = int(stack.pop())
            a = int(stack.pop())
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(int(a / b))
        else:
            stack.append(token)
    return int(stack.pop())`,
            java: `import java.util.*;
class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for (String token : tokens) {
            switch (token) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    int b = stack.pop();
                    int a = stack.pop();
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/":
                    int divisor = stack.pop();
                    int dividend = stack.pop();
                    stack.push(dividend / divisor);
                    break;
                default:
                    stack.push(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
}`,
        },
        complexity: {
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
        },
        tags: ["leetcode", "evaluate rpn", "javascript", "java", "python"],
        difficulty: "medium",
        link: "/leetcode/evaluate-reverse-polish-notation",
        dateOfUpload: "2024/08/21",
    },
    {
        id: "remove-nth-node-from-end-of-list",
        title: "19. Remove Nth Node From End of List",
        type: "problem",
        statement:
            "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        examples: [
            {
                input: "head = [1,2,3,4,5], n = 2",
                output: "[1,2,3,5]",
                explanation:
                    "The second node from the end of the list is node 4. After removing it, the list becomes [1,2,3,5].",
            },
            {
                input: "head = [1], n = 1",
                output: "[]",
                explanation:
                    "The only node in the list is removed, leaving an empty list.",
            },
            {
                input: "head = [1,2], n = 1",
                output: "[1]",
                explanation:
                    "The last node (node 2) is removed, leaving the list as [1].",
            },
        ],
        steps: [
            "Initialize two pointers, slow and fast, both pointing to the head of the list.",
            "Move the fast pointer n steps forward.",
            "If fast reaches the end, return head.next, as the nth node from the end is the head.",
            "Move both slow and fast pointers one step at a time until fast reaches the last node.",
            "Set slow.next to slow.next.next to remove the nth node from the end.",
            "Return the head of the modified list.",
        ],
        code: {
            javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let slow=head,fast=head;

    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    if(fast===null) return head.next;

    while(fast.next!==null){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;

    return head;
};`,
            python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(0, head)
        slow = fast = dummy
        for _ in range(n):
            fast = fast.next
        while fast.next:
            slow = slow.next
            fast = fast.next
        slow.next = slow.next.next
        return dummy.next`,
            java: `public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode slow = dummy, fast = dummy;

        for (int i = 0; i < n + 1; i++) {
            fast = fast.next;
        }

        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return dummy.next;
    }
}`,
        },
        complexity: {
            timeComplexity: "O(L)",
            spaceComplexity: "O(1)",
        },
        tags: ["leetcode", "linked list", "javascript", "java", "python"],
        difficulty: "medium",
        link: "/leetcode/remove-nth-node-from-end-of-list",
        dateOfUpload: "2024/08/21",
    },
    {
        id: "search-a-2d-matrix",
        title: "74. Search a 2D Matrix",
        type: "problem",
        statement:
            "You are given an m x n integer matrix with the following two properties: Each row is sorted in non-decreasing order and the first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if the target is in the matrix, or false otherwise.",
        examples: [
            {
                input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
                output: "true",
                explanation: "The target 3 is present in the matrix.",
            },
            {
                input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
                output: "false",
                explanation: "The target 13 is not present in the matrix.",
            },
        ],
        steps: [
            "Initialize two pointers, l and r, representing the start and end of the matrix in a 1D perspective.",
            "While l is less than or equal to r, calculate the mid index, row, and column from the mid index.",
            "Compare the matrix[row][col] with the target.",
            "If it matches, return true.",
            "If matrix[row][col] is less than the target, move l to mid + 1.",
            "If matrix[row][col] is greater than the target, move r to mid - 1.",
            "If the loop ends without finding the target, return false.",
        ],
        code: {
            javascript: `/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length, m = matrix[0].length;
    let l = 0, r = n * m - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;

        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
};`,
            python: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        n, m = len(matrix), len(matrix[0])
        l, r = 0, n * m - 1

        while l <= r:
            mid = (l + r) // 2
            row, col = divmod(mid, m)
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] < target:
                l = mid + 1
            else:
                r = mid - 1

        return False`,
            java: `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length, m = matrix[0].length;
        int l = 0, r = n * m - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
            int row = mid / m;
            int col = mid % m;

            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}`,
        },
        complexity: {
            timeComplexity: "O(log(m * n))",
            spaceComplexity: "O(1)",
        },
        tags: [
            "leetcode",
            "binary search",
            "2d array",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/search-a-2d-matrix",
        dateOfUpload: "2024/08/23",
    },
    {
        id: "find-minimum-in-rotated-sorted-array",
        title: "153. Find Minimum in Rotated Sorted Array",
        type: "problem",
        statement:
            "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. The algorithm must run in O(log n) time.",
        examples: [
            {
                input: "nums = [3,4,5,1,2]",
                output: "1",
                explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
            },
            {
                input: "nums = [4,5,6,7,0,1,2]",
                output: "0",
                explanation:
                    "The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.",
            },
            {
                input: "nums = [11,13,15,17]",
                output: "11",
                explanation:
                    "The original array was [11,13,15,17] and it was rotated 4 times.",
            },
        ],
        steps: [
            "Initialize two pointers, low and high, to the start and end of the array, respectively.",
            "While low is less than or equal to high, calculate the mid-point index.",
            "Check if the current subarray is already sorted. If so, the minimum is at the low pointer.",
            "If the left half is sorted, move the low pointer to mid + 1.",
            "If the right half is sorted, move the high pointer to mid - 1.",
            "Update the minimum value at each step.",
            "Return the minimum value found.",
        ],
        code: {
            javascript: `/**
* @param {number[]} nums
* @return {number}
*/
var findMin = function(nums) {
  let low = 0, high = nums.length - 1, ans = Infinity;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[low] <= nums[high]) {
          ans = Math.min(ans, nums[low]);
          break;
      }
      if (nums[low] <= nums[mid]) {
          ans = Math.min(ans, nums[low]);
          low = mid + 1;
      } else {
          ans = Math.min(ans, nums[mid]);
          high = mid - 1;
      }
  }
  return ans;
};`,
            python: `class Solution:
  def findMin(self, nums: List[int]) -> int:
      low, high = 0, len(nums) - 1
      ans = float('inf')
      while low <= high:
          mid = (low + high) // 2
          if nums[low] <= nums[high]:
              ans = min(ans, nums[low])
              break
          if nums[low] <= nums[mid]:
              ans = min(ans, nums[low])
              low = mid + 1
          else:
              ans = min(ans, nums[mid])
              high = mid - 1
      return ans`,
            java: `class Solution {
  public int findMin(int[] nums) {
      int low = 0, high = nums.length - 1;
      int ans = Integer.MAX_VALUE;
      while (low <= high) {
          int mid = (low + high) / 2;
          if (nums[low] <= nums[high]) {
              ans = Math.min(ans, nums[low]);
              break;
          }
          if (nums[low] <= nums[mid]) {
              ans = Math.min(ans, nums[low]);
              low = mid + 1;
          } else {
              ans = Math.min(ans, nums[mid]);
              high = mid - 1;
          }
      }
      return ans;
  }
}`,
        },
        complexity: {
            timeComplexity: "O(log n)",
            spaceComplexity: "O(1)",
        },
        tags: [
            "leetcode",
            "binary search",
            "array",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/find-minimum-in-rotated-sorted-array",
        dateOfUpload: "2024/08/23",
    },
    {
        id: "subtree-of-another-tree",
        title: "572. Subtree of Another Tree",
        type: "problem",
        statement:
            "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
        examples: [
            {
                input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
                output: "true",
                explanation:
                    "The subtree rooted at node 4 of the first tree matches exactly with the subRoot.",
            },
            {
                input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
                output: "false",
                explanation:
                    "The subtree rooted at node 4 does not match with the subRoot because of the extra node 0.",
            },
        ],
        steps: [
            "Check if the root is null; if so, return false.",
            "Check if the current root value matches the subRoot value and if the trees are identical from this point.",
            "If the trees match, return true.",
            "If they do not match, recursively check the left and right subtrees.",
            "Use a helper function to determine if two trees are identical in structure and node values.",
        ],
        code: {
            javascript: `/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(root === null) return false;
    if(root.val === subRoot.val && isSame(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    function isSame(s, t) {
        if(s === null && t === null) return true;
        if(s === null || t === null || s.val !== t.val) return false;
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
};`,
            python: `class Solution:
    def isSubtree(self, root: TreeNode, subRoot: TreeNode) -> bool:
        if not root:
            return False
        if self.isSame(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    def isSame(self, s: TreeNode, t: TreeNode) -> bool:
        if not s and not t:
            return True
        if not s or not t or s.val != t.val:
            return False
        return self.isSame(s.left, t.left) and self.isSame(s.right, t.right)`,
            java: `class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return false;
        if (isSame(root, subRoot)) return true;
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }

    private boolean isSame(TreeNode s, TreeNode t) {
        if (s == null && t == null) return true;
        if (s == null || t == null || s.val != t.val) return false;
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
}`,
        },
        complexity: {
            timeComplexity: "O(n * m)",
            spaceComplexity: "O(n)",
        },
        tags: [
            "leetcode",
            "binary tree",
            "tree traversal",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/subtree-of-another-tree",
        dateOfUpload: "2024/08/27",
    },
    {
        id: "sort-colors",
        title: "75. Sort Colors",
        type: "problem",
        statement:
            "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.",
        examples: [
            {
                input: "nums = [2,0,2,1,1,0]",
                output: "[0,0,1,1,2,2]",
                explanation:
                    "The array is sorted such that all 0s (red) are on the left, followed by 1s (white), and 2s (blue).",
            },
            {
                input: "nums = [2,0,1]",
                output: "[0,1,2]",
                explanation:
                    "The array is sorted to place 0s (red), followed by 1s (white), and 2s (blue) in the correct order.",
            },
        ],
        steps: [
            "Initialize three pointers: left, mid, and right.",
            "While the mid pointer is less than or equal to the right pointer, perform the following checks:",
            "If nums[mid] equals 0, swap it with nums[left], increment left and mid pointers.",
            "If nums[mid] equals 1, increment the mid pointer.",
            "If nums[mid] equals 2, swap it with nums[right] and decrement the right pointer.",
            "Continue until mid is greater than right, ensuring the array is sorted with 0s, 1s, and 2s in their respective positions.",
        ],
        code: {
            javascript: `/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0,
        mid = 0,
        right = nums.length - 1;
    while (mid <= right) {
        if (nums[mid] === 0) {
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[right], nums[mid]] = [nums[mid], nums[right]];
            right--;
        }
    }
};`,
            python: `class Solution:
    def sortColors(self, nums: List[int]) -> None:
        left, mid, right = 0, 0, len(nums) - 1
        while mid <= right:
            if nums[mid] == 0:
                nums[left], nums[mid] = nums[mid], nums[left]
                left += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[right], nums[mid] = nums[mid], nums[right]
                right -= 1`,
            java: `class Solution {
    public void sortColors(int[] nums) {
        int left = 0, mid = 0, right = nums.length - 1;
        while (mid <= right) {
            if (nums[mid] == 0) {
                int temp = nums[left];
                nums[left] = nums[mid];
                nums[mid] = temp;
                left++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                int temp = nums[right];
                nums[right] = nums[mid];
                nums[mid] = temp;
                right--;
            }
        }
    }
}`,
        },
        complexity: {
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
        },
        tags: [
            "leetcode",
            "two pointers",
            "sorting",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/sort-colors",
        dateOfUpload: "2024/08/28",
    },
    {
        id: "validate-binary-search-tree",
        title: "98. Validate Binary Search Tree",
        type: "problem",
        statement:
            "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
        examples: [
            {
                input: "root = [2,1,3]",
                output: "true",
                explanation:
                    "The tree [2,1,3] is a valid binary search tree because all nodes follow the BST property.",
            },
            {
                input: "root = [5,1,4,null,null,3,6]",
                output: "false",
                explanation:
                    "The tree [5,1,4,null,null,3,6] is not a valid binary search tree because the node with value 4 is in the right subtree of 5 but is less than 5.",
            },
        ],
        steps: [
            "Create a helper function that checks if the current node's value is within the valid range.",
            "If the node is null, return true (base case).",
            "If the node's value is not within the valid range, return false.",
            "Recursively check the left and right subtrees with updated valid ranges.",
            "The left subtree's valid range is [min, node.val) and the right subtree's valid range is (node.val, max].",
            "Return true if both left and right subtrees are valid BSTs.",
        ],
        code: {
            javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function helper(root, min, max){
         if (!root){
             return true
         }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false
        }

        return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }

    return helper(root, null, null)
};`,
            python: `class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def helper(node, min_val, max_val):
            if not node:
                return True
            if (min_val is not None and node.val <= min_val) or (max_val is not None and node.val >= max_val):
                return False
            return helper(node.left, min_val, node.val) and helper(node.right, node.val, max_val)

        return helper(root, None, None)`,
            java: `class Solution {
    public boolean isValidBST(TreeNode root) {
        return helper(root, null, null);
    }

    private boolean helper(TreeNode node, Integer min, Integer max) {
        if (node == null) {
            return true;
        }
        if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
            return false;
        }
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
}`,
        },
        complexity: {
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
        },
        tags: [
            "leetcode",
            "binary search tree",
            "binary tree",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/validate-binary-search-tree",
        dateOfUpload: "2024/08/29",
    },
    {
        id: "max-consecutive-ones-iii",
        title: "1004. Max Consecutive Ones III",
        type: "problem",
        statement:
            "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
        examples: [
            {
                input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
                output: "6",
                explanation:
                    "The bolded numbers [1,1,1,0,0,1,1,1,1,1,1] were flipped from 0 to 1. The longest subarray is underlined.",
            },
            {
                input: "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
                output: "10",
                explanation:
                    "The bolded numbers [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1] were flipped from 0 to 1. The longest subarray is underlined.",
            },
        ],
        steps: [
            "Initialize two pointers l and r at the beginning of the array and set count and max to 0.",
            "Iterate with r through the array, counting the number of 0's encountered.",
            "If the count of 0's exceeds k, move the l pointer to the right until count is within the limit.",
            "Update the max length of the window that satisfies the condition.",
            "Return the max value after the loop completes.",
        ],
        code: {
            javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, r = 0, count = 0, max = 0;
    while (r < nums.length) {
        if (nums[r] === 0) count++;
        if (count > k) {
            if (nums[l] === 0) {
                count--;
            }
            l++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};`,
            python: `class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = 0
        count = 0
        max_len = 0
        for r in range(len(nums)):
            if nums[r] == 0:
                count += 1
            while count > k:
                if nums[l] == 0:
                    count -= 1
                l += 1
            max_len = max(max_len, r - l + 1)
        return max_len`,
            java: `class Solution {
    public int longestOnes(int[] nums, int k) {
        int l = 0, count = 0, max = 0;
        for (int r = 0; r < nums.length; r++) {
            if (nums[r] == 0) count++;
            while (count > k) {
                if (nums[l] == 0) count--;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}`,
        },
        complexity: {
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
        },
        tags: [
            "leetcode",
            "sliding window",
            "binary array",
            "javascript",
            "java",
            "python",
        ],
        difficulty: "medium",
        link: "/leetcode/max-consecutive-ones-iii",
        dateOfUpload: "2024/08/30",
    },
    {
        "id": "minimum-window-substring",
        "title": "76. Minimum Window Substring",
        "type": "problem",
        "statement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
        "examples": [
            {
                "input": "s = 'ADOBECODEBANC', t = 'ABC'",
                "output": "'BANC'",
                "explanation": "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t."
            },
            {
                "input": "s = 'a', t = 'a'",
                "output": "'a'",
                "explanation": "The entire string s is the minimum window."
            },
            {
                "input": "s = 'a', t = 'aa'",
                "output": "''",
                "explanation": "Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return an empty string."
            }
        ],
        "steps": [
            "Initialize two pointers start and end, and create a frequency map for string t.",
            "Iterate through string s using the end pointer, decrementing the frequency in the map for characters found in t.",
            "When the substring contains all characters from t, update the result if the current window is smaller.",
            "Move the start pointer to find smaller windows, updating the frequency map.",
            "Return the smallest valid window substring, or an empty string if none exists."
        ],
        "code": {
            "javascript": `/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let start = 0, end = 0, mp = new Map(), counter = t.length, head = 0, len = Number.MAX_SAFE_INTEGER;
    for (const c of t) {
        if (mp.has(c)) {
            mp.set(c, mp.get(c) + 1);
        } else {
            mp.set(c, 1);
        }
    }
    while (end < s.length) {
        let endChar = s[end++];
        if (mp.has(endChar)) {
            if (mp.get(endChar) > 0) counter--;
            mp.set(endChar, mp.get(endChar) - 1);
        }
        while (counter === 0) {
            if (len > end - start) {
                len = end - start;
                head = start;
            }
            let startChar = s[start++];
            if (mp.has(startChar)) {
                mp.set(startChar, mp.get(startChar) + 1);
                if (mp.get(startChar) > 0) counter++;
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : s.substring(head, head + len);
};`,
            "python": `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        t_count = Counter(t)
        s_count = {}
        start = 0
        min_len = float('inf')
        min_start = 0
        required = len(t_count)
        formed = 0

        l = 0
        for r, char in enumerate(s):
            s_count[char] = s_count.get(char, 0) + 1
            if char in t_count and s_count[char] == t_count[char]:
                formed += 1

            while l <= r and formed == required:
                if r - l + 1 < min_len:
                    min_len = r - l + 1
                    min_start = l
                s_count[s[l]] -= 1
                if s[l] in t_count and s_count[s[l]] < t_count[s[l]]:
                    formed -= 1
                l += 1

        return s[min_start:min_start + min_len] if min_len != float('inf') else ""`,
            "java": `class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null || s.length() < t.length()) return "";
        Map<Character, Integer> tMap = new HashMap<>();
        for (char c : t.toCharArray()) {
            tMap.put(c, tMap.getOrDefault(c, 0) + 1);
        }

        int start = 0, end = 0, minStart = 0, minLength = Integer.MAX_VALUE, counter = t.length();
        while (end < s.length()) {
            char endChar = s.charAt(end++);
            if (tMap.containsKey(endChar)) {
                if (tMap.get(endChar) > 0) counter--;
                tMap.put(endChar, tMap.get(endChar) - 1);
            }

            while (counter == 0) {
                if (end - start < minLength) {
                    minLength = end - start;
                    minStart = start;
                }
                char startChar = s.charAt(start++);
                if (tMap.containsKey(startChar)) {
                    tMap.put(startChar, tMap.get(startChar) + 1);
                    if (tMap.get(startChar) > 0) counter++;
                }
            }
        }

        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);
    }
}`
        },
        "complexity": {
            "timeComplexity": "O(m + n)",
            "spaceComplexity": "O(m + n)"
        },
        "tags": ["leetcode", "sliding window", "hashmap", "javascript", "python", "java"],
        "difficulty": "hard",
        "link": "/leetcode/minimum-window-substring",
        "dateOfUpload": "2024/09/05"
    },
    {
        "id": "palindromic-substrings",
        "title": "647. Palindromic Substrings",
        "type": "problem",
        "statement": "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.",
        "examples": [
            {
                "input": "s = \"abc\"",
                "output": "3",
                "explanation": "Three palindromic strings: \"a\", \"b\", \"c\"."
            },
            {
                "input": "s = \"aaa\"",
                "output": "6",
                "explanation": "Six palindromic strings: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\"."
            }
        ],
        "steps": [
            "Initialize a counter to keep track of palindromic substrings.",
            "Create a helper function 'expandFromCenter' that expands around each character and counts palindromes.",
            "For each character in the string, call 'expandFromCenter' twice: once for odd-length palindromes (centered on a single character) and once for even-length palindromes (centered between two characters).",
            "Add the result of the helper function to the counter for each iteration.",
            "Return the total count of palindromic substrings."
        ],
        "code": {
            "javascript": `/**
     * @param {string} s
     * @return {number}
     */
    var countSubstrings = function (s) {
        let counter = 0;

        function expandFromCenter(str, left, right) {
            let count = 0;
            while (left >= 0 && right < str.length && str[left] === str[right]) {
                count++;
                left--;
                right++;
            }
            return count;
        }

        for (let i = 0; i < s.length; i++) {
            counter += expandFromCenter(s, i, i);       // Odd-length palindromes
            counter += expandFromCenter(s, i, i + 1);   // Even-length palindromes
        }

        return counter;
    };`,
            "python": `class Solution:
        def countSubstrings(self, s: str) -> int:
            def expandFromCenter(left, right):
                count = 0
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    count += 1
                    left -= 1
                    right += 1
                return count

            result = 0
            for i in range(len(s)):
                result += expandFromCenter(i, i)     # Odd-length palindromes
                result += expandFromCenter(i, i + 1) # Even-length palindromes
            return result;`,
            "java": `class Solution {
        public int countSubstrings(String s) {
            int count = 0;

            for (int i = 0; i < s.length(); i++) {
                count += expandFromCenter(s, i, i);     // Odd-length palindromes
                count += expandFromCenter(s, i, i + 1); // Even-length palindromes
            }

            return count;
        }

        private int expandFromCenter(String s, int left, int right) {
            int count = 0;
            while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
                count++;
                left--;
                right++;
            }
            return count;
        }
    }`
        },
        "complexity": {
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        "tags": ["palindrome", "expand-center", "substring", "dynamic-programming"],
        "difficulty": "medium",
        "link": "/leetcode/palindromic-substrings",
        "dateOfUpload": "2024/09/05"
    },
    {
        "id": "daily-temperatures",
        "title": "739. Daily Temperatures",
        "type": "problem",
        "statement": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
        "examples": [
            {
                "input": "temperatures = [73,74,75,71,69,72,76,73]",
                "output": "[1,1,4,2,1,1,0,0]",
                "explanation": "Starting from day 0, after 1 day the temperature will rise to 74. For day 3, after 2 days it will rise to 72. For day 6, there is no future warmer day, so answer is 0."
            },
            {
                "input": "temperatures = [30,40,50,60]",
                "output": "[1,1,1,0]",
                "explanation": "For each day, the temperature rises the next day, except for the last day which has no warmer day in the future."
            },
            {
                "input": "temperatures = [30,60,90]",
                "output": "[1,1,0]",
                "explanation": "The temperature rises after 1 day for each of the first two days, but there is no warmer day after the third."
            }
        ],
        "steps": [
            "Create an array 'res' initialized with 0 for each day.",
            "Create a stack 'st' to keep track of the index of days with unsolved temperature comparisons.",
            "Iterate through the array from the last day to the first.",
            "For each day, compare its temperature with the temperatures of the days in the stack.",
            "Pop days from the stack while their temperatures are less than or equal to the current day.",
            "If the stack is not empty, calculate the difference between the current day and the day at the top of the stack.",
            "Push the current day's index onto the stack.",
            "At the end, return the 'res' array."
        ],
        "code": {
            "javascript": `/**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    var dailyTemperatures = function (temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let st = [];

        for (let i = temperatures.length-1; i >=0; i--) {
            const temp = temperatures[i];
            while (st.length > 0 && temp >= temperatures[st[st.length - 1]]) {
                st.pop();
            }
            if(st.length>0) res[i] = st[st.length-1]-i;
            st.push(i);
        }
        return res;
    };`,
            "python": `class Solution:
        def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
            res = [0] * len(temperatures)
            st = []

            for i in range(len(temperatures) - 1, -1, -1):
                while st and temperatures[i] >= temperatures[st[-1]]:
                    st.pop()
                if st:
                    res[i] = st[-1] - i
                st.append(i)
            return res;`,
            "java": `class Solution {
        public int[] dailyTemperatures(int[] temperatures) {
            int[] res = new int[temperatures.length];
            Stack<Integer> st = new Stack<>();

            for (int i = temperatures.length - 1; i >= 0; i--) {
                while (!st.isEmpty() && temperatures[i] >= temperatures[st.peek()]) {
                    st.pop();
                }
                if (!st.isEmpty()) {
                    res[i] = st.peek() - i;
                }
                st.push(i);
            }
            return res;
        }
    }`
        },
        "complexity": {
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        "tags": ["monotonic-stack", "array", "stack"],
        "difficulty": "medium",
        "link": "/leetcode/daily-temperatures",
        "dateOfUpload": "2024/09/06"
    },
    {
        "id": "number-of-visible-people-in-a-queue",
        "title": "1944. Number of Visible People in a Queue",
        "type": "problem",
        "statement": "There are n people standing in a queue, and they are numbered from 0 to n - 1 in left to right order. You are given an array heights of distinct integers where heights[i] represents the height of the ith person. A person can see another person to their right in the queue if everybody in between is shorter than both of them. More formally, the ith person can see the jth person if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]). Return an array answer of length n where answer[i] is the number of people the ith person can see to their right in the queue.",
        "examples": [
            {
                "input": "heights = [10,6,8,5,11,9]",
                "output": "[3,1,2,1,1,0]",
                "explanation": "Person 0 can see person 1, 2, and 4. Person 1 can see person 2. Person 2 can see person 3 and 4. Person 3 can see person 4. Person 4 can see person 5. Person 5 can see no one since nobody is to the right of them."
            },
            {
                "input": "heights = [5,1,2,3,10]",
                "output": "[4,1,1,1,0]",
                "explanation": "Person 0 can see persons 1, 2, 3, and 4. The rest can see fewer people."
            }
        ],
        "steps": [
            "Initialize an array 'res' of the same length as heights, filled with 0s, which will store the result.",
            "Create an empty stack 'st' to keep track of indexes of the people we are processing.",
            "Iterate through the array of heights from right to left.",
            "For each person at index 'i', initialize a counter to track how many people they can see.",
            "While the stack is not empty and the current person is taller than or equal to the person on top of the stack, pop from the stack and increment the counter.",
            "If the stack is not empty after the loop, the person can also see the person at the top of the stack, so increment the counter by 1.",
            "Store the result in the 'res' array.",
            "Push the current person’s index onto the stack.",
            "Return the 'res' array."
        ],
        "code": {
            "javascript": `/**
     * @param {number[]} heights
     * @return {number[]}
     */
    var canSeePersonsCount = function (heights) {
        let res = new Array(heights.length).fill(0);
        let st = [];

        for (let i = heights.length - 1; i >= 0; i--) {
            let count = 0;
            const h = heights[i];
            while (st.length > 0 && h >= heights[st[st.length - 1]]) {
                st.pop();
                count++;
            }
            if (st.length > 0) res[i] = count + 1;
            else res[i] = count;
            st.push(i);
        }
        return res;
    };`,
            "python": `class Solution:
        def canSeePersonsCount(self, heights: List[int]) -> List[int]:
            res = [0] * len(heights)
            st = []

            for i in range(len(heights) - 1, -1, -1):
                count = 0
                while st and heights[i] >= heights[st[-1]]:
                    st.pop()
                    count += 1
                res[i] = count + (1 if st else 0)
                st.append(i)
            return res;`,
            "java": `class Solution {
        public int[] canSeePersonsCount(int[] heights) {
            int[] res = new int[heights.length];
            Stack<Integer> st = new Stack<>();

            for (int i = heights.length - 1; i >= 0; i--) {
                int count = 0;
                while (!st.isEmpty() && heights[i] >= heights[st.peek()]) {
                    st.pop();
                    count++;
                }
                res[i] = count + (st.isEmpty() ? 0 : 1);
                st.push(i);
            }
            return res;
        }
    }`
        },
        "complexity": {
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        "tags": ["monotonic-stack", "queue", "array", "stack"],
        "difficulty": "hard",
        "link": "/leetcode/number-of-visible-people-in-a-queue",
        "dateOfUpload": "2024/09/06"
    },
    {
        "id": "longest-palindromic-substring",
        "title": "5. Longest Palindromic Substring",
        "type": "problem",
        "statement": "Given a string s, return the longest palindromic substring in s. A palindrome is a string that reads the same forward and backward. You need to find the longest contiguous palindrome within the given string.",
        "examples": [
            {
                "input": "s = 'babad'",
                "output": "'bab'",
                "explanation": "'aba' is also a valid answer."
            },
            {
                "input": "s = 'cbbd'",
                "output": "'bb'",
                "explanation": "'bb' is the longest palindromic substring."
            }
        ],
        "steps": [
            "Define a helper function expandFromCenter to find palindromic substrings centered at indices left and right.",
            "Iterate over the string, checking for palindromic substrings for both odd and even lengths by calling the helper function twice.",
            "For each index, update the longest palindromic substring found so far.",
            "Return the longest palindromic substring after completing the iterations."
        ],
        "code": {
            "javascript": `/**
       * @param {string} s
       * @return {string}
       */
      var longestPalindrome = function (s) {
          let maxStr = "";

          function expandFromCenter(str, left, right) {
              while (left >= 0 && right < str.length && str[left] === str[right]) {
                  left--;
                  right++;
              }
              return str.substring(left + 1, right);
          }

          for (let i = 0; i < s.length; i++) {
              let odd = expandFromCenter(s, i, i); // Odd-length palindromes
              let even = expandFromCenter(s, i, i + 1); // Even-length palindromes
              if (maxStr.length < odd.length) maxStr = odd;
              if (maxStr.length < even.length) maxStr = even;
          }
          return maxStr;
      };`,
            "python": `class Solution:
          def longestPalindrome(self, s: str) -> str:
              def expand_from_center(left: int, right: int) -> str:
                  while left >= 0 and right < len(s) and s[left] == s[right]:
                      left -= 1
                      right += 1
                  return s[left + 1:right]

              max_str = ""
              for i in range(len(s)):
                  odd = expand_from_center(i, i)
                  even = expand_from_center(i, i + 1)
                  max_str = max(max_str, odd, even, key=len)
              return max_str`,
            "java": `class Solution {
          public String longestPalindrome(String s) {
              String maxStr = "";

              for (int i = 0; i < s.length(); i++) {
                  String odd = expandFromCenter(s, i, i);  // Odd-length palindrome
                  String even = expandFromCenter(s, i, i + 1);  // Even-length palindrome

                  if (maxStr.length() < odd.length()) maxStr = odd;
                  if (maxStr.length() < even.length()) maxStr = even;
              }

              return maxStr;
          }

          private String expandFromCenter(String s, int left, int right) {
              while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
                  left--;
                  right++;
              }
              return s.substring(left + 1, right);
          }
      }`
        },
        "complexity": {
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        "tags": ["substring", "palindrome", "dynamic-programming"],
        "difficulty": "medium",
        "link": "/leetcode/longest-palindromic-substring",
        "dateOfUpload": "2024/09/07"
    },
    {
        "id": "first-missing-positive",
        "title": "41. First Missing Positive",
        "type": "problem",
        "statement": "Given an unsorted integer array nums, return the smallest positive integer that is not present in nums. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
        "examples": [
            {
                "input": "nums = [1, 2, 0]",
                "output": "3",
                "explanation": "The numbers in the range [1, 2] are all in the array."
            },
            {
                "input": "nums = [3, 4, -1, 1]",
                "output": "2",
                "explanation": "1 is in the array but 2 is missing."
            },
            {
                "input": "nums = [7, 8, 9, 11, 12]",
                "output": "1",
                "explanation": "The smallest positive integer 1 is missing."
            }
        ],
        "steps": [
            "Filter the array to remove negative numbers and zeros, keeping only positive integers.",
            "Iterate through the array and for each number, mark the index corresponding to that number as negative (if it exists in the range).",
            "After marking, iterate through the array again. The first positive number's index + 1 is the missing positive integer.",
            "If all numbers are marked, return the length of the array + 1."
        ],
        "code": {
            "javascript": `/**
     * @param {number[]} nums
     * @return {number}
     */
    var firstMissingPositive = function (nums) {
        nums = nums.filter(n => n > 0);
        for (const n of nums) {
            let idx = Math.abs(n) - 1;
            if (idx < nums.length && nums[idx] > 0) {
                nums[idx] *= -1;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) return i + 1;
        }
        return nums.length + 1;
    };`,
            "python": `class Solution:
        def firstMissingPositive(self, nums: List[int]) -> int:
            nums = [n for n in nums if n > 0]
            for n in nums:
                idx = abs(n) - 1
                if idx < len(nums) and nums[idx] > 0:
                    nums[idx] *= -1
            for i in range(len(nums)):
                if nums[i] > 0:
                    return i + 1
            return len(nums) + 1;`,
            "java": `class Solution {
        public int firstMissingPositive(int[] nums) {
            nums = Arrays.stream(nums).filter(n -> n > 0).toArray();
            for (int n : nums) {
                int idx = Math.abs(n) - 1;
                if (idx < nums.length && nums[idx] > 0) {
                    nums[idx] *= -1;
                }
            }
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] > 0) return i + 1;
            }
            return nums.length + 1;
        }
    }`
        },
        "complexity": {
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        "tags": ["array", "sorting", "hashing", "two-pointers"],
        "difficulty": "hard",
        "link": "/leetcode/first-missing-positive",
        "dateOfUpload": "2024/09/07"
    },
];

export default problems;
