import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get(`/api/chirp`);
    return res.data || [];
  },
};
