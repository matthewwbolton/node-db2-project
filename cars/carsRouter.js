const express = require("express");

const knex = require("knex");

const knexfile = require("../knexfile");

const db = knex(knexfile.development);

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "Failed to retrieve cars from the database." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: `There are no cars associated with the ID ${id}` });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData, "id")
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newCar) => {
          res.status(201).json(newCar);
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db("cars")
    .where({ id })
    .update(changes)
    .then((updatedCar) => {
      res.status(200).json({
        message: `The car with an ID of ${id} has been successfully updated.`,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db("cars")
    .where({ id })
    .update(changes)
    .then((updatedCar) => {
      res.status(200).json({
        message: `The car with an ID of ${id} has successfully been updated.`,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .del()
    .then((car) => {
      res.status(200).json({
        message: `The car with an ID of ${id} has been successfully deleted from the database.`,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
