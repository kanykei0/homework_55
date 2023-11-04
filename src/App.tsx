import { useState } from 'react';
import CalculateTotalPrice from './components/CalculateTotal';
import BurgerBun from './components/BurgerBun';
import IngredientsShow from './components/IngredientsShow';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Bacon', count: 0},
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

  return (
    <>
      <div className='container d-flex'>
        <div className='ingredients-block'>
          <IngredientsShow 
            ingredients={ingredients}
            removeIngredient={removeIngredient}
            addIngredient={addIngredient}
          />
          Total: {CalculateTotalPrice(ingredients)} (bun price: 30)
        </div>
        <div className='my-3'>
          <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {BurgerBun(ingredients)}
          <div className="BreadBottom"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
