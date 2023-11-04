import { IngredientType } from "../type";
import INGREDIENTS from "./Ingredients";

interface Props {
  ingredients: IngredientType[];
  removeIngredient: (name: string) => void;
  addIngredient: (name: string) => void;
}

const IngredientsShow: React.FC<Props> = (props) => {
  return INGREDIENTS.map((ingredient, index) => {
  const amount = props.ingredients.find((item) => item.name === ingredient.name)?.count || 0;

  return (
      <div key={index} className='card my-3 mx-5'>
        <div className='card-body'>
          <div className='d-flex align-items-center'>
            <div className='col'>
              <button onClick={() => props.addIngredient(ingredient.name)} className="ing-btn">
                <img src={ingredient.image} className='ingredient-image'/>
              </button>
            </div>
            <div className='col'>
              {ingredient.name}
            </div>
            <div className='col px-5'>
              {ingredient.price} сом
            </div>
            <div className='col'>
              x {amount}
            </div>
            <div className='col ms-3'>
              <button onClick={() => props.removeIngredient(ingredient.name)} className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      </div>
      );
  });
};

export default IngredientsShow;