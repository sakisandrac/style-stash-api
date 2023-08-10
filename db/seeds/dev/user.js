/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {users} = require('../../../data/data')

const createUser = async (knex, user) => {
  const userID = await knex('user').insert({
    name: user.name,
    email: user.email,
    password: user.password,
    username: user.username
  }, 'id');
  return userID
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  try {
    await knex('user').del() 

    let userPromises = users.map(user => {
      return createUser(knex, user);
    });

    return Promise.all(userPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
