# Big O

## 1. Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.

* [1. Big-O Analysis](big_o.md#1-big-o-analysis)
  * [1.0.1. How Big-O Analysis Works](big_o.md#101-how-big-o-analysis-works)
  * [1.0.2. Which is Better?](big_o.md#102-which-is-better)
  * [1.0.3. Big O\(1\)](big_o.md#103-big-o1)
  * [1.0.4. Big O\(N\)](big_o.md#104-big-on)
  * [1.0.5. Big O\(N2\)](big_o.md#105-big-on2)
  * [1.0.6. Big O Performance Comparisons](big_o.md#106-big-o-performance-comparisons)
  * [1.0.7. Data Structure Operations Complexity](big_o.md#107-data-structure-operations-complexity)
  * [1.0.8. Array Sorting Algorithms Complexity](big_o.md#108-array-sorting-algorithms-complexity)
* [2. Searching](big_o.md#2-searching)
  * [2.1. Binary search](big_o.md#21-binary-search)

### 1.0.1. How Big-O Analysis Works

In Big-O analysis, input size is assumed to be an unknown value n. In this example, n simply represents the number of elements in an array. In other problems, n may represent the number of nodes in a linked list, the number of bits in a data type, or the number of entries in a hash table. After determining what n means in terms of the input, you must determine how many operations are performed for each of the n input items. “Operation” is a fuzzy word because algorithms differ greatly.

Commonly, an operation is something that a real computer can do in a constant amount of time, like adding an input value to a constant, creating a new input item, or deleting an input value. In Big-O analysis, the times for these operations are all considered equivalent.

In both CompareToMax and CompareToAll, the operation of greatest interest is comparing an array value to another value.

In CompareToMax, each array element was compared once to a maximum value. Thus, the n input items are each examined once, resulting in n examinations. This is considered O\(n\), usually referred to as linear time: The time required to run the algorithm increases linearly with the number of input items. How to Do Big-O Analysis

The general procedure for Big-O runtime analysis is as follows:

1. Figure out what the input is and what n represents.
2. Express the number of operations the algorithm performs in terms of n.
3. Eliminate all but the highest-order terms.
4. Remove all constant factors.

For the algorithms you’ll encounter in interviews, Big-O analysis should be straightforward as long as you correctly identify the operations that are dependent on the input size.

### 1.0.2. Which is Better?

The performance of most algorithms depends on n, the size of the input. The algorithms can be classified as follows from best-to-worse performance:

* O\(log n\) — An algorithm is said to be logarithmic if its running time increases logarithmically in proportion to the input size.
* O\(n\) — A linear algorithm’s running time increases in direct proportion to the input size.
* O\(n log n\) — A superlinear algorithm is midway between a linear algorithm and a polynomial algorithm.
* O\(nc\) — A polynomial algorithm grows quickly based on the size of the input.
* O\(cn\) — An exponential algorithm grows even faster than a polynomial algorithm.
* O\(n!\) — A factorial algorithm grows the fastest and becomes quickly unusable for even small values of n.

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
* Notation - Name
* O\(1\)          - Constant
* O\(log\(n\)\)     - Logarithmic
* O\(\(log\(n\)\)c\)  - Poly-logarithmic
* O\(n\)          - Linear
* O\(n2\)         - Quadratic
* O\(nc\)         - Polynomial
* O\(cn\)         - Exponential

### 1.0.3. Big O\(1\)

Consider the following function:

```javascript
function increment(num){
  return ++num;
}
console.log(increment(2));
```

### 1.0.4. Big O\(N\)

Now, let's use the sequential search algorithm:

```javascript
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

### 1.0.5. Big O\(N2\)

For the O\(n2\) example, let's use the bubble sort algorithm:

```javascript
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

### 1.0.6. Big O Performance Comparisons

Order of growth of algorithms specified in Big O notation.

![Big O graphs](https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/big-o-graph.png)

> Source: [Big O Cheat Sheet](http://bigocheatsheet.com/)

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements |
| :--- | :--- | :--- | :--- |
| **O\(1\)** | 1 | 1 | 1 |
| **O\(log N\)** | 3 | 6 | 9 |
| **O\(N\)** | 10 | 100 | 1000 |
| **O\(N log N\)** | 30 | 600 | 9000 |
| **O\(N^2\)** | 100 | 10000 | 1000000 |
| **O\(2^N\)** | 1024 | 1.26e+29 | 1.07e+301 |
| **O\(N!\)** | 3628800 | 9.3e+157 | 4.02e+2567 |

### 1.0.7. Data Structure Operations Complexity

| Data Structure | Access | Search | Insertion | Deletion | Comments |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Array** | 1 | n | n | n |  |
| **Stack** | n | n | 1 | 1 |  |
| **Queue** | n | n | 1 | 1 |  |
| **Linked List** | n | n | 1 | 1 |  |
| **Hash Table** | - | n | n | n | In case of perfect hash function costs would be O\(1\) |
| **Binary Search Tree** | n | n | n | n | In case of balanced tree costs would be O\(log\(n\)\) |
| **B-Tree** | log\(n\) | log\(n\) | log\(n\) | log\(n\) |  |
| **Red-Black Tree** | log\(n\) | log\(n\) | log\(n\) | log\(n\) |  |
| **AVL Tree** | log\(n\) | log\(n\) | log\(n\) | log\(n\) |  |
| **Bloom Filter** | - | 1 | 1 | - | False positives are possible while searching |

### 1.0.8. Array Sorting Algorithms Complexity

| Name | Best | Average | Worst | Memory | Stable | Comments |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Bubble sort** | n | n2 | n2 | 1 | Yes |  |
| **Insertion sort** | n | n2 | n2 | 1 | Yes |  |
| **Selection sort** | n2 | n2 | n2 | 1 | No |  |
| **Heap sort** | n log\(n\) | n log\(n\) | n log\(n\) | 1 | No |  |
| **Merge sort** | n log\(n\) | n log\(n\) | n log\(n\) | n | Yes |  |
| **Quick sort** | n log\(n\) | n log\(n\) | n2 | log\(n\) | No | Quicksort is usually done in-place with O\(log\(n\)\) stack space |
| **Shell sort** | n log\(n\) | depends on gap sequence | n \(log\(n\)\)2 | 1 | No |  |
| **Counting sort** | n + r | n + r | n + r | n + r | Yes | r - biggest number in array |
| **Radix sort** | n \* k | n \* k | n \* k | n + k | Yes | k - length of longest key |

## 2. Searching

### 2.1. Binary search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

Here's how algorithm works.

1. At every step, consider the array between `low` and `high` indices
2. Calculate the `mid` index.
3. If element at the `mid` index is the key, return `mid`.
4. If element at `mid` is greater than the `key`, then reduce the array size such that `high` becomes `mid - 1`. - Index at low remains the same.
5. If element at `mid` is less than the `key`, then reduce the array size such that `low` becomes `mid + 1`. Index at high remains the same.
6. When `low` is greater than `high`, key doesn't exist. Return -1.

**Time Complexity**: `O(log(n))` - since we split search area by two for every next iteration.

```javascript
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

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];

console.log("Key(47) found at: " + binarySearch(array_for_binary_search, 47));
console.log("Key(75) found at: " + binarySearch(array_for_binary_search, 75));
console.log("Key(175) found at: " + binarySearch(array_for_binary_search, 175));
```

#### Iterative Example

```javascript
let binary_search_iterative = function(a, key) {
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];

console.log("Key(47) found at: " + binary_search_iterative(array_for_binary_search, 47));
console.log("Key(75) found at: " + binary_search_iterative(array_for_binary_search, 75));
console.log("Key(175) found at: " + binary_search_iterative(array_for_binary_search, 175));
```

