exports.up = function (knex) {
  return knex.schema.createTable("sales", (tbl) => {
    tbl.increments("salesID");
    tbl
      .foreign("car_id")
      .references("id")
      .inTable("cars")
      .unsigned()
      .notNullable()
      .index();
    tbl.decimal("sales_price").notNullable().index();
    tbl.date("date_of_sale");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sales");
};
