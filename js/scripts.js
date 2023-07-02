// Business Logic
function roboger(userNumber) {
    const neighborhood = [];
    for (let index = 0; index <= userNumber; index += 1) {
        let digits = index.toString().split("");
        if (digits.includes("3")) {
            neighborhood.push("Won't you be my neighbor?");
        } else if (digits.includes("2")) {
            neighborhood.push("Boop!");
        } else if (digits.includes("1")) {
            neighborhood.push("Beep!");
        } else {
            neighborhood.push(index);
        }
    }    
    return neighborhood;
}
// User Interface Logic
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let reverseBtn = document.getElementById("reverse");
    let result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        const numberInput = document.getElementById("numberInput").value;
        const listOut = roboger(numberInput);
        result.innerHTML = listOut; 
        document.getElementById("result").removeAttribute("class");
        event.preventDefault();
    });
    reverseBtn.addEventListener("click", function() {
        const numberInput = document.getElementById("numberInput").value;
        const listOut = roboger(numberInput).reverse();
        result.innerHTML = listOut;
        event.preventDefault();
    });
});







