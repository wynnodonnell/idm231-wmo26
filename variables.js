function getTotal(subtotal, sales_tax, shipping) {
    var service_fee = .15;
    var tax = subtotal * sales_tax;
    var total = subtotal + tax + shipping;
    var fee = total * service_fee;

    total = total + fee;
    return total;
}

var total = '$' + getTotal(21, .6, 8);
console.log(total)

const flagColors = ['red', 'white', 'blue'];
console.log(flagColors[2]);


// 
console.log(flagColors);

// Remove 'white'
flagColors.splice(1, 1);

console.log(flagColors);
