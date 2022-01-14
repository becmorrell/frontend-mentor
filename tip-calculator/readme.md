# Frontend Mentor - Tip Calculator 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Screenshot](#screenshot)
  - [Challenges](#challenges)
- [Author](#author)

## Overview


### The challenge

Users should be able to:

- Input cost of the bill manually 
- Select a tip or enter custom tip using buttons 
- Enter number of people to split the bill between
- View the optimal layout depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Solution URL: [https://github.com/becmorrell/frontend-mentor/tree/main/tip-calculator/index.html](https://github.com/becmorrell/frontend-mentor/tree/main/tip-calculator/index.html)
- Live Site URL: [https://becmorrell.github.io/frontend-mentor/tip-calculator/index.html](https://becmorrell.github.io/frontend-mentor/tip-calculator/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### Screenshot 

<p align ="left">Active State:</p>


<img width="400" alt="tip" src="https://user-images.githubusercontent.com/77584099/149530679-935203b4-7751-4a8b-adc9-7fdefd585a46.png">



### Challenges 🧠

**CSS**

  * I found using the selector `tip-container > *` useful to style with padding instead of adding it individually to each child inside that container. 
  * I created a simple setup for this project to be able to flow easily from mobile device to desktop.

  * Used a `@media (hover: hover)` query to only allow hover states on hover-capable devices.



**JavaScript:**

I practiced the following:

* Using `ParseFloat()` to pass a number entered by the user into a floating point number.
* Adding `eventListener` on all buttons:
                            * for each button, the correct percentage is calculated
                            * for the custom input button, the input is calculated into a percentage.

* Added "active" state to selected tip button:
                                        * using `document.querySelectorAll("active)` to remove classlist prior to adding new active state (This allows only one button to be selected at any particular time).
                                        * added active state to current event target.

* Created ```function calculation()```:
                                        * Calculates total tip per person to be paid.
                                        * Calculates total price per person including tip. 
                                        * Rounds to 2 decimal places.
                                        * Will not run if number of people is not entered.
                                        * Updates instantly as cost / tip / number of people is changed by user. 


## Author

- Linkedin - [https://www.linkedin.com/in/beccamorrell/](https://www.linkedin.com/in/beccamorrell/)
