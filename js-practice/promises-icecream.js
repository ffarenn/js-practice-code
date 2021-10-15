// callbacks - calling a function
function one(two) {
    console.log('step 1 complete. Please call step 2');
    two()
}

function two() {
    console.log('step 2');
}

one(two);

//  example
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};


// ***********BAD CODE*****************
// let order = (Fruit_name, call_production) => {

//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        
//         call_production()

//     }, 2000)

// }

// let production = () => {
//     setTimeout(() => {
//         console.log('production has started');

//         setTimeout(() => {
//             console.log("the fruit has been chopped");

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                
//                 setTimeout(() => {
//                     console.log("machine was started");

//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was selected`);

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added as toppings`);

//                             setTimeout(() => {
//                                 console.log("serve ice cream");
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0)
// }

// order(0, production)
// ***********BAD CODE*****************

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time)

        }

        else {
            reject(console.log("our shop is closed"))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    
    .then(() => {
        return order(0, () => console.log("production has started"))
    })

    .then(() => {
        return order(2000, () => console.log("the fruit has been chopped"))
    })

    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        })
    })

     .then(() => {
        return order(1000, () => console.log("machine was started"))
     })
    
      .then(() => {
        return order(2000, () => console.log(`${stocks.holder[0]} was selected`))
      })
    
        .then(() => {
        return order(3000, () =>  console.log(`${stocks.toppings[0]} was added as toppings`))
        })

        .then(() => {
        return order(2000, () =>   console.log("serve ice cream"))
        })
    

    .catch(() => {
    console.log("Customer left");
    })

    .finally(() => {
    console.log("day ended, shop is closed");
})
