# 1. HTML & CSS Concepts
<!-- TOC -->

- [1. HTML & CSS Concepts](#1-html--css-concepts)
  - [1.1. CSS animations](#11-css-animations)
  - [1.2. CSS sprites](#12-css-sprites)
  - [1.3. Pseudo classes](#13-pseudo-classes)
  - [1.4. Semantic markup](#14-semantic-markup)
    - [1.4.2. Example: A Semantic Outline](#142-example-a-semantic-outline)
  - [1.5. CSS pre-processors](#15-css-pre-processors)
  - [1.6. Grid systems](#16-grid-systems)
- [2. Document Object Model](#2-document-object-model)
  - [2.1. Selecting Nodes](#21-selecting-nodes)
  - [2.2. Traversing DOM Tree](#22-traversing-dom-tree)
  - [2.3. Creating Nodes](#23-creating-nodes)
  - [2.4. Removing Nodes](#24-removing-nodes)

<!-- /TOC -->

## 1.1. CSS animations
The animation property in CSS can be used to animate many other CSS properties such as `color`, `background-color`, `height`, or `width`. Each animation needs to be defined with the `@keyframes` `at-rule` which is then called with the `animation` property, like so:



```css
.element {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}
```

> Reference: https://css-tricks.com/almanac/properties/a/animation/

[Back to top](#contents)


## 1.2. CSS sprites
CSS Sprites are a means of combining multiple images into a single image file for use on a website, to help with performance.

```css
.flags-canada, .flags-mexico, .flags-usa {
  background-image: url('../images/flags.png');
  background-repeat: no-repeat;
}

.flags-canada {
  height: 128px;
  background-position: -5px -5px;
}

.flags-usa {
  height: 135px;
  background-position: -5px -143px;
}

.flags-mexico {
  height: 147px;
  background-position: -5px -288px;
}
```

> Reference: https://css-tricks.com/css-sprites/

[Back to top](#contents)


## 1.3. Pseudo classes
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user hovers over it.

```css
/* syntax */
selector:pseudo-class {
  property: value;
}

/* example */
div:hover {
  background-color: #F89B4D;
}
```




<details>
  <summary>
  Index of standard pseudo-classes
  </summary>

- :active
- :any
- :any-link 
- :checked
- :default
- :defined
- :dir() 
- :disabled
- :empty
- :enabled
- :first
- :first-child
- :first-of-type
- :fullscreen 
- :focus
- :focus-visible
- :has() 
- :host
- :host()
- :host-context() 
- :hover
- :indeterminate
- :in-range
- :invalid
- :lang()
- :last-child
- :last-of-type
- :left
- :link
- :matches() 
- :not()
- :nth-child()
- :nth-last-child()
- :nth-last-of-type()
- :nth-of-type()
- :only-child
- :only-of-type
- :optional
- :out-of-range
- :placeholder-shown 
- :read-only
- :read-write
- :required
- :right
- :root
- :scope
- :target
- :valid
- :visited
</details>


> Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

[Back to top](#contents)






## 1.4. Semantic markup
A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

HTML5 offers new semantic elements to define different parts of a web page:  

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

> Reference: https://www.w3schools.com/html/html5_semantic_elements.asp

### 1.4.2. Example: A Semantic Outline

Let’s see an example for a semantic document outline to see clearer how it works. 

![](https://assets.hongkiat.com/uploads/html-5-semantics/document-outline-example.jpg)

Our example code will result in the following document structure:

 ```html
  <body>
    <header>...</header>
    <nav>
      <header>...</header>
      ...
    </nav>
    <article>
      <header>...</header>
      <section>...</section>
      <section>...</section>
      <footer>...</footer>
    </article>
    <aside>
      <section>...</section>
      <section>...</section>
      <section>...</section>
    </aside>
    <footer>...</footer> 
  </body>
  ```


> Reference: https://www.hongkiat.com/blog/html-5-semantics/

[Back to top](#contents)


## 1.5. CSS pre-processors
Description

```
// Example code
```

> Reference: URL

[Back to top](#contents)




## 1.6. Grid systems
CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).


Example:

```html
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

.container div {
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
}

.item-a {
  grid-area: header;
}

.item-b {
  grid-area: main;
}

.item-c {
  grid-area: sidebar;
}

.item-d {
  grid-area: footer;
}
```

> Reference: https://www.sitepoint.com/understanding-css-grid-systems/

> Reference: https://css-tricks.com/snippets/css/complete-guide-grid/


[Back to top](#contents)


# 2. Document Object Model
The Document Object Model or DOM is a programming interface that describes all elements of a web document and how they are related to each other. It is through this interface that JavaScript code can interact with the web document.

Here is a list of interactions that you should know how to do:

- Selecting Nodes
- Traversing DOM Tree
- Creating Nodes
- Removing Nodes

## 2.1. Selecting Nodes
The document object represents the web document and provides several ways to access the DOM tree and retrieve node references.

```js
var mydiv = document.getElementById('mydiv');
var myclasses = document.getElementsByClassName("myclass");
var myelements = document.body.getElementsByTagName("*");

```

Element nodes can also be located using the `querySelector` method. This method returns the first element that matches the specified CSS selector, which in this case is the first element with its class attribute set to `myclass`.

```js
var mynode = document.querySelector(".myclass");
```

Similarly, the `querySelectorAll` method retrieves a collection of all element nodes that match the given CSS query. Both of these query methods are supported by all modern browsers, excluding IE<9.

```js
var mynodes = document.querySelectorAll(".myclass");
```



## 2.2. Traversing DOM Tree
The following list can be used to illustrate.

```html
<ul id="mylist">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

A reference to this unordered list node is here retrieved by its id.

```js
var mylist = document.getElementById("mylist");
```

Element nodes below this node are available through the children collection. The first list item can also be retrieved using the `firstElementChild` property.

```js
var first = mylist.children[0];
first = mylist.firstElementChild;
```

## 2.3. Creating Nodes
Nodes in the DOM can be dynamically added, removed, or changed. To illustrate, a new list item will be added to the previous list. The first step is to create the element and text nodes, using the `createElement` and `createTextNode` methods respectively.

```js
var myitem = document.createElement('li');
var mytext = document.createTextNode('New list item');
```

The text node is then added to the element node, using the `appendChild` method on the list item node.

```javascript
myitem.appendChild(mytext);
mylist.appendChild(myitem);
```

## 2.4. Removing Nodes

A node can be removed using the `removeChild` method. This method returns a reference to the removed node: in this case, the last child in the list. Keep in mind that catching return values in JavaScript is optional.

```javascript
var removedNode = mylist.removeChild(mylist.lastElementChild);
```

Another way to remove a node is to replace it with a different node. This is done with the replaceChild method, which also returns the replaced node. The following code replaces the first child of the list with the previously removed node.

```javascript
mylist.replaceChild(removedNode, mylist.firstElementChild);
```
