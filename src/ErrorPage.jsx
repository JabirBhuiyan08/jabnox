
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-violet-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-violet-600">404</h1>
        <p className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 text-white bg-violet-600 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
