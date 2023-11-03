import { useState } from 'react';
import INGREDIENTS from './components/Ingredients/Ingredients';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Bekon', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Cheese', count: 0},
  ]);

  const removeIngredient = (name: string) => {
    setIngredients((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );
  };

  const addIngredient = (name: string) => {
    setIngredients((prev) => prev.map(item=>
      item.name === name ? {...item, count: item.count + 1} : item));
  };

  const IngredientsShow = () => {
    return INGREDIENTS.map((ingredient, index) => {
    const amount = ingredients.find((item) => item.name === ingredient.name)?.count || 0;

    return (
      <div key={index} className='card my-3 mx-5'>
        <div className='card-body'>
          <div className='d-flex align-items-center'>
            <div className='col'>
              {ingredient.name}
            </div>
            <div className='col px-5'>
              {ingredient.price} сом
            </div>
            <div className='col'>
              x {amount}
            </div>
            <div className='col'>
              <button onClick={() => addIngredient(ingredient.name)} className='btn btn-success'>Add</button>
            </div>
            <div className='col ms-3'>
              <button onClick={() => removeIngredient(ingredient.name)} className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      </div>
      );
    });
  };
  

  return (
    <>
      <div className='container d-flex'>
        <div className='ingredients-block'>
          {IngredientsShow()}
        </div>
        <div className='my-3'>Fashion</div>
      </div>
    </>
  )
}

export default App
