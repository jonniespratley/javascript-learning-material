# 1. Computer Science Concepts
 
The following concepts should be understood in JavaScript.

<!-- TOC -->

- [1. Computer Science Concepts](#1-computer-science-concepts)
  - [1.1. Data Structures](#11-data-structures)
  - [1.2. Big-O Analysis](#12-big-o-analysis)
    - [1.2.1. How Big-O Analysis Works](#121-how-big-o-analysis-works)
    - [1.2.2. Which is Better?](#122-which-is-better)
  - [1.3. Sorting](#13-sorting)
    - [1.3.1. Binary search](#131-binary-search)
    - [1.3.2. Bubble sort](#132-bubble-sort)
    - [1.3.3. Insertion Sort](#133-insertion-sort)
    - [1.3.4. Selection Sort](#134-selection-sort)
    - [1.3.5. Quick Sort](#135-quick-sort)
    - [1.3.6. Merge Sort](#136-merge-sort)

<!-- /TOC -->

## 1.1. Data Structures

* Linked lists
* Hashtables
* Stacks and queues
* Trees (binary trees and heaps)
* Graphs



## 1.2. Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.

### 1.2.1. How Big-O Analysis Works

In Big-O analysis, input size is assumed to be an unknown value n. In this example, n simply represents the number of elements in an array. In other problems, n may represent the number of nodes in a linked list, the number of bits in a data type, or the number of entries in a hash table. After determining what n means in terms of the input, you must determine how many operations are performed for each of the n input items. “Operation” is a fuzzy word because algorithms differ greatly.

Commonly, an operation is something that a real computer can do in a constant amount of time, like adding an input value to a constant, creating a new input item, or deleting an input value. In Big-O analysis, the times for these operations are all considered equivalent.

In both CompareToMax and CompareToAll, the operation of greatest interest is comparing an array value to another value.

In CompareToMax, each array element was compared once to a maximum value. Thus, the n input items are each examined once, resulting in n examinations. This is considered O(n), usually referred to as linear time: The time required to run the algorithm increases linearly with the number of input items.
How to Do Big-O Analysis

The general procedure for Big-O runtime analysis is as follows:

1. Figure out what the input is and what n represents.
2. Express the number of operations the algorithm performs in terms of n.
3. Eliminate all but the highest-order terms.
4. Remove all constant factors.

For the algorithms you’ll encounter in interviews, Big-O analysis should be straightforward as long as you correctly identify the operations that are dependent on the input size.


### 1.2.2. Which is Better?

The performance of most algorithms depends on n, the size of the input. The algorithms can be classified as follows from best-to-worse performance:

* O(log n) — An algorithm is said to be logarithmic if its running time increases logarithmically in proportion to the input size.
* O(n) — A linear algorithm’s running time increases in direct proportion to the input size.
* O(n log n) — A superlinear algorithm is midway between a linear algorithm and a polynomial algorithm.
* O(nc) — A polynomial algorithm grows quickly based on the size of the input.
* O(cn) — An exponential algorithm grows even faster than a polynomial algorithm.
* O(n!) — A factorial algorithm grows the fastest and becomes quickly unusable for even small values of n.

The run times of different orders of algorithms separate rapidly as n gets larger. Consider the run time for each of these algorithm classes with n = 10:

* log 10 = 1
* 10 = 10
* 10 log 10 = 10
* 102 = 100
* 210= 1,024
* 10! = 3,628,800

Now double it to n = 20:

* log 20 = 1.30
* 20 = 20
* 20 log 20= 26.02
* 202 = 400
* 220 = 1,048,576
* 20! = 2.43×1018


## 1.3. Sorting
This is about sorting, here is what you should ask yourself:

* What do we know about the data? Is the data already sorted or mostly sorted? How large are the data sets likely to be? Can there be duplicate key values?
* What are the requirements for the sort? Do you want to optimize for best-case, worst-case, or average-case performance? Does the sort need to be stable?
* What do we know about the system? Is the largest data set to be sorted smaller than, the same size as, or larger than available memory?


### 1.3.1. Binary search

### 1.3.2. Bubble sort

### 1.3.3. Insertion Sort

Insertion sort is another simple sorting algorithm. It builds a sorted array (or list) one element at a time by comparing each new element to the already-sorted elements and inserting the new element into the correct location, similar to the way you sort a hand of playing cards.

### 1.3.4. Selection Sort

Selection sort is one of the simplest sorting algorithms. It starts with the first element in the array (or list) and scans through the array to find the element with the smallest key, which it swaps with the first element. The process is then repeated with each subsequent element until the last element is reached.

### 1.3.5. Quick Sort

Quicksort is a divide-and-conquer algorithm that involves choosing a pivot value from a data set and splitting the set into two subsets: a set that contains all values less than the pivot and a set that contains all values greater than or equal to the pivot. The pivot/split process is recursively applied to each subset until there are no more subsets to split. The results are combined to form the final sorted set.

### 1.3.6. Merge Sort

Merge sort is another divide-and-conquer algorithm that works by splitting a data set into two or more subsets, sorting the subsets, and then merging them together into the final sorted set.
