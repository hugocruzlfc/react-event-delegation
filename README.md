# Explanation

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

In this example you can see I only attach a single onClick on div (the parent of li element) not all the li element and with the power of event bubbling the event bubbles up and on the parent I catch the event and checking if the click happens on li? If not then do nothing if it happens on li just update the filter state with inner text and when the component re renders I’m filtering out the data simple.

Imagine if you have a large data array and you want a click handler on each and every single one that cost so many event handlers but with the use of event delegation we can optimization this with only one click event.
