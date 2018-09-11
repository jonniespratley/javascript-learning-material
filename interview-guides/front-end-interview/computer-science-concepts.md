# 1. Computer Science Concepts
 
The following concepts should be understood in JavaScript.

<!-- TOC -->

- [1. Computer Science Concepts](#1-computer-science-concepts)
- [2. Data Structures](#2-data-structures)
  - [2.1. Hashtables (Map)](#21-hashtables-map)
  - [2.2. Queues & Stacks](#22-queues--stacks)
    - [2.2.1. Queue](#221-queue)
    - [2.2.2. Stack](#222-stack)
- [3. Algorithms](#3-algorithms)
  - [3.1. Big-O Analysis](#31-big-o-analysis)
    - [3.1.1. How Big-O Analysis Works](#311-how-big-o-analysis-works)
    - [3.1.2. Which is Better?](#312-which-is-better)
  - [Searching](#searching)
    - [3.2.1. Binary search](#321-binary-search)

<!-- /TOC -->

# 2. Data Structures

* Hashtables
* Linked lists
* Stacks and queues
* Trees (binary trees and heaps)
* Graphs

## 2.1. Hashtables (Map)
A hash table is as simple as a map. The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.

Also known as an associative array, a hash map is one of the most useful and widely used data structures.

```js
// Code
```

## 2.2. Queues & Stacks
A queue is an ordered collection of items that follows the FIFO (First In First Out), also known as the first-come first-served principle. The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.
Queues and stacks are both lists of values. A queue and a stack both store values in the order in which they were added.

The difference between a queue and a stack is simply:

* Queue - Items retrieved are in the order in which they were added (FIFO—first in, first out)
* Stack - Items retrieved are in reverse order (LIFO—last in, first out).


### 2.2.1. Queue
A queue is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.

Examples methods:

* enqueue(element(s)): This adds a new item (or several items) at the back of the queue.
* dequeue(): This removes the first item from the queue (the item that is in the front of the queue). It also returns the removed element.
* front(): This returns the first element from the queue, the first one added, and the first one that will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes-very similar to the peek method from the Stack class).
* isEmpty(): This returns true if the queue does not contain any elements, and false if the queue is bigger than 0.
* size(): This returns the number of elements the queue contains. It is similar to the length property of the array.

Example implentation in JavaScript:

<!-- js-console -->
```js
class MyQueue {
    constructor() {
        this._oldestIndex = 1;
        this._newestIndex = 1;
        this._storage = {};
    }

    size() {
        return this._newestIndex - this._oldestIndex;
    }

    enqueue(data) {
        this._storage[this._newestIndex] = data;
        this._newestIndex++;
    }

    dequeue() {
        const oldestIndex = this._oldestIndex;
        const newestIndex = this._newestIndex;
        let deletedData;

        if (oldestIndex !== newestIndex) {
            deletedData = this._storage[oldestIndex];
            delete this._storage[oldestIndex];
            this._oldestIndex++;

            return deletedData;
        }
    }
}
var q = new MyQueue();
    q.enqueue('Jonnie');
    q.enqueue('Spratley');

console.log(q.size() === 2, 'size is 2');
console.log(q.dequeue() === 'Jonnie', 'first in first out');
console.log(q.dequeue() === 'Spratley', 'last in last out')
console.log(q.size() === 0, 'size is 0');
```


### 2.2.2. Stack

A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base.

A stack is a linear data structure. A stack organizes data into sequential order.

* push(element(s)): This adds a new item (or several items) to the top of the stack.
* pop(): This removes the top item from the stack. It also returns the removed element.
* peek(): This returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes).
* isEmpty(): This returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
* clear(): This removes all the elements of the stack.
* size(): This returns the number of elements that the stack contains. It is similar to the length property of an array.

Example implentation in JavaScript:

<!-- js-console -->
```js
class MyStack {
    constructor() {
        this.items = [];
        this._size = 0;
        this._storage = {};
    }
    size(){
        return this._size;
    }

    push(data) {
        const size = ++this._size;
        this._storage[size] = data;
    }

    pop() {
        const size = this._size;
        let deletedData;
        if (size) {
            deletedData = this._storage[size];
            delete this._storage[size];
            this._size--;
            return deletedData;
        }
    }
}

var s = new MyStack();
    s.push('Jonnie');
    s.push('Spratley');

console.log(s.size() === 2, 'size is 2');
console.log(s.pop() === 'Spratley', 'last in first out');
console.log(s.pop() === 'Jonnie', 'first in last out');
console.log(s.size() === 0, 'size is 0');
```





# 3. Algorithms

## 3.1. Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.

### 3.1.1. How Big-O Analysis Works

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


### 3.1.2. Which is Better?

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


# Searching

## 3.2.1. Binary search
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



# 1. Sorting
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


## 1.1. Bubble sort

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





## 1.2. Insertion Sort

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


## 1.3. Selection Sort

Selection sort is one of the simplest sorting algorithms. It starts with the first element in the array (or list) and scans through the array to find the element with the smallest key, which it swaps with the first element. The process is then repeated with each subsequent element until the last element is reached.

## 1.4. Quick Sort
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


## 1.5. Merge Sort

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

