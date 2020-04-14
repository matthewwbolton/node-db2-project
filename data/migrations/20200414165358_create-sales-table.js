exports.up = function (knex, Promise) {
  return knex.schema.createTable("sales", (tbl) => {
    tbl.increments("salesID");
    tbl
      .bigInteger("car_id")
      .references("id")
      .inTable("cars")
      .notNullable()
      .index();
    tbl.decimal("sales_price").notNullable().index();
    tbl.date("date_of_sale");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("sales");
};
