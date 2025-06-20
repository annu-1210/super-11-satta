
import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-transparent text-black px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Network Error</h1>
      <p className="text-lg mb-6">
        Oops! Something went wrong while fetching data. Please check your internet connection and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="!bg-ironGray text-white px-6 py-2 rounded hover:bg-ironGray transition"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
