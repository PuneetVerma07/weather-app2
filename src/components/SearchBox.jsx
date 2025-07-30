import React, { useState } from "react";

const Searchbox = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="
          Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-4 py-2 border rounded-2xl bg-white dark:bg-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbox;
