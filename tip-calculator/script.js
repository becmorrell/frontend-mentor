const billAmount = document.querySelector("#bill-amount");
const tipButtons = document.querySelectorAll(".btn");
const customPercent = document.querySelector("#tip-percentage-input")
const NOP = document.querySelector("#no-of-people");

const reset = document.querySelector(".btn-reset");

tipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.value);
    })
})

NOP.addEventListener("click", function() {
    console.log(e.target)
});

billAmount.addEventListener("click", () => {
    console.log(billAmount.value)
});

function updateValue(e) {
    log.textContent = e.target.value;
}