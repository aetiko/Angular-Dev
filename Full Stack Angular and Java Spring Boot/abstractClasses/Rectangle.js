"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _width, _height) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._height = _height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "getWidth", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "setWidth", {
        set: function (val) {
            this._width = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "getHeight", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "setHeight", {
        set: function (val) {
            this._width = val;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ', Rectangle Width = ' + this._width + ',  Rectangle Height = ' + this._height;
    };
    Rectangle.prototype.calculateArea = function () {
        return "Recatagle Area = " + this._width * this._height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return "Rectangle Perimeter = " + ((2 * this.getX) + (2 * this.getY));
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
