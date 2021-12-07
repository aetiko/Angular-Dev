/**
 * This shape class uses x and y
 * get and set methods for x and y
 * getInfo(): String
 * Abstract method calculateArea(): number
 * as circle and rectangle have different areas
 */

 export abstract class Shape {
    constructor(private _x:number, private _y:number) {
    }

    get getX(): number{
        return this._x;
    }

    get getY(): number{
        return this._y;
    }

    set setX(val:number){
        this._x = val;
    }

    set setY(val: number){
        this._y = val;
    }

    getInfo(): string{
        return 'x=' + this._x + ',y=' + this._y;
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}