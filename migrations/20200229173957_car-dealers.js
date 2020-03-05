
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        // table.integer("id").notNull().unique().primary()
        //SHORT CUT BELOW:
        table.increments("id")
        table.integer("VIN")
        table.text("make")
        table.text("model")
        table.float("mileage")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
