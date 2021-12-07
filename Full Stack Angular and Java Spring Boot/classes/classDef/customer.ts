/**
 * customer class
 * first name : string
 * last name : String
 *
 * Constructor
 * getter/ setter methods
 */

export class CustomerDetails {
/**
 * Access Modifiers
 * public: accessible to all classes
 * protected: propertty is only accessible in current class and subclasses
 * private: property only accessible in current class
 */

    private firstname: string;
    private lastname: string;
    private middleName: string;

    //define constructor traditional way

    constructor(fn:string, ln:string, mn:string){
        this.firstname = fn;
        this.lastname = ln;
        this.middleName = mn;
    }
    /**
     * 
     * Typescript shortcut for creating constructors
     * very simple which defines the properties and assigns them at the same time
     * 
     * minimizes boilerplate code
     */

    // constructor(private _fn: string, private _ln:string){

    // }
    /**
     * Defining accessors
     * using getters and setters
     */

    public getFn(): String{
        return this.firstname;
    }

    public getLn(): String{
        return this.lastname;
    }

    public setFn(fn:string): void{
        this.firstname = fn;
    }
    public setLn(ln:string): void{
        this.lastname = ln;
    }

     /**
      * typescript syntax for accessors
      */

     public get fn(): string{
         return this.firstname;
     }

     public get ln(): string{
         return this.lastname;
     }

     public get mn(): string{
         return this.middleName;
     }

     set fn(val:string){
         this.firstname = val;
     }

     set ln(val:string){
         this.lastname = val;
     }

     set mn(val:string){
         this.middleName = val;
     }
}
    // instance of class
    // let myCust = new CustomerDetails("Ayoola", "Etiko", "Nurudeen");

    // console.log(myCust.getFn());
    // console.log(myCust.getLn());

    // myCust.setFn("Walid");
    // myCust.setLn("Fekih");

    // console.log(myCust.getFn());
    // console.log(myCust.getLn());

    // myCust.fn = "David";
    // myCust.mn = "Olugbenga";
    // myCust.ln = "Williams";

    // console.log(myCust.fn);
    // console.log(myCust.mn);
    // console.log(myCust.ln);

