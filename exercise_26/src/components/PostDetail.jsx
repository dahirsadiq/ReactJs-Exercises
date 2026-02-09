import { useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { PostsContext } from "../context/PostsContext";

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = parseInt(postId, 10);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Post not found.
      </p>
    );
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {post.title}
      </h2>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-8">
        {post.content}
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-6">
        <button
          onClick={() => handleNavigation("prev")}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          ← Previous
        </button>

        <button
          onClick={() => handleNavigation("next")}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Next →
        </button>
      </div>

      {/* Navigation Info */}
      {location.state?.fromPostId && (
        <p className="text-sm text-gray-500">
          You navigated here from post ID:{" "}
          <span className="font-medium">
            {location.state.fromPostId}
          </span>
        </p>
      )}
    </div>
  );
};

export default PostDetail;
