import React, { useState } from "react";
import chirpService from "../services/chirpService";

const CreateChirp = () => {
  const [chirp, setChirp] = useState("");

  const onChangeChirp = (e) => {
    setChirp(e.target.value);
  };

  // grab all array, get lenght of array, do array + 1

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(chirp);
    // call service
    return chirpService.postChirp(chirp);
  };

  return (
    <form style={{ padding: "1rem" }} onSubmit={onSubmit}>
      <input type="text" name="chirp" onChange={onChangeChirp} />
      <button type="submit">Send Chirp!</button>
    </form>
  );
};
export default CreateChirp;
