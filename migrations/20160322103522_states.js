
exports.up = function(knex, Promise) {
  return knex.schema.createTable('states', function(table){
    //state ID
    table.increments();
    table.string('state_name');
    table.string('male_population');
    table.string('female_population');
    table.string('white_population');
    table.string('black_population');
    table.string('hispanic_population');
    table.string('other_population');
    table.string('male_jailed_population');
    table.string('female_jailed_population');
    table.string('white_jailed_population');
    table.string('black_jailed_population');
    table.string('hispanic_jailed_population');
    table.string('other_jailed_population');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('states');
};
