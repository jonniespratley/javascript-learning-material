# 1. HTML & CSS Concepts
<!-- TOC -->

- [1. HTML & CSS Concepts](#1-html--css-concepts)
    - [1.0.1. CSS animations](#101-css-animations)
    - [1.0.2. CSS sprites](#102-css-sprites)
    - [1.0.3. Pseudo classes](#103-pseudo-classes)
    - [1.0.4. Grid systems](#104-grid-systems)
    - [1.0.5. Semantic markup](#105-semantic-markup)
      - [1.0.5.1. What are Semantic Elements?](#1051-what-are-semantic-elements)
      - [1.0.5.2. Example: A Semantic Outline](#1052-example-a-semantic-outline)
    - [1.0.6. CSS pre-processors](#106-css-pre-processors)

<!-- /TOC -->

### 1.0.1. CSS animations
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


### 1.0.2. CSS sprites
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


### 1.0.3. Pseudo classes
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user hovers over it.

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

> Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

[Back to top](#contents)



### 1.0.4. Grid systems
Description

```
// Example code
```

> Reference: https://www.sitepoint.com/understanding-css-grid-systems/

[Back to top](#contents)


### 1.0.5. Semantic markup
Semantics is the study of the meanings of words and phrases in a language.

> Semantic elements = elements with a meaning.

#### 1.0.5.1. What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

![](https://www.w3schools.com/html/img_sem_elements.gif)

> Reference: https://www.w3schools.com/html/html5_semantic_elements.asp

#### 1.0.5.2. Example: A Semantic Outline

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


### 1.0.6. CSS pre-processors
Description

```
// Example code
```

> Reference: URL

[Back to top](#contents)


