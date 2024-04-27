// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function Sandwiches(...items: string[]): void {
    console.log('Sandwiches order:');
    for (let i = 0; i < items.length; i++) {                        // for loop
        console.log(` ${items[i]}`)
    }
}
console.log("Have a nice meal.")

Sandwiches("Cheese", "Ketchup", "Mayonies", "chicken");
Sandwiches("Salad", "Egg");
Sandwiches("Capcicum", "Beef pattie");