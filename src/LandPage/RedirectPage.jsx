import React from "react";
import { useLocation } from "react-router-dom";

const RedirectPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get("option");
  const selectedDate = searchParams.get("date");

  return (
    <div>
      <h1>Redirect Page</h1>
      <p>Selected Option: {selectedOption}</p>
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
};

export default RedirectPage;
