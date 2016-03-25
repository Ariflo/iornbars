var  knex = require('../../db/knex');
var statesPopData = require('../../seeds/boj_stats/StatePopulationData_2014.json');
var popGenderData = require('../../seeds/boj_stats/prisonPopulationByStateandGender.json');

// get all states
var allStates = function(){
  return knex('states');
}

// create state
var addState = function(state){
  allStates().insert(state).then(function(newState){});
}

// update state
var updateState = function(state, stateInfo){
  return allStates().where({
    state_name: state
  }).first().update(stateInfo).then(function(updatedState){});
}

// delete state
var deleteState = function(state){
  return allStates().where({
    state_name: state
  }).first().del();
}

// get state by name
var getState = function(stateName){
  return allStates().where({state_name: stateName}).first().then(function(state){
    return state;
  });
}

//delete all data
var  deleteAllStates = function(){
    knex('states').del();
}

// populated states table with node server/models/populateStates
var populateDb = function(){

  for(var i = 0; i < statesPopData.length; i += 3){

        var other = statesPopData[i + 2]['Race Alone - Asian'] + statesPopData[i + 2]['Race Alone - Native Hawaiian and Other Pacific Islander'];

        addState({
          state_name: statesPopData[i + 2].Geography,
          male_population: statesPopData[i+1].Total,
          female_population: statesPopData[i].Total,
          white_population: statesPopData[i + 2]['Race Alone - White'],
          black_population: statesPopData[i + 2]['Race Alone - Black or African American'],
          hispanic_population: statesPopData[i + 2]['Two or More Races'],
          other_population: other,
          male_jailed_population: 0,
          female_jailed_population: 0,
          white_jailed_population: 0,
          black_jailed_population:0,
          hispanic_jailed_population:0,
          other_jailed_population:0
        });
  }

  for(var i = 0; i < popGenderData.length; i++){

      var whitePopulation = (popGenderData[i].White_rate * (popGenderData[i].Total/100000));
      var blackPopulation = (popGenderData[i].Black_rate * (popGenderData[i].Total/100000));
      var hispanicPopulation = (popGenderData[i].Hispanic_rate * (popGenderData[i].Total/100000));
      var otherPopulation = (popGenderData[i].Other_rate *(popGenderData[i].Total/100000));

      updateState(popGenderData[i].Jurisdiction, {male_jailed_population: popGenderData[i].Male});
      updateState(popGenderData[i].Jurisdiction, {female_jailed_population: popGenderData[i].Female});
      updateState(popGenderData[i].Jurisdiction, {white_jailed_population: whitePopulation });
      updateState(popGenderData[i].Jurisdiction, {black_jailed_population: blackPopulation});
      updateState(popGenderData[i].Jurisdiction, {hispanic_jailed_population: hispanicPopulation});
      updateState(popGenderData[i].Jurisdiction, {other_jailed_population: otherPopulation});
  }
}

module.exports = {
  allStates: allStates,
  addState: addState,
  updateState: updateState,
  deleteState: deleteState,
  deleteAllStates: deleteAllStates,
  getState:getState,
  populateStates: populateDb
}
