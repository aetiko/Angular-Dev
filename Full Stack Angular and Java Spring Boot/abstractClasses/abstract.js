"use strict";
/**
 * Abstract class represents a general concept
 * eg shape vechile computer
 *
 * We can not create an instance of an abstract class
 * abstract classes can also have abstract methods
 *
 * abstract method must be implemented by concrete subclasses
 * hence we can only create my circle or my rectangle
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var myCicle = new Circle_1.Circle(5, 10, 2.5);
console.log();
console.log(myCicle);
console.log();
var myRectanglr = new Rectangle_1.Rectangle(5, 10, 5, 10);
console.log(myRectanglr);
console.log();
var theShapes = [];
theShapes.push(myCicle);
theShapes.push(myRectanglr);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var myShapes = theShapes_1[_i];
    console.log(myShapes.getInfo());
    console.log(myShapes.calculateArea());
    console.log(myShapes.calculatePerimeter());
    console.log();
}
