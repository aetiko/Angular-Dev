/**
 * Working with modulees
 * using import and export to move class and use in other classes
 */
import {CustomerDetails} from "./customer";

let myCust = new CustomerDetails("Ayoola", "Etiko", "Nurudeen");

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