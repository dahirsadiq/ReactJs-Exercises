import { NavLink } from 'react-router';


const Navbar = () => {
  return (
<nav className="bg-rose-500 p-4 text-white flex justify-around items-center">
  
  {/* Logo */}
  <div className="text-2xl font-bold tracking-wide">
    Recibe<span className="text-rose-200">Book</span>
  </div>

  {/* Menu */}
  <div className="flex gap-8">
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive
          ? "font-semibold underline underline-offset-4"
          : "hover:text-rose-200"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/recipes"
      className={({ isActive }) =>
        isActive
          ? "font-semibold underline underline-offset-4"
          : "hover:text-rose-200"
      }
    >
      Recipes
    </NavLink>

    <NavLink
      to="/categories"
      className={({ isActive }) =>
        isActive
          ? "font-semibold underline underline-offset-4"
          : "hover:text-rose-200"
      }
    >
      Categories
    </NavLink>
  </div>

</nav>
  );
};

export default Navbar;



