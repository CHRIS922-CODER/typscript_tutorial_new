import { HasFormatter } from "../interfaces/HasFormatter"
export class Payment implements HasFormatter{
    
      constructor(
        readonly recipeint:string,
        private details:string,
        public amount:number
    ){}

    format(){
        
        return `${this.recipeint} owed ${this.amount} for ${this.details} `
    }

}