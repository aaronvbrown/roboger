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




//tests for node
console.log(roboger(0));
console.log(roboger(1));
console.log(roboger(2));
console.log(roboger(3));



