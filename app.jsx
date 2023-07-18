import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    email: "janesmith@example.com",
    city: "San Francisco",
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 35,
    email: "mikejohnson@example.com",
    city: "Chicago",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 32,
    email: "emilydavis@example.com",
    city: "Los Angeles",
  },
  {
    id: 5,
    name: "Alex Brown",
    age: 27,
    email: "alexbrown@example.com",
    city: "Seattle",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    age: 29,
    email: "sarahwilson@example.com",
    city: "Boston",
  },
  {
    id: 7,
    name: "Mark Thompson",
    age: 33,
    email: "markthompson@example.com",
    city: "Houston",
  },
  {
    id: 8,
    name: "Jessica Rodriguez",
    age: 31,
    email: "jessicarodriguez@example.com",
    city: "Miami",
  },
  {
    id: 9,
    name: "Adam Lee",
    age: 34,
    email: "adamlee@example.com",
    city: "Denver",
  },
  {
    id: 10,
    name: "Sophia Martinez",
    age: 26,
    email: "sophiamartinez@example.com",
    city: "Phoenix",
  },
  // Add more objects as needed...
];

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchResults.length === 0 ? (
          <li>No results found.</li>
        ) : (
          searchResults.map((result) => (<li>{result.name}</li>))
        )}
      </ul>
    </div>
  );
};

export default ProductSearch;
