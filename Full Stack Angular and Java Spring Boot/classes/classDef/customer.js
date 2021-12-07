"use strict";
/**
 * customer class
 * first name : string
 * last name : String
 *
 * Constructor
 * getter/ setter methods
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetails = void 0;
var CustomerDetails = /** @class */ (function () {
    //define constructor traditional way
    function CustomerDetails(fn, ln, mn) {
        this.firstname = fn;
        this.lastname = ln;
        this.middleName = mn;
    }
    /**
     *
     * Typescript shortcut for creating constructors
     * very simple which defines the properties and assigns them at the same time
     *
     * minimizes boilerplate code
     */
    // constructor(private _fn: string, private _ln:string){
    // }
    /**
     * Defining accessors
     * using getters and setters
     */
    CustomerDetails.prototype.getFn = function () {
        return this.firstname;
    };
    CustomerDetails.prototype.getLn = function () {
        return this.lastname;
    };
    CustomerDetails.prototype.setFn = function (fn) {
        this.firstname = fn;
    };
    CustomerDetails.prototype.setLn = function (ln) {
        this.lastname = ln;
    };
    Object.defineProperty(CustomerDetails.prototype, "fn", {
        /**
         * typescript syntax for accessors
         */
        get: function () {
            return this.firstname;
        },
        set: function (val) {
            this.firstname = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerDetails.prototype, "ln", {
        get: function () {
            return this.lastname;
        },
        set: function (val) {
            this.lastname = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerDetails.prototype, "mn", {
        get: function () {
            return this.middleName;
        },
        set: function (val) {
            this.middleName = val;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerDetails;
}());
exports.CustomerDetails = CustomerDetails;
// instance of class
// let myCust = new CustomerDetails("Ayoola", "Etiko", "Nurudeen");
// console.log(myCust.getFn());
// console.log(myCust.getLn());
// myCust.setFn("Walid");
// myCust.setLn("Fekih");
// console.log(myCust.getFn());
// console.log(myCust.getLn());
// myCust.fn = "David";
// myCust.mn = "Olugbenga";
// myCust.ln = "Williams";
// console.log(myCust.fn);
// console.log(myCust.mn);
// console.log(myCust.ln);
