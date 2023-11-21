import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import SearchResults from "./SearchResults";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]); 

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };
  

  return (
    <div className="relative  z-10 flex items-center my-4 border-2 rounded-md w-96 bg-white border-neutral-200">
      <input
        type="text"
        value={input}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}

      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 text-white" />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};



export default Search;
