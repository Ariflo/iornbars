var  knex = require('../../db/knex');
var statesPopData = require('../../seeds/boj_stats/StatePopulationData_2014.json');

// get all states
var States = function(){
  return knex('states');
}

// create state
var addState = function(state){
  States().insert(state).then(function(newState){});
}

// update state
var updateState = function(state, stateInfo){
  return States().where({
    state_name: state
  }).first().update(stateInfo).then(function(updatedState){});
}
// delete state
var deleteState = function(state){
  return States().where({
    name: state.state_name
  }).first().del();
}

// get state by id
var state = function(stateID){
  return States().where({id: stateID}).first().then(function(state){
    return state;
  });
}

//delete all data
var  deleteAllStates = function(){
    knex('states').del();
}

// populated comapanies table with node server/models/companies
var populateDb = function(){

//Entire state seed data 
  for(var i =2; i < statesPopData.length; i += 3){
    addState({
      state_name: statesPopData[i].Geography
      male_population: statesPopData[i+1].Total
      female_population: statesPopData[i].Total

    });
    // //female seed state data
    // updateState(statesPopData[i].Geography, {female_population: statesPopData[i].Total});

    // updateState(statesPopData[i+1].Geography, {male_population: statesPopData[i+1].Total});
}


// for(var i =0; i < statesPopData.length; i += 3){
    
// }

// //male seed state data  
// for(var i =1; i < statesPopData.length; i += 3){
    
// }

// }

module.exports = {
  AllStates: States,
  addState: addState,
  updateState: updateState,
  deleteState: deleteState,
  deleteAllStates: deleteAllStates,
  state:state,
  populateStates: populateDb
}
