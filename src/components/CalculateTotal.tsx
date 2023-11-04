import { IngredientType } from "../type";
import INGREDIENTS from "./Ingredients";

const CalculateTotalPrice = (ingredients: IngredientType[]) => {
    return ingredients.reduce((acc, item) => {
        const ingredient = INGREDIENTS.find((ing) => ing.name === item.name);
        return acc + (ingredient?.price || 0) * item.count;
    }, 30); 
};

export default CalculateTotalPrice;