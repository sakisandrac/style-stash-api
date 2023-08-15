/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {users, pieces, outfits, outfitToPieces} = require('../../../data/data')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  try {
    await knex('outfit_to_piece').del()
    await knex('outfit').del() 
    await knex('piece').del() 
    await knex('user').del() 

    await knex('user').insert(users).returning('*')
    await knex('piece').insert(pieces).returning('*')
    await knex('outfit').insert(outfits).returning('*')
    await knex('outfit_to_piece').insert(outfitToPieces).returning('*')

  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
