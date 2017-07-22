
# Lession Format
We'll try out lots of examples in each lesson. We'll have you write code, look at code, and edit existing code. The code will be presented in boxes that will indicate what needs to be done to the code inside.

Whenever you see white boxes like the one below, you'll type the contents into the editor window to try the example yourself. The **CODE TO TYPE** bar on top of the white box contains directions for you to follow:

###### CODE TO TYPE:

```
White boxes like this contain code for you to try out (type into a file to run).

If you have already written some of the code, new code for you to add looks like this.

If we want you to remove existing code, the code to remove will look like this.

We may also include instructive comments that you don't need to type.
```

We may run programs and do some other activities in a terminal session in the operating system or other command-line environment. These will be shown like this:


###### INTERACTIVE SESSION:

```
The plain black text that we present in these **INTERACTIVE** boxes is
provided by the system (not for you to type).

The commands we want you to type look like this.
```

Code and information presented in a gray **OBSERVE** box is for you to inspect and absorb. This information is often color-coded, and followed by text explaining the code in detail:

###### OBSERVE:

```
Gray "Observe" boxes like this contain information (usually code specifics) for you to observe.
```

The paragraph(s) that follow may provide addition details on information that was highlighted in the Observe box.

We'll also set especially pertinent information apart in "Note" boxes:



> **[info]** Use this for infomation messages.

---


> **[warning]** Use this for warning messages

---

> **[danger]** Use this for danger messages.

---

> **[success] For info**
>
> Use this for success messages.

---

## Code Editor
The following is a code editor that you can modify code and see the results.

{% codeeditor   src='./examples/html-example.html',
                language='html', theme='github' %}
{% endcodeeditor %}


## JavaScript Console
The following is a code console that you can modify code and run the example.

<!-- js-console -->
```js
1 + 2;
```



## Exercies
The following will be exercises that you can test your knowledge with.

{% exercise %}
Define a variable `x` equal to 10.

{% initial %}
var x =

{% solution %}
var x = 10;

{% validation %}
assert(x == 10);

{% context %}
// This is context code available everywhere The user will be able to evaluate `exposedVar`
var exposedVar = 3;

// ... or call `exposedFunction`
function exposedFunction {
    return 3;
}
{% endexercise %}