# Seal Notes

Hello Seally Codini. This huddle page looks amazing! I'm going to write a few things I've noticed because I'm a fussy seal who really just needs more fish.


## A. Design Discrepencies

### A1. Desktop Design Discrepencies
These are just spot the difference type things.

1. Button font looks a bit small. You've specified 16px for content but only 10px for the button. 16px is pretty standard and probably what the button should be too.

2. The social media icons look quite small. 
Hint - the icons are actually a font, so this info should help you change their size in the CSS.

3. In the design the button has a shadow. Try looking up how to use 'box-shadow' in css.

4. Your background image has been applied to the `*` selector in CSS. This means it's applied as the background to EVERY element on the page. This means you're rendering that background image separately for every single element 🤯. (Because you've set it's position to Fixed, you can't tell this as they've all been moved to the position 0,0, but trust me - they're all they're stacked over each other).

Try setting it just on the `body` element. (It should mean you can ditch the position properties).

5. As for changing how the background image appears to look like the design...🤷‍♂️🐙 
To make the image fill the screen, you probably need to change the `background-size` property to `cover` (this will resize an image to fill the whole container AND keep it's aspect ratio (not just stretch and look minging) 

HOWEVER, it looks like transforming (e.g. rotating) a background image is pretty complicated, you've not done pseudo elements in CSS (yet!) and I haven't really so can't give much guidance: https://www.sitepoint.com/css3-transform-background-image/ 

### A2. Active states discrepencies (see the active-states design file)
1. You can change the mouse to be a cursour when it hovers over something, this makes it more obvious there's a link to click. This can be done with the `cursor` css property.
This should be done for the button and the social icons.

2. The text colour on the button should change on hover.

3. The social icons and the circle border changes colour on hover too.

### A3. Mobile design discrepencies
1. Should be some space at the bottom of the page. (You wouldn't notice this on desktop, but on mobile the icons touch the bottom, I can't be tapping stuff that far down).

2. Should the screenshot images be centre aligned as the content gets narrower? Try resizing from desktop to mobile, just after the code breaks to columns, the screenshots look a bit odd on the left handside. (This could be on a small desktop window or a portrait tablet).

3. Should the content text have a max width? This is something you only really notice in the scenario mentioned in (2), where it's broken into column view, but the screen is still quite wide.


## B. Code Review
Just gunna have a quick look at the code and see if there's anything that stands out that could be done differently next time.

### HTML
Looks 👌🏼

### CSS
1. The content is a bit too wide for the screen (you will notice if you make the screen a bit smaller, but not mobile sized).
This is because of annoying little CSS quirk. 
You set `width: 100%` on `.header` in the desktop media query. 100% means 100% of the parent width, NOT 100% of available width. So the width is 100% of the body. HOWEVER, you've also got a `margin-left: 37px`. So imagine the screen is 500px wide, the header is 100% of this so it's 500px wide. But it starts at 37px. So it ends at 537px...! That's 37px off the edge of the screen!

Now you will see the `flex-content` div goes off the edge of the page. That's because the header has now stretched the body to be that 537px wide and the flex-content div just eats up all that space.

Simple solution is to just remove the `width: 100%` property as you don't seem to need it anyway. There are ways to deal with this IF you need something to be 100% width and have a margin, but for now you could avoid it 😅.