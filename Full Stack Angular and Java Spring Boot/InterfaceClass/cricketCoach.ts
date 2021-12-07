import { Coach } from "./coach";

export class cricketCoach implements Coach {
    constructor() {}
    getDailyWorkout(): string {
        return "make sure you get you swinging done everyday";
    }
}