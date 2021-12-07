import { Coach } from "./coach";

export class basketBallCoach implements Coach {
    constructor() {
        
    }
    getDailyWorkout(): string {
        return "work on your handles everyday";
    }
}