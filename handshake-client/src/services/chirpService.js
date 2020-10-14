import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get(`/api/chirp`);
    return res.data || [];
  },
  // postChirp
  postChirp: async (chirp) => {
    let res = await axios.post(`/api/chirp`, { text: chirp });
    return res.data;
  },
};
