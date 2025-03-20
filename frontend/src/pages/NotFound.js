import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="container my-5 text-center">
      <div className="not-found-page py-5">
        <h1 className="display-1 fw-bold">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-4">
          Oops! The page <code>{location.pathname}</code> you are looking for does not exist.
        </p>
        <div className="mb-4">
          <p>You might want to check if:</p>
          <ul className="list-unstyled">
            <li>• The URL is typed correctly</li>
            <li>• You have permission to access this page</li>
            <li>• The page has been moved or deleted</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
