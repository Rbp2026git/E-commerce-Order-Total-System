function calculateTotal(customerName, ...prices){
    console.log("Customer Name : ", customerName);
    console.log("No. of items : ", prices.length);
    console.log("Total Amount : ",prices.reduce((total, price) => total += price, 0));
}
calculateTotal("Raushan Bhai Patel", 100, 200, 300, 400, 500);

// This is for better understanding for "Rest Parameter."
// function sum (...numbers){
//     let total = 5;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(sum(2, 4, 6, 8, 10, 12, 14, 16, 18, 20));

// function multiply(...number){
//     return number.reduce((total, num) => {
//         return total * num;
//     }, 1);
// };
// console.log(multiply(2, 3, 4, 2));

// function profile(name, age, ...skills){
//     console.log("Name : ", name);
//     console.log("Age : ", age);
//     console.log("Skills : ", skills);
// }
// profile("Raushan Bhai Patel", 19, "Html", "CSS", "JavaScript");