# Composites Lab

## What is a composite?

Put high level conceptual introduction to what a composite is.
Give 1-2 links to really good explanations out there by other people.

OR

delete this section and give a mini lecture in person.

## Your task

include some HTML DOM review content here

Your task for this lab is to write TypeScript that constructs and prints out an HTML DOM using the composites pattern.

Your output will look something like this:

```
C:\code\info498e\lab04-composites>node composite-html-2.js
<html>
<div>
<p>
Hello world!
</p>
<p>
How is it going?
</p>
</div>
</html>

```

We have given you some starter code that includes an interface (IDomElement). You need to create a class (DomElement) that implements this interface.

```javascript
interface IDomElement {
  add(element: DomElement);
  print();
}
```

Each instance of this DomElement class will represent a element (you can also call them nodes) in your DOM tree.

Use this composite structure to create a DOM tree that looks like the sample output we've provided you above.
