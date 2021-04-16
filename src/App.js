import React from "react";
import useFetch from "react-fetch-hook";

export default function App() {
  const { isLoading, error, data } = useFetch("https://randomuser.me/api");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
      <img src={data.results[0].picture.medium} alt="random user" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
