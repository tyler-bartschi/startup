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
- 
