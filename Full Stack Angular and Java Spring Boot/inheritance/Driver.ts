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

import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let myShape = new Shape(10, 15);
console.log(myShape);

let myCicle = new Circle(5, 10, 2.5);
console.log(myCicle);

let myRectanglr = new Rectangle(5, 10, 5, 10);
console.log(myRectanglr);