const colors = ["#FF4D4D", "#FF974D", "#FFD84D", "#4DFF9F", "#4DC9FF", "#7B4DFF", "#FF4DE2", "#FF4D97"];

const button = document.querySelector("#btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {
    console.log(document.body);

// get random number between 0-3 (array above starting at 0)    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
   return Math.floor((Math.random() * 8));
}