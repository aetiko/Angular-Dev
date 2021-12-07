/**
 * 
 * Defining variables
 */

 let myFirstVariable: String = "My name is Ayoola Nurudeen Etiko";
 let found: boolean = true;
 let grade: number = 88.6;
 
 /**
  * let keyword helps eliminate the issues of scoppint, capturing and shadowing
  * 
  */
 
 /**
  * strongly typed
  */
 
 myFirstVariable = "Ayoola";
 found = false;
 grade = 100;
 
 /**
  * There could be type mismatch which is caught at compilation time
  */
 
 /**
  * any type
  */
 
 let myData: any = "Ayoola Nurudeen Etiko";
 myData = 7;
 myData = false;
 
 /**
  * Careful as type safety could be lost
  * any used when setting up of generic data
  */
 
 console.log(myFirstVariable+ "\t" + found);
 
 // found = 0;
 
 /**
  * For loops
  * 
  * runn through array of any data
  */
 
 for(let i = 0; i < 5; i++){
     console.log("number" + i);
 }
 
 let anyData: any[] = [5, false, "ayo", 4.0, 'new'];
 
 for(let i = 0; i < anyData.length; i++){
     console.log(anyData[i]);
 }
 
 for( let data of anyData){
     console.log(data);
 }
 
 /**
  * Conditional
  */
 
 if (found){
     console.log("found equals true");
 }else{
     console.log("found equals false");
 }
 
 /**
  * Growable arrays
  */
 
 let boys: string[] = ["walid"];
 boys.push("mate");
 boys.push("matteo");
 
 for(let myG of boys){
     console.log(myG);
 }