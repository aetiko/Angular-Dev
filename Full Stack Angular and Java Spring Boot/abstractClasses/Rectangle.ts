/**
 * Circle class which implements shapes
 * 
 * values width: number
 * values height;
 * 
 * get/set
 * getInfo(): string
 * calculateArea(): number
 */

import { Shape } from "./Shape";


 export class Rectangle extends Shape {
    constructor(theX: number, theY: number, private _width: number, private _height: number) {
        super(theX, theY);
    }
    get getWidth() : number{
        return this._width;
    }

    set setWidth(val:number){
        this._width = val;
    }

    get getHeight() : number{
       return this._width;
   }

   set setHeight(val:number){
       this._width = val;
   }

    getInfo(): string{
        return super.getInfo() + ', Rectangle Width = ' + this._width+ ',  Rectangle Height = ' + this._height;
    }

    calculateArea(): any {
        return "Recatagle Area = " + this._width*this._height;    }

    calculatePerimeter(): any {
        return "Rectangle Perimeter = " + ((2*this.getX) + (2*this.getY));
    }
}