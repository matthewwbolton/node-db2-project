exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.string("VIN", 17).unique().notNullable().index();
    tbl.string("make").notNullable().index();
    tbl.string("model").notNullable().index();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmission_type").index();
    tbl.string("title_status").index();
  });
};

exports.down = function (knex) {
  return knex.scheman.dropTableIfExists("cars");
};
