# Frontend Mentor - FAQ accordion card solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked


### Links

- Solution URL: [https://github.com/becmorrell/frontend-mentor/tree/main/faq-card](https://github.com/becmorrell/frontend-mentor/tree/main/faq-card)
- Live Site URL: [https://becmorrell.github.io/frontend-mentor/faq-card/index.html](https://becmorrell.github.io/frontend-mentor/faq-card/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### Challenges 🧠

HTML:
```html: 
  - Initially I started out with the layout of containers for the image and question card side by side
  - When I got to the responsive desktop design - this proved difficult to position the image alongside the questions
  - I had to reorganise my HTML structure to encorporate the image within the question card so that they grow at the same rate in the desktop design 
  ```

CSS:
```css
  - I had fun adding the gradient on the background!
  - Learnt how to use :first-child to style the first <p> but not the sibling in the same container
  
  - I found the animation of revealing the answer the most challenging part. I used a transiiton on the height of the <div> from max-height 0 to a much larger number. However, the rate of opening and closing of a max-height are different over the 0.3s and therefore it looks like there is a slight delay on closing it. Further research neeeded on this! 🤓
  - I realise I need to add the transition on the original state of the container rather than when it is in the active state, to allow for animation on both the expanding and collapsing of the container.  
```

JavaScript:
```js
  - I added an event target on the 'clicked' question and used .closest to find the closest 'question' <div>. This means that if you click on the <p> or the <div> if finds the closest 'question' to add/remove the `expand` class. 


```

## Author

- Linkedin - [https://www.linkedin.com/in/beccamorrell/](https://www.linkedin.com/in/beccamorrell/)

