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

Contextual selectors are more specific than a single element selector - The embedded style sheet is closer to the element to be styled. So in the following situation

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
      -overflow set to auto or hidden on parent will expand it to fit - can trigget unwanted content hiding or scrollbars as was not designed specifically for clearing
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
Scalable Vector Graphics - familliar with creating them in illustrator - small size that compresses well and scales to any size without losing clarity

have used it with <img> tags and changed width/height directly in the tag

## Can you give an example of an @media property other than screen
@media not||only mediatype: screen||print||speech||all and (min-width 900px)

## What are some of the "gotchas" for writing efficient CSS?
avoid universal rules
use the most specific category possible (ID, then class then tag selectors)
= this minimizes the amount of time the browser spends matching

## What are the advantages/disadvantages of using CSS preprocessors?






mm
