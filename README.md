# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


T(n) = 3T(n/3) + O(n)
3T(n/3) represents the time complexity of recursing through the three thirds of the array each of roughly size (n/3).
O(n) represent the time complexity of summing each of the elements of the subarrays.

#### Solving by substitution:
T(n) = 3T(n/3) + n
= 3(3T(n/9) + n) + n
= 9T(n/9) + 2n
= 27T(n/27) + 3n
= 3^(i) * T(n/3^(i)) + in

#### Base Case: n/3^(i) = 1 => n = 3^(i) => i = log_3(n)
$3^{log_3(n)}T(1) + nlog_3(n) = nT(1) + nlog_3(n) = n + nlog_3(n) \in \Theta  nlog_3(n)$

### Plagiarism Note:
I used the slides on mergesort as a reference to get started for the code, and I used [this stack overflow](https://stackoverflow.com/questions/30201391/how-to-write-a-recurrence-relation-for-a-given-piece-of-code) and [this geeksforgeeks](https://www.geeksforgeeks.org/recurrence-relations-a-complete-guide/) article to work out the recurrence relation. Other than that I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
