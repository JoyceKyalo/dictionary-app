import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    // documentation for API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "0534b4bf77df82f13f307a8bcbtddo1d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
  }
  return (
    <div>
      <h2>Dictionary</h2>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={updateKeyword}
        />
      </form>
    </div>
  );
}
