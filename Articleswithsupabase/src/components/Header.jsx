import { use, useState } from "react";
import { Link } from "react-router";
import { RiUserLine } from "react-icons/ri";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen , setIsDropdownOpen]=useState(false);
  const  avatar_url =
  'https://media.istockphoto.com/id/1305462732/photo/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=o5eN6dD8mecuXe9KWp3A66_dZ0XZtJ_Sms99sSTgWSo='

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container */}
        <div className="flex justify-between h-16">

          {/* LEFT SIDE */}
          <div className="flex">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                Blogify
              </Link>
            </div>

            {/* NAV */}
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">

              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-900"
              >
                Home
              </Link>

              <Link
                to="/articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900"
              >
                Articles
              </Link>

              {isLoggedIn && (
                <>
                  <Link
                    to="/editor"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900"
                  >
                    Write
                  </Link>

                  <Link
                    to="/Manage_articles"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900"
                  >
                    My Articles
                  </Link>
                </>
              )}

            </nav>
          </div>

          {/* RIGHT SIDE (Auth buttons example) */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
            
                <Link to="/singin" className="text-sm font-medium text-gray-700 hover:text-orange-600">
                  Sign In
                </Link>
                <Link to="/singup" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700">
                  Sign Up
                </Link>
              </>
            ) : (
               <>
                                <div className='text-sm text-gray-700'>
                                    <span>Hello , Dahir</span>
                                </div>

                                <div className='relative'>
                                    <button className='flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        {
                                            avatar_url ? <img className='w-8 h-8 rounded-full' src={avatar_url} /> : <FaUser className='text-gray-600' />
                                        }
                                    </button>

                                    {/* dropdown menu */}
                                    {isDropdownOpen && (
                                        <div
                                            className='absolute right-0 w-48 bg-white mt-1 rounded-md shadow-lg z-50'
                                            onMouseLeave={() => setIsDropdownOpen(false)}
                                        >
                                            <div className='absolute h-3 w-full top-[12px] '></div>
                                            <Link className='block px-4 py-2 text-sm text-gray700 hover:bg-gray-100'>Your Profile</Link>
                                            <Link className='block px-4 py-2 text-sm text-gray700 hover:bg-gray-100'>Manage Articles</Link>

                                            <button
                                                onClick={() => logout()}
                                                className="block w-full  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Signout</button>

                                        </div>
                                    )}
                                </div>
                            </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
