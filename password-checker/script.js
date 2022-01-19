const elPassword = document.querySelector("#pass");
const elLength = document.querySelector("#length");
const elNumber = document.querySelector("#number");
const elcapital = document.querySelector("#capital");
const elSymbol = document.querySelector("#symbol");
const elLowerCase = document.querySelector("#lower-case");
const elmatch = document.querySelector("#check");
const elConfirm = document.querySelector("#confirm");

const elImage = document.querySelector(".confirm-default");

const correct = "#81E88C";

 // add event listener for input password
elPassword.addEventListener('input', function(){
    elLength.classList.remove("approved");
    const passwordEntered = elPassword.value
    console.log(passwordEntered);
    if( passwordEntered.length >= 6) {
        elLength.classList.add("approved");
        console.log("enough characters thanks");
    }
    doTheymatch();  

    // using 'for' to check number, Upper, Lower and Character
    elNumber.classList.remove("approved");
    elSymbol.classList.remove("approved");
    elcapital.classList.remove("approved");
    elLowerCase.classList.remove("approved");
    for (letter of passwordEntered) {

        if(!isNaN(letter)) {  
            elNumber.classList.add("approved");
            continue
        }
        if (letter.toLowerCase() === letter.toUpperCase()){
            elSymbol.classList.add("approved");
            continue;
        }
        if (letter.toLowerCase() === letter) {
            elLowerCase.classList.add("approved");   
            continue;
        }
        if (letter.toUpperCase() === letter) {
            elcapital.classList.add("approved"); 
            continue;  
        }
    }

})    

elmatch.addEventListener('input', function(){
        doTheymatch()
})

function doTheymatch() {
const confimPass = elmatch.value
console.log(elmatch.value)
    if (confimPass.length > 0 && confimPass === elPassword.value) {
       elImage.src = "./images/tick.png";
    }
    else {
        elImage.src= "./images/tick-default.png";
    }
}


    //check password number
    // for (number of numbers) {
    //     if(passwordEntered.includes(number)){
    //         console.log("yes");
    //       elNumber.classList.add("approved");
    //         break;
    //     }   
    // }
   
