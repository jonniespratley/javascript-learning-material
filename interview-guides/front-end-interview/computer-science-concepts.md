# 1. Computer Science Concepts

The following concepts should be understood in JavaScript.

<!-- TOC -->

- [1. Computer Science Concepts](#1-computer-science-concepts)
- [2. Data Structures](#2-data-structures)
  - [2.1. Hashtables (Map)](#21-hashtables-map)
  - [2.2. Queues & Stacks](#22-queues--stacks)
    - [2.2.1. Queue](#221-queue)
    - [2.2.2. Stack](#222-stack)
- [4. Searching](#4-searching)
  - [4.1. Binary search](#41-binary-search)
- [5. Sorting](#5-sorting)
  - [5.1. Bubble sort](#51-bubble-sort)
  - [5.2. Insertion Sort](#52-insertion-sort)
  - [5.3. Selection Sort](#53-selection-sort)
  - [5.4. Quick Sort](#54-quick-sort)
  - [5.5. Merge Sort](#55-merge-sort)

<!-- /TOC -->




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



> Reference: ...


### Example

<!-- js-console -->
```javascript
const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                //swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};

bubbleSort([6,5,2,4,1,0,9,10]);
```


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

<!-- js-console -->
```javascript
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        const value = arr[i]
        for (var j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value
    }

    return arr;
}
console.log(insertionSort([6,5,2,4,1,0,9,10]))
```


> Reference: ...






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

### Example

<!-- js-console -->
```javascript
const quickSort = arr => {
    if (arr.length < 2) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = [];
    const equal = [];
    const right = [];

    for (const element of arr) {
        if (element > pivot) 
          right.push(element);
        else if (element < pivot) 
          left.push(element);
        else 
          equal.push(element);
    }

    return [
        ...quickSort(left),
        ...equal,
        ...quickSort(right)
    ];
};

 
quickSort([6,5,2,4,1,0,9,10]);
```




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




| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |


> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort



<!-- js-console-->
```javascript

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length) sortedArr.push(leftArr.shift());
    while (rightArr.length) sortedArr.push(rightArr.shift());
    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const midpoint = parseInt(arr.length / 2);
        const leftArr = arr.slice(0, midpoint);
        const rightArr = arr.slice(midpoint, arr.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

mergeSort([5, 2, 1, 3, 4])
```