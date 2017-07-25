# Prototypes and Inheritance - Project 1

Write a program that uses one constructor:

* `Book()` - to create book object with the following properties: genre, title, author, published \(the year it was published\)
* `hasMovie` - a boolean indicating if the book has been made into a movie or tv show.
* `display()` - a method that displays the object in the console.
* `toString()` - a method that returns a string describing the book.

Create a `window.onload` handler function that creates an array of book objects, and then adds each book to the page using the `addToPage()` function \(below\).

Create a new file \(`assignment-1.html`\) in your /homework folder and use the following HTML and JavaScript to get started:

```html
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Prototypes and Inheritance - Project 1</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .mystery {
        background-color: purple;
    }

    .biography {
        background-color: crimson;
    }
  </style>
</head>
<body>

  <ul id="books"></ul>

  <script>
  "use strict";
  // your code here for the Book() constructor
  //
  //

  window.onload = function () {
      var books = [];
      // your code here to create the books and call addToPage()
  };

  function addToPage(book) {
      var booksList = document.getElementById("books");
      var bookItem = document.createElement("li");
      // your code here to figure out how which class to add to the book
      // bookItem.setAttribute("class", "mystery") to add the mystery class
      // bookItem.setAttribute("class", "biography") to add the biography class
      bookItem.innerHTML = book.toString();
      booksList.appendChild(bookItem);
  }
  </script>
</body>
</html>
```



