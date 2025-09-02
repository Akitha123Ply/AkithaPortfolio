import React, { useState, useEffect } from 'react';
import { FiPlay, FiRotateCcw, FiAward, FiCheck, FiX, FiCode, FiZap, FiTarget, FiCpu, FiDatabase, FiMonitor, FiHelpCircle } from 'react-icons/fi';
import _ from 'lodash';

export const CodingChallenges = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [solveTime, setSolveTime] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "Two Sum Problem",
      difficulty: "Easy",
      category: "Arrays",
      icon: FiDatabase,
      color: "cyan",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9",
      starterCode: `function twoSum(nums, target) {
  // Your code here
  // Return an array of indices [i, j] where nums[i] + nums[j] = target
  
}`,
      hint: "Try using a hash map to store numbers you've seen and their indices. For each number, check if (target - current number) exists in the hash map.",
      testCases: [
        { input: [[2,7,11,15], 9], expected: [0,1] },
        { input: [[3,2,4], 6], expected: [1,2] },
        { input: [[3,3], 6], expected: [0,1] },
        { input: [[1,2,3,4,5], 8], expected: [2,4] }
      ]
    },
    {
      id: 2,
      title: "Palindrome Checker",
      difficulty: "Easy",
      category: "Strings",
      icon: FiCode,
      color: "blue",
      description: "Write a function that checks if a given string is a palindrome. Ignore case, spaces, and punctuation.",
      example: "Input: 'A man, a plan, a canal: Panama'\nOutput: true\nExplanation: After removing non-alphanumeric characters and converting to lowercase: 'amanaplanacanalpanama'",
      starterCode: `function isPalindrome(s) {
  // Your code here
  // Return true if s is a palindrome, false otherwise
  
}`,
      hint: "Clean the string first by removing non-alphanumeric characters and converting to lowercase. Then compare the string with its reverse.",
      testCases: [
        { input: ["A man, a plan, a canal: Panama"], expected: true },
        { input: ["race a car"], expected: false },
        { input: [""], expected: true },
        { input: ["Madam"], expected: true }
      ]
    },
    {
      id: 3,
      title: "Fibonacci Generator",
      difficulty: "Medium",
      category: "Dynamic Programming",
      icon: FiCpu,
      color: "green",
      description: "Return the nth number in the Fibonacci sequence. The sequence starts with 0, 1, and each subsequent number is the sum of the two preceding ones.",
      example: "Input: n = 6\nOutput: 8\nSequence: [0, 1, 1, 2, 3, 5, 8]",
      starterCode: `function fibonacci(n) {
  // Your code here
  // Return the nth Fibonacci number
  
}`,
      hint: "Consider using dynamic programming to avoid redundant calculations. You can solve this iteratively with O(n) time and O(1) space.",
      testCases: [
        { input: [0], expected: 0 },
        { input: [1], expected: 1 },
        { input: [6], expected: 8 },
        { input: [10], expected: 55 }
      ]
    },
    {
      id: 4,
      title: "Binary Tree Max Depth",
      difficulty: "Medium",
      category: "Trees",
      icon: FiTarget,
      color: "purple",
      description: "Find the maximum depth of a binary tree. The maximum depth is the number of nodes along the longest path from root to leaf.",
      example: "Input: root = [3,9,20,null,null,15,7]\nOutput: 3\nExplanation: The longest path is 3->20->15 or 3->20->7",
      starterCode: `// Tree node structure: { val: number, left: TreeNode|null, right: TreeNode|null }
function maxDepth(root) {
  // Your code here
  // Return the maximum depth of the binary tree
  
}`,
      hint: "Use recursion! The depth of a tree is 1 + max(depth of left subtree, depth of right subtree). Base case: if root is null, return 0.",
      testCases: [
        { 
          input: [{ val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }], 
          expected: 3 
        },
        { input: [null], expected: 0 },
        { input: [{ val: 1, left: null, right: { val: 2, left: null, right: null } }], expected: 2 }
      ]
    },
    {
      id: 5,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      icon: FiMonitor,
      color: "orange",
      description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      example: "Input: '({[}])'\nOutput: false\nInput: '({[]})'\nOutput: true",
      starterCode: `function isValid(s) {
  // Your code here
  // Return true if parentheses are valid, false otherwise
  
}`,
      hint: "Use a stack! Push opening brackets onto the stack, and when you see a closing bracket, check if it matches the most recent opening bracket.",
      testCases: [
        { input: ["()"], expected: true },
        { input: ["()[]{}"], expected: true },
        { input: ["(]"], expected: false },
        { input: ["({[]})"], expected: true }
      ]
    },
    {
      id: 6,
      title: "Merge Sorted Arrays",
      difficulty: "Hard",
      category: "Two Pointers",
      icon: FiZap,
      color: "red",
      description: "Merge two sorted arrays nums1 and nums2 into a single sorted array. Modify nums1 in-place.",
      example: "Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]",
      starterCode: `function merge(nums1, m, nums2, n) {
  // Your code here
  // Merge nums2 into nums1 in-place
  // nums1 has length m + n, with the first m elements being the actual values
  
}`,
      hint: "Start from the end! Use three pointers: one for the end of nums1's actual elements, one for nums2, and one for the current position to fill.",
      testCases: [
        { 
          input: [[1,2,3,0,0,0], 3, [2,5,6], 3], 
          expected: [1,2,2,3,5,6],
          setup: (nums1, m, nums2, n) => { 
            // Create a merge function for testing
            const mergeFn = function(nums1, m, nums2, n) {
              let i = m - 1, j = n - 1, k = m + n - 1;
              while (j >= 0) {
                if (i >= 0 && nums1[i] > nums2[j]) {
                  nums1[k--] = nums1[i--];
                } else {
                  nums1[k--] = nums2[j--];
                }
              }
            };
            mergeFn(nums1, m, nums2, n); 
            return nums1; 
          }
        }
      ]
    }
  ];

  const currentChallengeData = challenges[currentChallenge];

  useEffect(() => {
    setUserCode(currentChallengeData.starterCode);
    setTestResults([]);
    setShowHint(false);
    setSolveTime(null);
    setStartTime(Date.now());
  }, [currentChallenge, currentChallengeData.starterCode]);

  const runTests = () => {
    setIsRunning(true);
    
    setTimeout(() => {
      try {
        const userFunction = new Function('_', 'return ' + userCode)(_);
        
        const results = [];
        let allPassed = true;

        currentChallengeData.testCases.forEach((testCase, index) => {
          try {
            let result;
            if (testCase.setup) {
              // Special handling for in-place modifications
              const testInput = JSON.parse(JSON.stringify(testCase.input));
              result = testCase.setup(...testInput);
            } else {
              result = userFunction(...testCase.input);
            }
            
            const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
            
            results.push({
              index: index + 1,
              passed,
              input: testCase.input,
              expected: testCase.expected,
              actual: result
            });
            
            if (!passed) allPassed = false;
          } catch (error) {
            results.push({
              index: index + 1,
              passed: false,
              input: testCase.input,
              expected: testCase.expected,
              actual: `Error: ${error.message}`
            });
            allPassed = false;
          }
        });

        setTestResults(results);
        
        if (allPassed && !completedChallenges.has(currentChallengeData.id)) {
          setCompletedChallenges(new Set([...completedChallenges, currentChallengeData.id]));
          setSolveTime(Math.round((Date.now() - startTime) / 1000));
        }
      } catch (error) {
        setTestResults([{
          index: 'Syntax',
          passed: false,
          input: 'Code compilation',
          expected: 'Valid JavaScript',
          actual: error.message
        }]);
      }
      
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    setUserCode(currentChallengeData.starterCode);
    setTestResults([]);
    setShowHint(false);
    setSolveTime(null);
    setStartTime(Date.now());
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-400 to-green-500';
      case 'Medium': return 'from-yellow-400 to-orange-500';
      case 'Hard': return 'from-red-400 to-red-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const allTestsPassed = testResults.length > 0 && testResults.every(result => result.passed);

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CODING <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">CHALLENGES</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 font-mono">
            Test your skills with interactive programming puzzles
          </p>
        </div>

        {/* Challenge Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <button
                key={challenge.id}
                onClick={() => setCurrentChallenge(index)}
                className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                  currentChallenge === index 
                    ? 'bg-gray-800/50 backdrop-blur-sm border-cyan-400/50 text-white' 
                    : 'bg-gray-800/30 backdrop-blur-sm border-gray-700/50 text-gray-300 hover:border-cyan-400/30 hover:text-white'
                }`}
              >
                {/* Glowing effect for active challenge */}
                {currentChallenge === index && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl blur-sm"></div>
                )}
                
                <div className="relative flex items-center gap-2">
                  <IconComponent className={`w-4 h-4 ${currentChallenge === index ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'} transition-colors`} />
                  
                  {completedChallenges.has(challenge.id) && (
                    <FiCheck className="w-4 h-4 text-green-400" />
                  )}
                  
                  <span className="text-sm font-mono hidden sm:inline">
                    {challenge.title.split(' ')[0]}
                  </span>
                  <span className="text-sm font-mono sm:hidden">
                    {challenge.id}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Description */}
          <div className="space-y-6">
            {/* Challenge Header */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <currentChallengeData.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentChallengeData.title}</h3>
                    <p className="text-sm text-gray-400 font-mono">{currentChallengeData.category}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${getDifficultyColor(currentChallengeData.difficulty)} text-white`}>
                  {currentChallengeData.difficulty}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{currentChallengeData.description}</p>
            </div>

            {/* Example */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <FiTarget className="w-4 h-4 text-cyan-400" />
                Example
              </h4>
              <pre className="text-sm text-gray-300 font-mono bg-gray-900/50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">{currentChallengeData.example}</pre>
            </div>

            {/* Hint Section */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-yellow-400 font-semibold mb-3 hover:text-yellow-300 transition-colors"
              >
                <FiHelpCircle className="w-4 h-4" />
                Need a hint?
              </button>
              {showHint && (
                <p className="text-gray-300 text-sm leading-relaxed bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/20">
                  {currentChallengeData.hint}
                </p>
              )}
            </div>

            {/* Test Results */}
            {testResults.length > 0 && (
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <FiTarget className="w-4 h-4 text-cyan-400" />
                  Test Results
                </h4>
                <div className="space-y-3">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${
                        result.passed 
                          ? 'bg-green-400/10 border-green-400/30 text-green-300' 
                          : 'bg-red-400/10 border-red-400/30 text-red-300'
                      }`}
                    >
                      {result.passed ? (
                        <FiCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      ) : (
                        <FiX className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm">
                          Test {result.index}: {result.passed ? 'PASSED' : 'FAILED'}
                        </div>
                        {!result.passed && (
                          <div className="text-xs mt-2 space-y-1 font-mono">
                            <div>Expected: {JSON.stringify(result.expected)}</div>
                            <div>Got: {JSON.stringify(result.actual)}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {allTestsPassed && solveTime && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-lg border border-green-400/30 flex items-center gap-3">
                    <FiAward className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div className="text-green-300 font-semibold">
                      Challenge completed in {solveTime} seconds! 🎉
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <FiCode className="w-4 h-4 text-cyan-400" />
                  Your Solution
                </h4>
                <button
                  onClick={resetCode}
                  className="px-3 py-2 text-sm bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <FiRotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
              
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-80 p-4 bg-gray-900/50 border border-gray-700/50 rounded-lg text-gray-300 font-mono text-sm resize-none focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                placeholder="Write your solution here..."
                spellCheck={false}
              />
              
              <button
                onClick={runTests}
                disabled={isRunning}
                className={`w-full mt-4 py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                  isRunning
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : allTestsPassed
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                }`}
              >
                {isRunning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  <>
                    <FiPlay className="w-5 h-5" />
                    Run Tests
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
            <FiAward className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">
              Progress: {completedChallenges.size}/{challenges.length} challenges completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingChallenges;