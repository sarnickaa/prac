## What is CSS selector specificity and how does it work?
specificity refers to the hierarchy of selectors - the position of a selector type in the heirarchy determines which style declaration is ultimatley applied to an element.

To determine level of specificity - consider:
4 main classes of hierarchy:
  1.Inline styles +1000
  2.ID's (#id) +100
  3.Classes, attributes and pseudo-Classes (.class, [attributes], :hover, :focus etc.) +10
  4.Elements and pseudo-elements (h1, div, :after) +1

  highest score wins specificity

  other rules:

  if specificity is equal - last rule wins

  ID selectors have a higher specificity than attribute selectors:
    div#a {background-color: green;} = WINS
    #a {background-color: yellow;}
    div[id=a] {background-color: blue;}

The embedded style sheet is closer to the element to be styled so it wins. So in the following situation

From external CSS file:
#content h1 {background-color: red;}

In HTML file:
<style>
#content h1 {
    background-color: yellow;
}
</style>
backgound color yellow wins

A class selector beats any number of element selectors
.intro {background-color: yellow;}
h1 {background-color: red;}

The universal selector and inherited values have a specificity of 0 - *, body * and similar have a zero specificity. Inherited values also have a specificity of 0.

## What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
CSS Reset: removes all default browser styling on HTML elements - making it essentially a text file
CSS Normalize: normalize.css preserves some default styling - aimed to make styling consistent across browsers. Generally used as the defult.

## Describe Floats and how they work.
the float property specifies whether an element should be placed along the left or right side of its parent container and how the inline (not block) elements should float around it (i.e. text)

DOCUMENT FLOW (order an element appears in the source code determines where it appears on the rendered page) - both floats and positioned elemenst are removed from the document flow - however when a float leaves the document flow - the space it takes up moves with the element and the content following the floated element will move up to fit beside it if possible.

the clear property is used with float to specify what elements can float beside the cleared element and on what side.
none - Allows floating elements on both sides. This is default
left - No floating elements allowed on the left side
right- No floating elements allowed on the right side
both - No floating elements allowed on either the left or the right side

## Describe z-index and how stacking context is formed
z index specifies the stacking order of an element - a higher z-index element sits infron of a lower z-index element. works ONLY on positioned elements i.e position: absolute, relative, fixed

## Describe BFC(Block Formatting Context) and how it works.
a BFC is part of the visual rendering of a page in which block boxes are laid out. A block formatting context must have a float and an overflow property that is something OTHER than visible. It affects the way a page layout is structured.

## What are the various clearing techniques and which is appropriate for what context?
  1.clear property set on the element
  2.Parent Container Collapse - if a container has nothing but floated element - it collapses to nothing - use one of these methods AFTER the floated elements but BEFORE the container is closed.
      -empty div method: insert an empty div or a <br> element - potentially semantically redundant
      -overflow set to auto or hidden on parent will expand it to fit - can trigger unwanted content hiding or scrollbars as was not designed specifically for clearing
      -:after pseudo selector to apply a clearfix class on the parent. essentially inserts a tiny hidden bit of content after the patent element which clears the float

## How would you approach fixing browser-specific styling issues?
reset or normalize CSS
use libraries like bootstrap for styling
browser specific separate stylesheets.

## How do you serve your pages for feature-constrained browsers?
## What techniques/processes do you use?
use CSS media queries to create a specific version of the style for that particular browser/screen size.

## What are the different ways to visually hide content (and make it available only for screen readers)?
visibility: hidden
display: none
width: 0, height: 0
position: absolute, left: -99999px (position it outside the screen) - this works for most systems

## Have you ever used a grid system, and if so, what do you prefer?
bootstrap and flexbox

## Have you used or implemented media queries or mobile specific layouts/CSS?
have used flexbox for responsive design
@media only screen and (max-width: Npx) {
  element {
            property: value;
          }
}

## Are you familiar with styling SVG?
Scalable Vector Graphics - familiar with creating them in illustrator - small size that compresses well and scales to any size without losing clarity

have used it with <img> tags and changed width/height directly in the tag

## Can you give an example of an @media property other than screen
@media not||only mediatype: screen||print||speech||all and (min-width 900px)

## What are some of the "gotchas" for writing efficient CSS?
avoid universal rules
use the most specific category possible (ID, then class then tag selectors)
= this minimizes the amount of time the browser spends matching

## What are the advantages/disadvantages of using CSS preprocessors?
vanilla css is less flexible and doesn't offer functionality like mixins and functions (SASS), avoids repetition and allows you to modularize across different style-sheets

DISADVANTAGES - debugging is harder due to compilation step i.e. CSS line numbers in the console are meaningless
compilation can be slow (preprocessors must compile to CSS)
css preprocessors are easy to add to the tech-stack on a project but harder to remove down the line

## Explain how a browser determines what elements match a CSS selector.
browser reads the CSS selector RIGHT to LEFT - it traverses up its parent elements to determine a match.

basically the shorter tehs elector chain - the faster a match is found

## Describe pseudo-elements and discuss what they are used for.
a KEYWORD thats added to a selector that allows you to style a certain 'part' or action associated with the selector
:first-line, :before, :after, :hover

## Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
the box-model calculates how much space an element takes up when rendered to the screen

margin<border<padding<element>padding>border>margin

## What does * { box-sizing: border-box; } do? What are its advantages?
changes the width and height of the element to include border and padding i.e. height of the element is now height + vertical padding amount + border if any

## What is the CSS display property and can you give a few examples of its use?
specifies the display behaviour or type of rendering that an element will recieve:
none, hidden, block, inline-block, flex

## What's the difference between inline and inline-block?
inline displays an element as an inline element - does not trigger a new line, does not accept any height/width properties
size is depenedant on the content of the element (i.e. as opposed to a block element that fills up the width of its parent container)

inline-block - the element itself is formatted as an inline element (i.e. its size is dependant on content) HOWEVER you can apply height and with properties. does not trigger a new line

## What's the difference between a relative, fixed, absolute and statically positioned element?
static: default position, part of the normal document flow

absolute: position is determined RELATIVE to the nearest positioned ancestor(parent) if none exists - positioned relative to the window. It is thus removed FROM the normal document flow.

fixed: positioned relative to the viewport - removed from the document flow and maintains this position even when scrolled.

relative: positioned relative to itself - removed from normal document flow and leaves a gap on the page where it would otherwise have been.

## The ‘C’ in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?
in the cases of equal specificity - the latest rule will be applied (cascaded)

## Have you played around with the new CSS Flexbox or Grid specs?
FLEXBOX - used for responsive elements without media queries and for easy centering. Bootstrap is based on flexbox principals.

## Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
responsive design is intended to be flexible across a range of screen sizes and devices. Mobile first design starts with a selected range of devices and designs to maximize user experience there. Progressive engancement is used to add features once the screen size grows.

## Have you ever worked with retina graphics? If so, when and what techniques did you use?
not really - know that they require higher resolution (= twice the display size)
