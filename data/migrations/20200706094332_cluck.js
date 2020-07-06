
exports.up = function(knex) {
  return knex.schema.createTable("cluck", function(t){
      t.increments("id");
      t.string("username");
      t.string("imageUrl");
      t.text("content");
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("cluck");
  
};
