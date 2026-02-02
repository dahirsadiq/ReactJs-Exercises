import { useParams } from 'react-router';
import { recipes } from '../data/data';

const CategoryRecipes = () => {
  const { categoryId } = useParams();
  const filtered = recipes.filter(
    recipe => recipe.category === categoryId
  );

  if (filtered.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {categoryId} Recipes
      </h2>
      {filtered.map(recipe => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
};

export default CategoryRecipes;
