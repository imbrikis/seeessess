# Description
This repo is a series of different scenarios and situations that will aide me in learning various CSS and Javascript concepts. 

## Pages
- Page 01: Event Bubbling : RESOLVED
    - I created a small animation and attempted to toggle a class that would hide and display some divs
    - The divs could be hidden by clicking on the container div or body of the document, however this would not occur
    - The act of clicking on the divs would seemingly bubble up to the parent container 
    
    This was resolved by specifying to only remove the 'visible' class from the div only if the element clicked was the 'container' element. I found that there are multiple properties tied to an event object. This object appears to be produced when an event handler has been triggered. 