import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Blog Posts
      </h2>

      {/* Search */}
      <form className="flex gap-3 mb-8">
        <input
          type="text"
          name="search"
          placeholder="Search posts..."
          defaultValue={searchTerm}
          className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </form>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">
          No posts found.
        </p>
      ) : (
        <ul className="space-y-4">
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <Link
                to={`/posts/${post.id}`}
                className="text-lg font-semibold text-indigo-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
