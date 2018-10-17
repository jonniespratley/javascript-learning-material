# 1. Computer Science Concepts

The following concepts should be understood in JavaScript.

<!-- TOC -->

- [1. Computer Science Concepts](#1-computer-science-concepts)
- [2. Data Structures](#2-data-structures)
  - [2.1. Hashtables (Map)](#21-hashtables-map)
  - [2.2. Queues & Stacks](#22-queues--stacks)
    - [2.2.1. Queue](#221-queue)
    - [2.2.2. Stack](#222-stack)
- [3. Big-O Analysis](#3-big-o-analysis)
    - [3.0.3. How Big-O Analysis Works](#303-how-big-o-analysis-works)
    - [3.0.4. Which is Better?](#304-which-is-better)
    - [3.0.5. Big O(1)](#305-big-o1)
    - [3.0.6. Big O(N)](#306-big-on)
    - [3.0.7. Big O(N2)](#307-big-on2)
    - [3.0.8. Big O Performance Comparisons](#308-big-o-performance-comparisons)
    - [3.0.9. Data Structure Operations Complexity](#309-data-structure-operations-complexity)
    - [3.0.10. Array Sorting Algorithms Complexity](#3010-array-sorting-algorithms-complexity)
- [4. Searching](#4-searching)
  - [4.1. Binary search](#41-binary-search)
- [5. Sorting](#5-sorting)
  - [5.1. Bubble sort](#51-bubble-sort)
  - [5.2. Insertion Sort](#52-insertion-sort)
  - [5.3. Selection Sort](#53-selection-sort)
  - [5.4. Quick Sort](#54-quick-sort)
  - [5.5. Merge Sort](#55-merge-sort)

<!-- /TOC -->




# 3. Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.

### 3.0.3. How Big-O Analysis Works

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

### 3.0.4. Which is Better?

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

- Notation      - Name
- O(1)          - Constant
- O(log(n))     - Logarithmic
- O((log(n))c)  - Poly-logarithmic
- O(n)          - Linear
- O(n2)         - Quadratic
- O(nc)         - Polynomial
- O(cn)         - Exponential

### 3.0.5. Big O(1)
Consider the following function:

```js
function increment(num){
  return ++num;
}
console.log(increment(2));
```

### 3.0.6. Big O(N)
Now, let's use the sequential search algorithm:

<!-- js-console -->
```js
function sequentialSearch(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) { //{1}
            return i;
        }
    }
    return -1;
}

console.log(sequentialSearch([9, 5, 2, 4, 3, 7, 6], 4));
```

### 3.0.7. Big O(N2)
For the O(n2) example, let's use the bubble sort algorithm:

<!-- js-console -->
```js
function swap(array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) { //{1}
        for (let j = 0; j < length - 1; j++) { //{2}
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log(bubbleSort([9, 5, 2, 4, 3, 7, 6]));
```




### 3.0.8. Big O Performance Comparisons
Order of growth of algorithms specified in Big O notation.

![Big O graphs](https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/big-o-graph.png)

> Source: [Big O Cheat Sheet](http://bigocheatsheet.com/)

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### 3.0.9. Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | 1         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### 3.0.10. Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

# 4. Searching

## 4.1. Binary search
In computer science, binary search, also known as half-interval
search, logarithmic search, or binary chop, is a search algorithm
that finds the position of a target value within a sorted
array. Binary search compares the target value to the middle
element of the array; if they are unequal, the half in which
the target cannot lie is eliminated and the search continues
on the remaining half until it is successful. If the search
ends with the remaining half being empty, the target is not
in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)



**Time Complexity**: `O(log(n))` - since we split search area by two for every
next iteration.

<!-- js-console -->
```js
function binarySearch(arr, val) {
    let lower_bound = 0;
    let upper_bound = arr.length - 1;

    while (lower_bound <= upper_bound) {
        let midpoint = Math.floor(upper_bound + lower_bound / 2);
        let value_at_midpoint = arr[midpoint];

        console.log(midpoint, value_at_midpoint);

        if (val < value_at_midpoint) {
            upper_bound = midpoint - 1;
        } else if (val > value_at_midpoint) {
            lower_bound = midpoint + 1;
        } else if (val == value_at_midpoint) {
            return midpoint;
        }
    }
    return null;
}

console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 21));
console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 1));
```



# 5. Sorting
This is about sorting, here is what you should ask yourself:

* What do we know about the data? Is the data already sorted or mostly sorted? How large are the data sets likely to be? Can there be duplicate key values?
* What are the requirements for the sort? Do you want to optimize for best-case, worst-case, or average-case performance? Does the sort need to be stable?
* What do we know about the system? Is the largest data set to be sorted smaller than, the same size as, or larger than available memory?

<!-- TOC -->

- [1. Sorting](#1-sorting)
  - [1.1. Bubble sort](#11-bubble-sort)
  - [1.2. Insertion Sort](#12-insertion-sort)
  - [1.3. Selection Sort](#13-selection-sort)
  - [1.4. Quick Sort](#14-quick-sort)
  - [1.5. Merge Sort](#15-merge-sort)

<!-- /TOC -->


## 5.1. Bubble sort

Bubble sort, sometimes referred to as sinking sort, is a
simple sorting algorithm that repeatedly steps through
the list to be sorted, compares each pair of adjacent
items and swaps them if they are in the wrong order.
The pass through the list is repeated until no swaps
are needed, which indicates that the list is sorted.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |





## 5.2. Insertion Sort

Insertion sort is another simple sorting algorithm. It builds a sorted array (or list) one element at a time by comparing each new element to the already-sorted elements and inserting the new element into the correct location, similar to the way you sort a hand of playing cards.

Insertion sort is a simple sorting algorithm that builds
the final sorted array (or list) one item at a time.
It is much less efficient on large lists than more
advanced algorithms such as quicksort, heapsort, or merge
sort.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)



| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |


## 5.3. Selection Sort

Selection sort is one of the simplest sorting algorithms. It starts with the first element in the array (or list) and scans through the array to find the element with the smallest key, which it swaps with the first element. The process is then repeated with each subsequent element until the last element is reached.

## 5.4. Quick Sort
Quicksort is a divide and conquer algorithm.
Quicksort first divides a large array into two smaller
sub-arrays: the low elements and the high elements.
Quicksort can then recursively sort the sub-arrays

The steps are:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with
values less than the pivot come before the pivot, while all
elements with values greater than the pivot come after it
(equal values can go either way). After this partitioning,
the pivot is in its final position. This is called the
partition operation.
3. Recursively apply the above steps to the sub-array of
elements with smaller values and separately to the
sub-array of elements with greater values.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)



| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |


## 5.5. Merge Sort

Merge sort is another divide-and-conquer algorithm that works by splitting a data set into two or more subsets, sorting the subsets, and then merging them together into the final sorted set.


In computer science, merge sort (also commonly spelled
mergesort) is an efficient, general-purpose,
comparison-based sorting algorithm. Most implementations
produce a stable sort, which means that the implementation
preserves the input order of equal elements in the sorted
output. Mergesort is a divide and conquer algorithm that
was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into
the smallest unit (1 element), then compare each
element with the adjacent list to sort and merge the
two adjacent lists. Finally all the elements are sorted
and merged.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

A recursive merge sort algorithm used to sort an array of 7
integer values. These are the steps a human would take to
emulate merge sort (top-down).

![Merge Sort](https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/merge-sort.png)



| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

