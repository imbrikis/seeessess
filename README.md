# Description

This repo is a series of different scenarios and situations that will aide me in learning various CSS and Javascript concepts.

## Pages

---

### Page 01: Event Bubbling

- I created a small animation and attempted to toggle a class that would hide and display some divs
- The divs could be hidden by clicking on the container div or body of the document, however this would not occur
- The act of clicking on the divs would seemingly bubble up to the parent container

- This was resolved by removing the 'visible' class from the div only if the clicked element was the 'container' element.

What I learned:

- I found that there are multiple properties tied to an event object. This object appears to be produced when an event handler has been triggered.

---

### Page 02: Line Tracing Animation

- I wanted to show a hidden design when the user performs some arbitrary action
- I set a full page width and length div with a background-image linear-gradient property and set an animation to move the linear gradient down the screen
- I then overlayed a transparent PNG and attached the click-event to this element
- The result is an effect I was looking for

What I learned:

- I can create an interesting design and have it display in a creative way. I originally thought this was only possible with SVG masking.

---

### Page 03: Collision Detection

- I'm attempting to understand collision detection
- My design will require me to brush up on vectors and parabolic functions

---

### Page 04: Text Contrast Animation

- I've seen nav items in a sticky navbar where the color property changes as the page scrolls down
- I like the idea of changing the color property of text as it passes through an image or other item, to produce a strong color contrast
- This effect will need to be automatically handled through some means of the underlying color and the color of the overlaying text
- I'm not sure if this can be changed on a pixel-by-pixel basis

---

### Page 05: Responsive Design

- This project involves making a responsive webpage
- I've ran into several issues with various elements and their layouts in a responsive container
- This project should help me learn how to work with various elements and layouts

---

### Page 06: Hamburger Menu!!!

- This project involved making a hamburger menu navigation icon
- The site is responsive (hides the hamburger after a 900px breakpoint)

What I learned:

- Hiding and adding classes with JavaScript
- More specifically, creating various classes that will style the various nav elements during certain events (like when the hamburger icon is active)

### Page 07: Flip Image

- FlipImage explores one aspect of image manipulation — image rotation
- This app displays a square pane containing a single image presented in a 2x2 matrix
- Using a set of up, down, left, and right arrows adjacent to each of the images the user may flip them vertically or horizontally

What I learned:

- Lots of CSS grid and flexbox and how to layout elements
- Manipulation of the DOM: keeping track of the transform property for all img elements by creating a local 'state' array, all with vanilla JS
- CSS image layout

---

### Page 08: Infinite Horizontal Scroll

- A container div acts as a viewport for enclosed divs
- The enclosed divs overflow the container horizontally (inline-block elements) and a scrollbar appears
- The idea is to hide the scroll bar and continuously scroll the items left or right
- This will only be needed on mobile, so hiding the scrollbar won't be an issue (not will the issue of the scrollbar 'jumping')

What I learned:

- How to use the Intersection Observer API and how to use observers to trigger various events

---

### Page 09: Click the box, make it move

- A box that when clicked, moves. Amazing ;)

What I learned:

- I just wanted to make a box that moved and turned into a circle when clicked. Nothing was really learned, but it was fun

---

### Page 10: Side-scrolling Nav w/dropdown

- A side-scrolling navbar with select elements. The elements should infinitely scroll horizontally. A work in progress

### Page 11: async example

- Learning about async / await

### Page 12: Canvas Template

- A template for HTML5 canvas messarounds

### Page 13: Canvas - Fun Stuff

- Not sure what this is just yet

### Page 14: 3D Cube

- I'm designing a new portfolio website that will be laid out with a cube as the navigation
- This project will demonstrate the CSS and JS needed to provide 3D rendering and navigation

### Page 15: Cookies

- My first dive into understanding how to implement cookies with vanilla JS

What I learned:

- Cookies should be used when you need to communicate something from the client back to the server
- Otherwise, you can use localStorage
- LocalStorage is much easier to use

### Page 16: Noob vs Pro code - follow along

- A follow-along to https://www.youtube.com/watch?v=g2nMKzhkvxw

What I learned:

- How to properly destructure function parameters
- Refactoring poorly written code

### Page 17: Promises

- Learning promises and Async/await (for the tenth time...)

### Page 18: Mobile layout resizing issues

- I've noticed that windows resize on some mobile browsers (the presence of the top url bar causes this)
- This project attempts to find out if I can implement a workaround

### Page 19: Loading Icon

- A mobile loading icon
- This icon has 'fins' that circle it when it's ready to be clicked for form submission, etc

What I learned:

- How to use multiple divs to place items out evenly in a circular area (you don't necessarily need to use separate divs, but I had to in order to run animations on them)

### Page 20: Expanding items

- Trying to understand how padding may or may not work in flexbox
- Items in a containing div must have an initial width, then shrink depending on neighboring sibling elements

What I learned:

- You must use margin on the child text itself instead of padding on the parent as flexbox does not account for padding when used in this manner

### Page 21: Random color change

- Come up with random color values, displayed as a background color of the body element on 'click'

What I learned:

- Not much here, just an example for a friend

### Page 22: Window Desktop-like Tiles

- Create the functionality of operating system files where you can click on a file window to bring it into focus

What I learned:

- I developed an algorithm to handle the reordering of the z-indexes for the windows 😁

Further:

- Make the windows draggable
