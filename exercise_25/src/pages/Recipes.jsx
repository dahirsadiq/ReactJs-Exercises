import { recipes } from '../data/data';
import { Link } from 'react-router';

const Recipes = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {recipes.map(recipe => (
        <div key={recipe.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <span className="text-sm text-rose-500">{recipe.category}</span>

          <Link
            to={`/recipes/${recipe.id}`}
            className="block mt-2 text-blue-600"
          >
            View Details →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
