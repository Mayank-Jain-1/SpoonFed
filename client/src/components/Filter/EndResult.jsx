import React from "react";

const EndResult = ({ index }) => {
  if (index) {
    return <h1 className="text-primary fw-semibold text-center py-4">No more results found</h1>;
  } else
    return (
      <div className="w-100 h-300 shadow-md bg-white d-flex align-items-center justify-content-center">
        <h1
          className="text-primary fw-semibold"
        >
          Sorry. No results found
        </h1>
      </div>
    );
};

export default EndResult;
