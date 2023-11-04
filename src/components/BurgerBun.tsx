import { IngredientType } from "../type";

const BurgerBun = (ingredients: IngredientType[]) => {
    return ingredients.map((ingregient, index) => {
        const ingregientsArr = [];
        if(ingregient.count>0){
            for(let i = 0; i < ingregient.count; i++){
                ingregientsArr.push(<div key={index + i} className={ingregient.name}></div>);
            }
        }
        return ingregientsArr;
    });
};

export default BurgerBun;

