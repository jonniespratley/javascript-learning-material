# 1. Data Structures


<!-- TOC -->

- [1. Data Structures](#1-data-structures)
    - [1.1. Queue](#11-queue)
    - [1.2. Stack](#12-stack)
    - [1.3. Linked List](#13-linked-list)
    - [1.4. Doubly Linked List](#14-doubly-linked-list)
    - [1.5. Tree](#15-tree)
        - [1.5.1. Binary Search Tree](#151-binary-search-tree)
    - [1.6. Graph](#16-graph)
    - [1.7. Heap](#17-heap)
    - [1.8. Priority Queue](#18-priority-queue)
    - [1.9. Hash Table](#19-hash-table)

<!-- /TOC -->




## 1.1. Queue
A queue is an ordered collection of items that follows the FIFO (First In First Out), also known as the first-come first-served principle. The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

![Queue](https://camo.githubusercontent.com/7fecf0b843d5f7b26e4514b4e9e047d6c84ee76b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35322f446174615f51756575652e737667)

> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue

<!-- js-console -->
```js
const queue = [];
queue.push(2); // queue is now [2]
queue.push(5); // queue is now [2, 5]
queue.push(7); // queue is now [2, 5, 7]

const i = queue.shift(); // queue is now [5, 7]
console.log(i); // displays 2
```




## 1.2. Stack

A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base.


![Stack](https://camo.githubusercontent.com/464c4087d283619fe8e8c77cf5805e45faa54ca9/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62342f4c69666f5f737461636b2e706e67)

> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack

A stack is a linear data structure. A stack organizes data into sequential order.

<!-- js-console -->
```js
//Stack with Array - First in, Last out
const stack = [];
stack.push(2); // stack is now [2]
stack.push(5); // stack is now [2, 5]

const i = stack.pop(); // stack is now [2]
console.log(i); // displays 5
```


## 1.3. Linked List
...


## 1.4. Doubly Linked List
...


## 1.5. Tree
In computer science, a tree is a widely used abstract data type (ADT) — or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

A simple unordered tree; in this diagram, the node labeled 7 has two children, labeled 2 and 6, and one parent, labeled 2. The root node, at the top, has no parent.




![Tree](https://camo.githubusercontent.com/38340edffe661998f395184c2ac1578aea636788/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f662f66372f42696e6172795f747265652e737667)

> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree



### 1.5.1. Binary Search Tree

In computer science, binary search trees (BST), sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).




![BST](https://camo.githubusercontent.com/cd4bc41832630c9db51a7216109ac209e23d97a7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64612f42696e6172795f7365617263685f747265652e737667)
> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree

## 1.6. Graph
In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics, specifically the field of graph theory

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.


![Graph](https://camo.githubusercontent.com/62127c391ad4573b5058ff35e3245fbd95b7c75c/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f67726170682e6a7067)

> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph

## 1.7. Heap

In computer science, a heap is a specialized tree-based data structure that satisfies the heap property described below.

In a min heap, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C.

![Heap](https://camo.githubusercontent.com/16e4220b69a866f97cc20d934c4b16fe5b9147de/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36392f4d696e2d686561702e706e67)


In a max heap, the key of P is greater than or equal to the key of C

![Heap](https://camo.githubusercontent.com/cf3c66d0d2ed67af70a8bc500fc215526d266a0d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f332f33382f4d61782d486561702e737667)

The node at the "top" of the heap with no parents is called the root node.

> Reference: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap

## 1.8. Priority Queue

...


## 1.9. Hash Table
A hash table is as simple as a map. The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.

Also known as an associative array, a hash map is one of the most useful and widely used data structures.

```js
// Code
```
