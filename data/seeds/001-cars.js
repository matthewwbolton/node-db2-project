exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "2FTZF1828WCA20323",
          make: "Infinit",
          model: "G37",
          mileage: 66210,
          transmission_type: "automatic",
          title_status: "clear",
        },
        {
          VIN: "JT2AC52L3V0283994",
          make: "Chevrolet",
          model: "Tahoe",
          mileage: 125795,
          transmission_type: "automatic",
          title_status: "clear",
        },
        {
          VIN: "1J4RR4GGXBC570400",
          make: "Subaru",
          model: "Outback",
          mileage: 166985,
          transmission_type: "automatic",
          title_status: "origin",
        },
      ]);
    });
};
