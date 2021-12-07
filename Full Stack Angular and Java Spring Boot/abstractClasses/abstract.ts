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

 import { Shape } from "./Shape";
 import { Rectangle } from "./Rectangle";
 import { Circle } from "./Circle";
 
 
 let myCicle = new Circle(5, 10, 2.5);
 console.log();
 console.log(myCicle);
 console.log();
 
 let myRectanglr = new Rectangle(5, 10, 5, 10);
 console.log(myRectanglr);
 console.log();

 let theShapes: Shape[] = [];
theShapes.push(myCicle);
theShapes.push(myRectanglr);

for(let myShapes of theShapes){
    console.log(myShapes.getInfo());
    console.log(myShapes.calculateArea());
    console.log(myShapes.calculatePerimeter());
    console.log();
}