import { Link, useRouteError } from 'react-router';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-2">Page not found {error}</p>
      <Link to="/" className="text-blue-500 mt-4 block">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
