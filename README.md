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
