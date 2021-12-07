"use strict";
/**
 * Interfaces are defined with method contracts
 * classes implement interfaces accordingly
 * A class can implement multiple interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
var basketballCoach_1 = require("./basketballCoach");
var cricketCoach_1 = require("./cricketCoach");
var basketBallRoutine = new basketballCoach_1.basketBallCoach();
var cricketRoutine = new cricketCoach_1.cricketCoach();
console.log(basketBallRoutine.getDailyWorkout());
console.log();
console.log(cricketRoutine.getDailyWorkout());
console.log();
var myCoaches = [];
myCoaches.push(basketBallRoutine);
myCoaches.push(cricketRoutine);
for (var _i = 0, myCoaches_1 = myCoaches; _i < myCoaches_1.length; _i++) {
    var eachCoach = myCoaches_1[_i];
    console.log(eachCoach.getDailyWorkout());
    console.log();
}
