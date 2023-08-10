/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {pieces} = require('../../../data/data')

const createPiece = async (knex, piece, userID) => {
  const pieceID = await knex('piece').insert({
    image: piece.image,
    note: piece.notes,
    user_id: userID,
    category_id: piece.categoryID
  }, 'id');
  return pieceID
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  try {
    await knex('piece').del()

    let firstPiecePromises = pieces.user1.map(piece => {
      return createPiece(knex, piece, 1);
    });

    let secondPiecePromises = pieces.user2.map(piece => {
      return createPiece(knex, piece, 2)
  })

    return Promise.all([firstPiecePromises, secondPiecePromises].flat());
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

