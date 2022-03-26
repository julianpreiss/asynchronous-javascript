let stocks = {
    fruits: ["Apple", "Orange", "Banana", "Strawberry", "Pineapple", "Watermelon"],
    liquid: ["water", "ice"],
    holder: ["cup", "cone", "stick"],
    toppings: ["chocolate", "peanuts"],
};


let order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} flavour was ordered`);

        callProduction();
    }, 2000);

};

let production = () => {

    setTimeout(() => {
        console.log("order received, starting production...");

        setTimeout(() => {
            console.log("the fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added to the fruit`);
                
                setTimeout(() => {
                    console.log("the machine was started");

                    setTimeout(() => {
                        console.log(`the ${stocks.holder[0]} was filled with the icecream`);

                        setTimeout(() => {
                            console.log(`the ${stocks.toppings[0]} was added to the icecream`);

                            setTimeout(() => {
                                console.log("the icecream is served and ready");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);


};

order("1", production);

