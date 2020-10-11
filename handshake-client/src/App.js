import React, { useState, useEffect } from "react";
import chirpService from "./services/chirpService";

function App() {
  const [chirps, setChirps] = useState(null);

  useEffect(() => {
    if (!chirps) {
      getChirps().then((r) => console.log(r));
    }
  });

  const getChirps = async () => {
    let res = await chirpService.getAll();
    console.log(res);
    setChirps(res);
  };

  const renderChirp = (chirp) => {
    return (
      <li key={chirp._id}>
        {chirp.id} -- {chirp.text}
      </li>
    );
  };

  return (
    <div className="App">
      <h1>Chirps</h1>
      <ul className="list">
        {chirps && chirps.length > 0 ? (
          chirps.map((chirp) => renderChirp(chirp))
        ) : (
          <p>No chirpin' happenin' here!</p>
        )}
      </ul>
    </div>
  );
}

export default App;
