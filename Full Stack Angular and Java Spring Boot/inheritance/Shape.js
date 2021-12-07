"use strict";
/**
 * This shape class uses x and y
 * get and set methods for x and y
 * getInfo(String)
 * we would also be exporting this class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "getX", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "getY", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "setX", {
        set: function (val) {
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "setY", {
        set: function (val) {
            this._y = val;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return 'x=' + this._x + ',y=' + this._y;
    };
    return Shape;
}());
exports.Shape = Shape;
