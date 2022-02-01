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
    <div className="App">
      <h1>UseFetch Custom Hook</h1>
      <div className="App__card">
        <div className="App__card-img">
          <a href={data.html_url}>
            <img src={data.avatar_url} alt={data.login} />
          </a>
          <div class="App__card-overlay">
            <div class="App__card-overlay-text">Visit My Github</div>
          </div>
        </div>
        <div className="App__card-description">
          {data.name && <h2>{data.name}</h2>}
          <div>
            <p>{data.login}</p>
            {data.location && <p>{data.location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
