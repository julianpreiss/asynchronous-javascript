let stocks = {
    fruits: ["Apple", "Orange", "Banana", "Strawberry", "Pineapple", "Watermelon"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {

            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("shop is closed"));
        }
    })

};

order(2000, () => console.log(`${stocks.fruits[0]} flavour was ordered`))
    .then(() =>{
        return order(0000, () => console.log('Production has started'));
    })
    .then(() => {
        return order(2000, () => console.log('The fruit was chopped'));
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was poured`))
    })
    .then(() => {
        return order(1000, () => console.log(`start the machine`));
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.holder[0]} was placed`));
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} was added`));
    })
    .then(() => {
        return order(1000, () => console.log(`ice cream was served`));
    })
    .catch(() => {
        console.log("customer has left");
    })
    .finally(() => {
        console.log("shop is closed");
    });