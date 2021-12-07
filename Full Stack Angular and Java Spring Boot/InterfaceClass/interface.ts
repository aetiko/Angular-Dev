/**
 * Interfaces are defined with method contracts
 * classes implement interfaces accordingly
 * A class can implement multiple interfaces
 */


import { Coach } from "./coach";
import { basketBallCoach } from "./basketballCoach";
import { cricketCoach } from "./cricketCoach";

let basketBallRoutine = new basketBallCoach();
let cricketRoutine = new cricketCoach();

console.log(basketBallRoutine.getDailyWorkout());
console.log();
console.log(cricketRoutine.getDailyWorkout());
console.log();

let myCoaches : Coach[] = [];

myCoaches.push(basketBallRoutine);
myCoaches.push(cricketRoutine);

for(let eachCoach of myCoaches){
    console.log(eachCoach.getDailyWorkout());
    console.log();
}