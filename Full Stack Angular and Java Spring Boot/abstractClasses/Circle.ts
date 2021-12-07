/**
 * Circle class which implements Shape
 * 
 * values radius: number
 * 
 * get/set
 * getInfo():string
 * calculateArea(): number
 */

 import { Shape } from "./Shape";

 export class Circle extends Shape{
     
     
     constructor(theX: number, theY: number, private _radius: number) {
         super(theX, theY);
     }
     get getRadius() : number{
         return this._radius;
     }
 
     set setRadius(val:number){
         this._radius = val;
     }
 
     getInfo(): string{
         return super.getInfo() + ', Circle Radius = ' + this._radius;
     }

     calculateArea(): any {
        return "Cicle Area = " + Math.PI * Math.pow(this._radius, 2);
    }

    calculatePerimeter(): any {
        return "Circle Perimeter = " + (2 * Math.PI * this._radius);
    }
 }