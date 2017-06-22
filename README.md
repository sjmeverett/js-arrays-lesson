# Arrays

This lesson is about "arrays" - lists of data.

## Setup

Grab a copy of this lesson and enter the directory:

```
$ git clone https://github.com/stewartml/js-arrays-lesson
$ cd js-arrays-lesson
```

The code runs in the browser.  If you're running a mac, this will open it:

```
$ open index.html
```

You'll see that it contains a "Students" heading, a couple of buttons
and a textbox already, but doesn't do anything  yet.

The main file you'll need to worry about is [`script.js`](script.js).
The [`index.html`](index.html) file is what makes the user interface
for the app, but this is completed for you in this lesson.

## The case for arrays

We've seen previously how we can use *variables* (remember the `var`
keyword?) to store data.  If we had one student, we could store their
name in a variable:

```js
var student = 'Arthur Dent';
```

What if we had more than one student though?  You *could* use several
variables, like so:

```js
var student1 = 'Arthur Dent';
var student2 = 'Zaphod Beeblebrox';
var student3 = 'Fenchurch';
```

But that's not very flexible.  You'd need to know how many students you
had up front, and to add more,  you'd have to edit the code.  It wouldn't
be very useful if the schools admissions team had to edit the code
every time they wanted to enrol a new student!

As you may have guessed is the point of this lesson, there's another
way.  We can declare a variable to hold a collection of data - one such
collection is an *array*.

An array is denoted by square brackets (`[` and `]`).  Inside those
brackets, you can put the pieces of data, separated by commas.

You don't have to put anything in them though.  Two brackets with
nothing in between represents an empty array, so we'll start with that:

```js
var students = [];
```

In the code for this lesson, you'll find a line just like this on
[line 11 of `script.js`](script.js#L11).

## Task 1

The first task is to edit this line to add a couple of students.
Remember, we put the data in between the square brackets:

```js
var students = ['Arthur Dent'];
```

To add more than one peice of data, use a comma.  And remember that
whitespace is not significant in JavaScript, so to make it a little
easier to read, we'll also split it over a few lines:

```js
var students = [
  'Arthur Dent',
  'Zaphod Beeblebrox'
];
```

First task done!  Go and refresh the browser and pop open the
development tools (`⌘⇧I` on a mac).  Type `students` and you'll see
that it contains the values you set.

## Indexing

Arrays are *indexed*.  What this means is you can pull an item out of
the array at any position, if you know where it is.

In JavaScript (and a lot of other languages), the positions in an array
start at `0`.  This means that for the array above, Arthur Dent is at
position `0`, whilst Zaphod is at position `1`.

Remember how to copy a variable into another variable?

```js
var someStudent = student1;
```

In the example above we're copying the value in `student1` into the
variable `someStudent`.

To copy the value from a specific index in an array, we use square
brackets, putting the index that you want to retrieve between them:

```js
var someStudent = students[1];
```

Now, assuming `students` contained the values we set up above, the
`someStudent` variable would now hold `'Zaphod Beeblebrox'`.

What if you don't know which element you want to get at the time
you're writing the program?  You can also pass a variable as an
index.

```js
var someStudent = students[i];
```

Now the value of `someStudent` will depend on the value of `i`.  If
`i` is `0`, `someStudent` will contain `'Arthur Dent'`, and you guessed,
if `i` contains `1`, then `someStudent` will contain
`'Zaphod Beeblebrox'`.

Note that if `i` contained any other value in this case, then
`someStudent` would be `undefined`.

If you go back to the developer tools, you can inspect the values in `students`.

When you typed `students` before, you got the whole array.

Now try typing `students[0]` or `students[1]`.

What happens if you do `students[100]` or `students['banana']`?

## Task 2

Ok, now we know about indexing, Task 2 will be easy!

We've to complete the function `getStudent` to return the student
at position `i`.  This is because in the provided code, there's a
function which updates the list on the page with the contents of
the array.  It does this by getting each student in turn and making
a list item for it, and to get an item, it calls the `getStudent`
function, passing it the number of the item it's looking for.

So let's complete `getStudent`:

```js
function getStudent(i) {
  return students[i];
}
```

Now that we've got students in the array and a function to get them
back out, that's enough to show a list of students!

Save and refresh the page and you'll see your students displayed.

## Getting the number of items in an array

The number of items in an array is also called the array's *length*.

Handily, there's a field on array objects called `length`.  Go back
to the debug console in the browser and try to get the length of
`students`:

```js
students.length
```

You'll see the number of items printed out.

## Task 3

You'll see that even though you added some students in the tasks above,
the page always says "There are 0 students."

This is because the provided code calls `getNumberOfStudents` when
updating the text, and that function always returns `0`.  Let's fix
that.

```js
function getNumberOfStudents() {
  return students.length;
}
```

## Adding items

So we've still not gained much over the separate variables from
above, as we're still adding students by altering the code.  We want
to be able to add students while the code is running.

The array object has a `push` method for adding items.  You can
try it in the debug console:

```js
students.push('Mr Prosser');
```

If you check the value of `students`, you'll see that it now contains
the string you just added.

## Task 4

When you click the "Add" button, the provided code calls the
`addStudent` function, passing it whatever you typed into the
textbox.  Currently this doesn't do anything.

Let's make it add the student you typed:

```js
function addStudent(name) {
  students.push(name);
}
```

Save and refresh.  Type a name into the textbox, and click "Add",
and you'll see it appear in the list.  Progress!  We've now got
a rudimentary student list you can add to without editing code.

Do this a bunch more times.  Eventually the items you add will be
off the bottom of the screen.  Uh-oh.

Users like to see something happen when they click a button, rather
than just trust the program that it totally added the student, honest.
With the current set-up they'd have to keep scrolling down to make
sure it was actually working.

Maybe we could add new items to the top of the list...

## Add an item to the beginning of the array

The `push` method adds items to the end of the array, but sometimes
you need to add things to the beginning.

Enter the `unshift` method.  Let's try it in the debug console:

```js
students.unshift('Slartibartfast');
```

Check the value of `students` - sure enough, it will have the new
student added on the front of the array.

## Task 5

With our newly-found knowledge, we can alter the `addStudent`
function to add the new student on the front of the array:

```js
function addStudent(name) {
  students.unshift(name);
}
```

Save, and refresh the page.  Now when you add students, no matter
how many you add, you'll see something happening.

## Sorting

Let's look at one more method - the `sort` method.  The simplest
form of this method sorts the array in alphabetical order.

Try it in the debug console:

```js
students.sort()
```

It returns the sorted array.  If you check the value of `students`,
you'll also see that it has been sorted.  Some methods don't affect
the original object, but this one does!

## Task 6

The final task is to make the "Sort" button work.  The provided code
ensures that the `sortStudents` function is called when the button is
clicked, but it won't do anything until we complete the function:

```js
function sortStudents() {
  students.sort();
}
```

Again, save and refresh the browser. Add a bunch of students,
and click sort.  They'll all go into order!

## Other stuff

Arrays can do lots of things, probably enough to keep us going for
a couple of weeks of lessons.  A good resource is the
[Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Feel free to go and take a look at the things we've discussed today,
but beware, there are quite a few advanced concepts in the
documentation, and you shouldn't worry if you don't understand
them yet.
