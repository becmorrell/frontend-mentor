# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

- Build out the project to the designs provided

### Links

- Solution URL: [https://github.com/becmorrell/frontend-mentor/tree/main/profile-card](https://github.com/becmorrell/frontend-mentor/tree/main/profile-card)
- Live Site URL: [https://becmorrell.github.io/frontend-mentor/profile-card/](https://becmorrell.github.io/frontend-mentor/profile-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

Major learning points whilst working through this project:

- Drawing out the project design first to help consider how to position containers in order to reuse styles
    - in particular the container which contains the social media details. Initially I placed them all into one container and struggled to position them.
    - in future I would place the soical media numbers in a flexbox together so that I could reuse the styles (as I currently had them in seperate containers and had to style each of these).

    ```html
      <div class="social-container">
                    <div class="left">
                        <div class="number-followers">80k</div>
                        <div class="followers">Followers</div>
                    </div>
                    <div class="middle">
                        <div class="number-likes">803K</div>
                        <div class="likes">Likes</div>
                    </div>
                    <div class="right">
                        <div class="number-photos">1.4k</div>
                        <div class="photos">Photos</div>
    ```
  
    - how to create the rounding edges of the profile card
    - how to create the round profile picture using border-radius and placing a border around this 
    - then position this half way between two containers 
    See code here:
      ```
      css
      .profile-picture {
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid white;
    margin-top: -50px; 
    }
    ```

### Continued development

- continuing practice of flexbox and positioning 
- importing images and positioning of them (in particular background position when there is multiple images)
- embedding different webfonts 


### Useful resources

- [https://www.w3schools.com/css/css3_backgrounds.asp](https://www.w3schools.com/css/css3_backgrounds.asp) - This heleped with some of the positioning with the background images, however I still struggled with having multiple images stacked on top of each other.


## Author

- Frontend Mentor - [@becmorrell](https://www.frontendmentor.io/profile/becmorrell)

