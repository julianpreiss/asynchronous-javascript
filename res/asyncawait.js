let stocks = {
    fruits: ["Apple", "Orange", "Banana", "Strawberry", "Pineapple", "Watermelon"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let toppingsChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Which toppings would you like?")
            );
        }, 2000);
    });
};

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await toppingsChoice();

    console.log(" D ");
    console.log(" E ");

}

kitchen();

console.log("cleaning the dishes");
console.log("cleaning the tables");
console.log("taking other orders");