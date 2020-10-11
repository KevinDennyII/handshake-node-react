const mongoose = require("mongoose");
const Chirp = mongoose.model("chirps");

module.exports = (app) => {
  app.get(`/api/chirp`, async (req, res) => {
    let chirps = await Chirp.find();
    return res.status(200).send(chirps);
  });

  app.post(`/api/chirp`, async (req, res) => {
    let chirp = await Chirp.create(req.body);
    return res.status(201).send({
      error: false,
      chirp,
    });
  });

  app.put(`/api/chirp/:id`, async (req, res) => {
    const { id } = req.params;

    let chirp = await Chirp.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      chirp,
    });
  });

  app.delete(`/api/chirp/:id`, async (req, res) => {
    const { id } = req.params;

    let chirp = await Chirp.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      chirp,
    });
  });
};
