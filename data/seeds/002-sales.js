exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sales")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("sales").insert([
        { car_id: 2, sales_price: 20000, date_of_sale: "1983 - 03 - 02" },
        { car_id: 3, sales_price: 30000, date_of_sale: "1984 - 10 - 27" },
      ]);
    });
};
