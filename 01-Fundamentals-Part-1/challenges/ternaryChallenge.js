const bill = 375;


const tip = bill >= 50 && bill<=300 ? (15/100)*bill: (20/100)*bill;
console.log(bill);
console.log(tip);
console.log(bill + tip);
