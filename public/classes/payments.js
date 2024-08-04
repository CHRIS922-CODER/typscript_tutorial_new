export class Payment {
    constructor(recipeint, details, amount) {
        this.recipeint = recipeint;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipeint} owed ${this.amount} for ${this.details} `;
    }
}
