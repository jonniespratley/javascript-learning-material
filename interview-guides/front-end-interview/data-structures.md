```
# 2. Data Structures
```


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










