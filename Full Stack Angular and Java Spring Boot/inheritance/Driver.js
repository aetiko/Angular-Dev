"use strict";
/**
 * Here we are going to be using the power of inheritance
 *
 * define common properties and methods in the super class
 * subclasses can extend superclasses and add properties and methods
 * support for abstract classers and overidding
 *
 * Type script only supports single inheritance but you could implement multiple interfaces
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(10, 15);
console.log(myShape);
var myCicle = new Circle_1.Circle(5, 10, 2.5);
console.log(myCicle);
var myRectanglr = new Rectangle_1.Rectangle(5, 10, 5, 10);
console.log(myRectanglr);
