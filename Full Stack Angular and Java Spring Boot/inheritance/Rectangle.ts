/**
 * Circle class which extends shapes
 * 
 * values width: number
 * values height;
 * 
 * get/set
 * getInfo()
 */

 import { Shape } from "./Shape";

 export class Rectangle extends Shape{
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
         return super.getInfo() + ', width' + this._width+ ',  height' + this._height;
     }
 }