import React, { useState } from "react";

let nextId = 4;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
  { id: 3, name: "Nouise Levelson" },
];

const InsertingIntoArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ]; 
    setArtists(nextArtists);   
    setName("");
  }

  const handleSort = () => {
    const newArtists = [...artists];
    setArtists(newArtists.reverse());
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleSort}>Sort</button>
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InsertingIntoArray;
