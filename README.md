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
