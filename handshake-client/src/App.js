import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import chirpService from "./services/chirpService";
import ViewChirpsComponent from "./ViewChirpsComponent/ViewChirps.component";
import CreateChirpComponent from "./CreateChirpComponent/CreateChirp.component";
import { NavLink } from "react-router-dom";

const App = () => {
  // const [chirps, setChirps] = useState(null);
  //
  // // grabbing chirps once app has loaded
  // useEffect(() => {
  //   if (!chirps) {
  //     getChirps().then((r) => console.log(r));
  //   }
  // });
  //
  // // grabbing chirps from chirp api via chirp service
  // const getChirps = async () => {
  //   let results = await chirpService.getAll();
  //   setChirps(results);
  // };

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <NavLink to="/view-chirps">
          <button type="button">View Chirps</button>
        </NavLink>
        <NavLink style={{ padding: "1rem" }} to="/create-chirp">
          <button type="button">Create Chirp!</button>
        </NavLink>
      </div>
      <Switch>
        {/*<Route exact path="/" component={ViewChirpsComponent} />*/}
        <Route path="/view-chirps" render={() => <ViewChirpsComponent />} />
        <Route path="/create-chirp" render={() => <CreateChirpComponent />} />
      </Switch>
    </div>
  );
};

export default App;
