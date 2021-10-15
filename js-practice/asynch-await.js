let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

// EXAMPLE 2
function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("shop is closed"))
        }
    })
}

async function kitch() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);
      
        await time(0)
        console.log("start the production");

        await time(2000)
        console.log("cut the fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000)
        console.log("start the machine");

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000)
        console.log("served ice cream");
    }
    catch (error) {
        console.log("customer left", error);
    }
    finally {
        console.log("day ended, shop is closed");
    }
}

kitch()



// EXAMPLE 1
async function order() {
    try {
        await abc;
    }
    catch (error) {
        console.log("abc does not exsist", error);
    }
    finally {
        console.log("run code anyways");
    }
}

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("which toppings would you love?"))
        }, 3000)
    })
}

async function kitchen() {
    console.log("a");
    console.log("b");
    console.log("c");

    await toppings_choice()
    console.log("d");
    console.log("e");
}

kitchen()

console.log("cleaning the dishes");
console.log("cleaning the tables");
console.log("taking other order");
// EXAMPLE 1