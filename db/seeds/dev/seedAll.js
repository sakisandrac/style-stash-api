/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {users, pieces, outfits} = require('../../../data/data')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  try {
    await knex('outfit').del() 
    await knex('piece').del() 
    await knex('user').del() 

    await knex('user').insert(users).returning('*')
    await knex('piece').insert(pieces).returning('*')
    await knex('outfit').insert(outfits).returning('*')


  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
