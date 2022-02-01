import "./App.css";
import React, { useState } from "react";
import UseFetch from "./Component/UseFetch";

function App({ login }) {
  const { loading, data, error } = UseFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <a href={data.html_url}>
        <img src={data.avatar_url} alt={data.login} />
      </a>
      {data.name && <h2>{data.name}</h2>}
      <p>{data.login}</p>
      {data.location && <p>{data.location}</p>}
    </div>
  );
}

export default App;
