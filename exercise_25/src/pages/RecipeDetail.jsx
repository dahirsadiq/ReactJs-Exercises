import { useParams } from 'react-router';
import { recipes } from '../data/data';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>

      <h3 className="mt-4 font-semibold">Ingredients</h3>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Instructions</h3>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
