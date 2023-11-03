import meatImage from '../../assets/kotleta.png';
import bekonImage from '../../assets/bekon.png';
import saladImage from '../../assets/kapusta.png';
import cheeseImage from '../../assets/cheese.png';

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bekon', price: 60, image: bekonImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
];

export default INGREDIENTS;