import React, { useState, useEffect } from "react";
import chirpService from "./services/chirpService";

const App = () => {
  const [chirps, setChirps] = useState(null);

  // grabbing chirps once app has loaded
  useEffect(() => {
    if (!chirps) {
      getChirps().then((r) => console.log(r));
    }
  });

  // grabbing chirps from chirp api via chirp service
  const getChirps = async () => {
    let results = await chirpService.getAll();
    setChirps(results);
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
          <p>It's quiet... No chirpin' happenin' here!</p>
        )}
      </ul>
    </div>
  );
};

export default App;
