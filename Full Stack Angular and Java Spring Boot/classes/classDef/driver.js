"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Working with modulees
 */
var customer_1 = require("./customer");
var myCust = new customer_1.CustomerDetails("Ayoola", "Etiko", "Nurudeen");
console.log(myCust.getFn());
console.log(myCust.getLn());
myCust.setFn("Walid");
myCust.setLn("Fekih");
console.log(myCust.getFn());
console.log(myCust.getLn());
myCust.fn = "David";
myCust.mn = "Olugbenga";
myCust.ln = "Williams";
console.log(myCust.fn);
console.log(myCust.mn);
console.log(myCust.ln);
