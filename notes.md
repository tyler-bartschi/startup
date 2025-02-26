# CS 260 Notes

[My startup](https://zacksayshi.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

### Creating the AWS Server Instance

I created a t2.micro server instance, because I was eligible for it due to free tier (it should be free?). Creating a server instance involves choosing a name, a key, and then setting security group settings - I allowed ssh, HTTP, and HTTPS traffic from anywhere. I then assigned an elastic IP address, which means the server can be stopped without losing the IP, and I can change what kind of instance is running without losing the IP. The server used a template provided by the class, I'll have to see after the class is over if I know how to do everything myself - I would like to make a web server as a personal project.

IPv4 of my server: `98.80.112.233`  
Command for ssh: `ssh -i [key pair file] ubuntu@98.80.112.233`

### Creating the Route53 DNS Name

[My server root domain](https://zacksayshi.click): `zacksayshi.click`

To create a Route53 DNS name, I had to first lease the domain name, and then create the hosted zone. Once the hosted zone was created with my root domain name, I could "create records" which provided the information regarding what IP address is mapped to what name. I created both the root domain name and any subdomains of the root domain (denoted by *) to route to the same IP address, the one associated with my server instance.

### Updating the Caddy File to use HTTPS

To create the web certificate, we used the service Let's Encrypt to get a valid web certificate for free. To do this, I remote shelled into my server and changed the Caddyfile using vi, replaced :80 (which stands for port 80) with the root domain, and two other locations with the root domain. As near as I can tell, these give the rules for what to do when someone requests something from those domains. Somehow, Caddy talked to Let's Encrypt and generated a valid web certifacte, and now HTTPS can be used for web communciation.

## HTML Notes

HTML is entirely concerned with the structure and content of a website, not so much the styling (CSS) or interactivity (React and JavaScript). Some useful tags are body, header, main, footer, a, p, div, span, img, and probably others. Div is used for divisions in the webpage. All tags can be given attributes in the opening tag, such as id=""  or class="". These are used in conjunction with CSS and JavaScript, I think. [This is the link to the 260 GitHub for HTML structure](https://github.com/webprogramming260/.github/blob/main/profile/html/structure/structure.md).

Input is a useful feature of HTML as well, allowing it to get input from the user. Several types of input and attributes to modify the input are available. [This is the link to the 260 GitHub for HTML input](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md). Labels are used to label the input (duh) and then the input tag along with attributes such as type, id, name, and value are used to set up the actual input field itself.

- Span is an inline division, which seems mostly structural, and may allow CSS and Javascript to interact with or style that piece.  
- Div is a structural element that no visible effect, but allows for division of content. Div should be used to divide content where it makes sense, and likely can be used in conjuction with CSS to style.
- thead used in a table is used outside of the first tr, and denotes the row as a table header row? This is used in conjunction with th to denote the elements.
- Can use an id attribute in a opening tag to give it a id. I believe this is used primarily for CSS and React.
- ID's should be unique within an HTML document

## CSS Notes

CSS stands for Cascading Style Sheets.  
CSS defines `rulesets` or `rules`, which basically have a selector (which elements it applies to) and declarations that represent how to style the element. This consists of properties and property values.  
You can use the `style` attribute of an HTML element and assign declarations that way. Or, you can use the HTML `style` element, which should appear in the head, and assign the rules there. Lastly, you can use the `link` element to create a hyperlink to an external file containing CSS, and this must also appear in the head. Using the `link` element is preferred.  

- Elements inherit the rules applied to their parents (like the body tag can be a parent of p)
- Lower level rules override higher declaration. If the color is different between the body tag and the p tag, the p tag declaration wins.
- CSS defines things in boxes, from inner to outer is: content (the actual text or image of an element), padding (background color), border(properties such as color, thickness, and line styel), and margin (external to the actual styling of the box, whitespace)
- Change `box-sizing` property from default (`content-box`) to `border-box` to redefine width and heigh to include padding and border. Easier to style elements when visual size matches actual size.
- Wildcard name selector is `*`
- You can use a `descendant combinator` that is a space separated list of values, each value is a descendant of the previous item, and the rules will only apply to those specific descendents. For instance, `section h2` will only apply to rules to h2 elements in section elements.
- Other types of combinators include descendant, child, general sibling, and adjacent sibling.

| Combinator | Meaning | Example | Description |
-------------|---------|---------|-------------|
| Descendant   | A list of descendants | `body section` | Any section that is a descendant of a body|
| Child | A list of direct children | `section > p` | Any p that is a direct child of a section|
| General sibling | A list of siblings | `div ~ p` | Any p that has a div sibling |
| Adjacent sibling | A list of adjacent sibilngs | `div + p` | Any p that has an adjacent div sibling |

- If there is a class applied to an element, we can apply rules to all elements that have that class with the `.class` syntax
- You can combine element name and class selectors to select both the element and class, such as `p.summary`
- To seelect a specific ID, use `#IDname`
- Attribute selectors allow you to select elements based on attributes, such as `a[href]`, and you can also have a required value: `a[href="something.png"]`. Also support wildcards, such as `p[href*="https://"]`
- Also supports pseudo selectors, which select based on position, mouse interaction, hyperlink visitation, and attributes. One such is `section:hover`
- Four major familes of fonts: `Serif`, `sans-serif`, `fixed`, and `symbol`.
  - Serif fonts have extra strokes, sans-serif do not. Fixed fonts are all the same size, symbol fonts represent non-language characters.
- `@font-face` rule allows you to specify a font and a source location, ensuring always having the same font
- An import statement can automatically generate the CSS for importing the font, and the syntax is `@import url(url);`
- Lots of free fonts on the Google Font service
- `p:nth-child(i)` appears to specify which element to reference when applying CSS rules, and i indicates which one in order, starting at 1.
- `animation-name` property has a value that is the name of the animation, with rules for the animation defined later. `animation-duration` indicates how long the animation should take, for example 3s for 3 seconds
- keyframes provide the key points of the animation, CSS generates the transition.
  - Use the `from` keyword to indicate the start, and the `to` keyword to indicate the end. Can also use percentages to define what it should look like that percentage of the way through.
- The CSS `display` property allows you to change how it is displayed in browser.
- The `meta` tag in the `head` element with `name="viewport" content="width=device-width,inital-scale=1"` tells the browser not to scale the page automatically
- The `float` property moves an element to the left or right of its container element, and allows inline elements to wrap around it
- The `@media (orientation: portrait)` (the code in the parentheses is an example of the predicates that it takes) can dynamically detect the size and orientation of the device and apply rules that accomodate the change
  - You can also make things disappear or move to a different location
  - Grids are used to put things in a responsive grid orientation
- For a flexbox:
  - `align items` aligns the items vertically
  - `justify-content` aligns the items horizontally
- Frameworks provide functions and components that commonly appear in web applications.
- To include Bootstrap in the application, run `npm install bootstrap@5.3.3`, though this will be later during JavaScript.

## React Notes

- JavaScript is an interpreted language, not a compiled one
- `console.log("string");` will output string to the debugger console
- To write a function in JavaScript

```Javascript
function join(a, b) {
  return a + ' ' + b;
}
```

- Line comments: `//`
- Block comments: `/* */`
- End statements with semicolon, and code blocks (and their scope) defined with curly braces

### How to Insert JavaScript into HTML

- Script block: direclty include it in the HTML within the `<script>` element
- External code: use the `src` attribute of the script element to reference an external file
- Inline event attrihbute: put JavaScript directly inline as part of an event attribute handler
- `onclick` attribute can reference JavaScipt functions

### Node.js

- Allows JavaScript to be run outside of a browser, allowing it to run on the server itself
- You can execute a line of javascript with Node.js from console with the `-e` parameter.
- Use `node filename.js` to execute a JavaScript file, this file can also reference other JavaScript files
- To use NPM, which can load packages, you need to initialize a directory to run your JavaScript. Once done, packages can be included in my code with the `require` statement
- `npm install package-name` will install the package and will add it as a dependency in the Package.json.
- `npm uninstall package-name` will uninstall the package.\
- Include the `node_modules` directory in the `.gitignore` because it can get super large
- Main steps for Node.js

  1. Create your project directory
  2. Initialize it for use with NPM by running npm init -y
  3. Make sure .gitignore file contains node_modules
  4. Install any desired packages with npm install `<package name here>`
  5. Add `require('<package name here>')` to your application's JavaScript
  6. Use the code the package provides in your JavaScript
  7. Run your code with node index.js

### React

#### Components

- taking a piece of the application and creating a single component for it
- Variable syntax for functions in JavaScript: `const Hello = () => {};`
- This says create a variable named Hello that stores a function, then inside the curly braces you can put your code, such as returns
- This can then be rendered with `ReactDOM.render(<Hello />, document.querySelector("#root"));`
- If you want to use an external CSS file with React, you just import the css file with `import'./index.css` and then set the `className` attribute on an element to apply the related CSS rules to that element.
- external CSS stylesheets, once imported to React, will apply **globally** to all components

## JavaScript Notes

- Console object allows interactivity with the JavaScript console
- `console.log('hello');` prints "hello"
- You can use %s to create a formatted message
- Can also specify CSS to style to output
- To time something, use `console.time("name");` at the beginning and `console.timeEnd("nam");` at the end, it will output how long it took
- Can use `console.count("name");` to see how many times a block of code is called
- Functions are first class objects: can be assigned a name, passed as a parameter, returned as a result, and referenced form an object or array just like any other variable
- sytnax to declare a function: `function name(parameters) {}`
- If a parameter is not provided in the function call, the paramemter has the value `undefined`
- default value the same way python and C++ do
- You can define an anonymous function and assign it to the variable, basically the function doesn't have a specific name, it is just stored in the variable
- Can use higher-order functions
- Can also define functions inside of other functions
- Arrow syntax removes the need for the function keyword, instead just place `=>` after the parameter declaration
  - Basic arrow syntax function that always returns 3:  `() => 3;`
- Curly braces are optional; if no curly braces then the return keyword is optional, and it will automatically return the result of the expression. If curly braces are present, return keyword is needed
- Closure helps to reference variables that are out of scope for an arrow function, see [reference](https://github.com/webprogramming260/.github/blob/main/profile/javascript/arrow/arrow.md) for more detail
- Arrow functions can be included directly in JSX, without needing to define other functions
- Arrays created with []
- Lots of functions associated with arrays, see [this page](https://github.com/webprogramming260/.github/blob/main/profile/javascript/array/array.md) for details
- Objects are created with the `new` operator, and are a collection of name value pairs called properties. Name must be string or symbol, but the value can be anything. Accessed with the dot operator or bracket notation
- Object-literal syntax looks king of like a python dictionary
- Has several functions: `entires` returns an array of key-value pairs, `keys` returns an array of keys, `values` returns an array of values. All called by `Object.entries(name);`
- Any function that returns an object is considered a contructor and can be invoked with the new operator
- `this` pointer is kind of like the `self` of Python, I think
- Classes also exist, and must have a constructor
- A `#` prefix in a class makes the property or function private
- `extends` keyword allows inheritance, `super()` references the parent class, and can be used to either deliver parameters for the constructor or call a parent function
- setTimeout takes a function that will be called once the given milliseconds delay has passed
- setInterval takes a function and a delay, and will continually call the function every time the delay has passed
- You can cancel a setInterval by capturing the result of the call and then passing the result to the clearInterval function
- JSON stands for JavaScript Object Notation 
- JSON documnets contain one of the following data types: string, number, boolean, array, object, null. Most commonly contains an object
- JSON is always encoded with UTF-8
- JSON.parse turns it into JavaScript, JSON.stringify turns JavaScript (like an object) into a JSON document
- browser's localStorage API allows you to persistently store and retrieve data on a user's browser across user sessions and HTML page renderings
- Four main functions to use localStorage
  - `setItem(name, value)` - sets a named item's value into localStorage
  - `getItem(name)` - gets a named item's value from localStorage
  - `removeItem(name)` -removes a named item from localStorage
  - `clear()` - clears all items in localStorage
- Destructuring - process of pulling individual items out of an existing one
- Can do so with arrays

```JavaScript
const a = [1, 2, 4, 5];
const [b, c] = a;;
console.log(b, c);
// OUTPUT: 1, 2

const [b, c, ...others] = a;
console.log(b, c, others);
// OUTPUT: 1, 2, [4, 5]
```

- You can also destructure objects, but you must explicity state the properties you want to putll
- You can also map the names to new variables like so: `const { a: count, b: type } = o;`
- Default values can also be provided
- .useState is a React hook
- hooks ar used to allow function components to do everything a class componenet can and more
- useEffect allows lifecycle events, such as every time the component is rendered
- You can pass an array of dependencies to the useEffect hook, telling it to call when the dependency is clicked
- For the useState hook, when you call the setState function, React automatically passes the current state as an argument. You can name this and then use it, for example: `setCount(previousState => previousState+1);`
- an empty array passed as a dependency to useEffect will ensure it only runs once, when rendered

### Reactivity with React

- Three major compnents: props, state, and render
- React has a table with the state values for every component, and will rerender every component that has had a change periodically
- Updates happen asynchronously, so the next line of code might not be able to access the updated state

- `static` means the properties belong to the class itself, rather than to an instance
- `let` is only defined in the block scope (innermost {}), and can be reassigned. It cannot be redeclared in the same scope, but can be declared in multiple scopes
- `var` is defined in the function scope, and can be reassigned or redeclared
- `const` is defined in the block scope, cannot be reassigned and cannot be redeclared 

### Promises

- rendering HTML uses a single thread, so if you have an intensive process use a `Promise`
- call the promise object constructor and pass it an executor function that runs the operation
- state of promise execution in one of three states: pending (currently running asynchronously), fulfilled (completed successfully), rejected (failed to complete)
- `setTimeout` takes a number of milliseconds to wait and a function to call after that time expires
- promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the fulfilled state, calling `reject` sets the promise to the rejected state
- Promise object has three functions: `then` is called if the promise is fulfilled, `catch` is called if the promise is rejected, and `finally` is always called after all processing is completed

### Async/Await

- `await` wraps the execution of a promise and removes the need to chain functions, and will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected'
- you cannot call `await` unless it is called at the top level of the JavaScript, or it is in a function that is defined with the `async` keyword. `async` transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function
- `asycn` declares a function that returns a promise, and the `await` keyword wraps a call to the async function, blocking execution until it has resolved, and returns the result of the promise
- Do the CodePen assignments for promises and async/await