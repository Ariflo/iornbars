
exports.up = function(knex, Promise) {
  return knex.schema.createTable('states', function(table){
    //state ID
    table.increments();
    table.string('state_name');

    table.integer('male_population');
    table.integer('female_population');
    table.integer('white_population');
    table.integer('black_population');
    table.integer('hispanic_population');
    table.integer('other_population');
    table.integer('male_jailed_population');
    table.integer('female_jailed_population');

    table.decimal('white_jailed_population');
    table.decimal('black_jailed_population');
    table.decimal('hispanic_jailed_population');
    table.decimal('other_jailed_population');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('states');
};
