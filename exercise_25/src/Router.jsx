import { createBrowserRouter } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import CategoryRecipes from './pages/CategoryRecipes';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'recipes',
        element: <Recipes />
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetail />
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes />
          }
        ]
      }
    ]
  }
]);

export default router;
