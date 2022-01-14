const billAmount = document.querySelector("#bill-amount");
const tipButtons = document.querySelectorAll(".btn");
const customPercent = document.querySelector("#tip-percentage-input")
const NOP = document.querySelector("#no-of-people");
const elPeoplecontainer = document.querySelector('.NOP-container');
const error = document.querySelector('.error-text');

const reset = document.querySelector(".btn-reset");

let tipOutput = document.querySelector(".tip-output");
let totalOutput = document.querySelector(".total-output");

let billValue = 0;
let people = 0;
let tipTotal = 0;
let percentage = 0;
let totalAmountpp = 0;

//get value for user input of bill
billAmount.addEventListener('input', function(){
    billValue = parseFloat(billAmount.value);
    console.log(billValue);
    calculation();
});

//get value of tip button used
tipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      percentage = (e.target.value) / 100;
        console.log(percentage);

    const activeButtons = document.querySelectorAll(".active");
        
    activeButtons.forEach(item => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');

    calculation();   
})
});

//get custom value tip
customPercent.addEventListener('input', function() {
    percentage = (parseFloat(customPercent.value)) / 100; 
    console.log(percentage);
    calculation();
})

//get NOP entered
NOP.addEventListener("input", function() {
    people = parseInt(NOP.value);

    if (!people){
        error.classList.add('reveal-error');
        elPeoplecontainer.classList.add('error');
    }
    else {
        error.classList.remove('reveal-error');
        elPeoplecontainer.classList.remove('error');
    }
    calculation();

});

//reset button
    reset.addEventListener("click", function() {
        billAmount.value = null;
        NOP.value = null;
        customPercent.value = null;

    // reset variables
    billValue = 0;
    percentage = 0;
    people = 0;    
        
    calculation();
    })

//tip amount = (billamount * 10%) / NOP
//Total amount PP = ((Billamount 10%) + bill amount) / NOP

function calculation() {
    if (people > 0){
        tip = billValue * percentage
        tipTotal = tip / people;
    tipOutput.textContent = Math.round(tipTotal * 100) / 100;

    totalAmountpp = (billValue + tip) / people;
    totalOutput.textContent = Math.round(totalAmountpp * 100) / 100;
    }

    else {
        tipOutput.textContent = "0.00";
        totalOutput.textContent  = "0.00";
    }
    } 
