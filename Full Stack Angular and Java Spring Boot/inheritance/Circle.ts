/**
 * Circle class which extends shapes
 * 
 * values radius: number
 * 
 * get/set
 * getInfo()
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
        return super.getInfo() + ', radius=' + this._radius;
    }
}