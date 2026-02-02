import { categories } from '../data/data';
import { Link, Outlet } from 'react-router';

const Categories = () => {
  return (
    <div className="flex gap-6">
      <aside className="w-1/4 bg-white p-4 rounded shadow">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={cat.id}
            className="block py-2 text-rose-500"
          >
            {cat.name}
          </Link>
        ))}
      </aside>

      <main className="flex-1 bg-white p-4 rounded shadow">
        <Outlet />
      </main>
    </div>
  );
};

export default Categories;
