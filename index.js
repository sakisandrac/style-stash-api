const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
app.locals = { title: 'Data'}

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//HELPER FUNCTIONS / VARIABLES
const checkID = (type) => {
  return (itemID, userID) => {
    const user = data.find(user => user.userID === userID)
    return user[type].find(item => item.id === itemID)
  }
}
const outfitExists = checkID('outfits')
const pieceExists = checkID('pieces')
const user = (userID) => {
  return data.find(user => user.userID === userID)
}

// GET ENDPOINTS
app.get('/api/v1/data/closet/:userID', async (req, res) => {
  const { userID } = req.params;
  try {
    const closetData = await database('piece').select().where('user_id', userID)
    res.status(200).json({ closetData });
  } catch (error) {
    res.status(500).json({error})
  }
});


app.get('/api/v1/data/closet/:userID/:category', async(req, res) => {
  const { category, userID } = req.params;
  try {
    const filteredPieces = await database('piece').select().where('user_id', userID).where('category_id', `CAT-${category}`)
    res.status(200).json({ filteredPieces });
  } catch (error) {
    res.status(500).json({error})
  }
});


app.get('/api/v1/data/outfits/:userID', async(req, res) => {
  const { userID } = req.params;
  try {
    const pieces = await database('piece').select().where('user_id', userID)
    const outfitData = await database('outfit').select().where('user_id', userID)
    const otps = await Promise.all(outfitData.map(async(outfit) => await database('outfit_to_piece').select().where('outfit_id', outfit.id)))

    const fullOutfits = await Promise.all(otps[0].map(async (otp) => {
      const outfit = outfitData.find(out => out.id === otp.outfit_id)
      const fitPieces = otps[0].filter(outToPie => outToPie.outfit_id === otp.outfit_id).map(pie => pieces.find(p => pie.piece_id === p.id))
      const fullFit = { ...outfit, pieces: fitPieces }
      return fullFit
    }))
    
    res.status(200).json({ allData : fullOutfits});
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
  
});

// app.get('/api/v1/data/outfits/:userID/:outfitID', (req, res) => {
//   const { userID, outfitID } = req.params;
//   const outfitData = user(userID).outfits.find(outfit => outfitID === outfit.id)

//   const foundOTP = user(userID).outfitToPieces.filter(piece => piece.outfitID === outfitID)
//   const outfitPieces = foundOTP.reduce((arr, piece) => {
//     const foundPieces = user(userID).pieces.find(item => item.id === piece.pieceID)
//       arr.push(foundPieces)
//     return arr
//   },[])
 
//   res.status(200).json({outfitData, outfitPieces});
// });

// app.get('/api/v1/data/outfit-piece-amount/:userID/:pieceID', (req, res) => {
//   const {userID, pieceID} = req.params;

//   if(!pieceExists(pieceID, userID)) {
//     return res.status(404).json({
//       message: 'Error: Piece not found!'
//     })
//   }

//   const allOTPs = user(userID).outfitToPieces.filter(otp => otp.pieceID === pieceID)

//   res.status(201).json({
//     data: allOTPs
//   })
// })

// // POST ENDPOINTS
// app.post('/api/v1/data/closet/', (req, res) => {
//   const { image, categoryID, id, notes, userID } = req.body;
//   const requiredProperties = ['image', 'categoryID', 'id'];

//   for (let requiredParameter of requiredProperties) {
//     if (req.body[requiredParameter] === undefined) {
//       return res.status(422).json({
//         message: `You are missing a required parameter of ${requiredParameter}`
//       });
//     }
//   }

//   if (!user(userID).pieces.some(piece => piece.id === id)) {
//     user(userID).pieces.push({ id, image, categoryID, notes })
//     res.status(201).json({
//       message: `${id} Item added!`,
//       newData: {
//         id,
//         image,
//         categoryID,
//         notes,
//       }
//     });
//   }
// })

app.post('/api/v1/data/user', async (req, res) => {
  const { username, password } = req.body;

  try {
    const credentialsFound = await database('user').select().where('username', username).where('password', password)
    if(credentialsFound.length) {
      res.status(201).json({credentialsFound});
    } else {
      res.status(422).json({message: 'Error: Incorrect username or password!'})
    }
  } catch (error) {
    res.status(500).json({error})
  }
})

// app.post('/api/v1/data/outfits/:userID', (req, res) => {
//   const {userID} = req.params
//   const {id, fullOutfitImage, notes} = req.body

//   user(userID).outfits.push({id, fullOutfitImage, notes})
//   res.status(201).json({
//     message: `${id} Outfit added!`,
//     newData: {id, fullOutfitImage, notes}
//   })
  
// })

app.post('/api/v1/data/outfit-to-pieces', async (req, res) => {
  const {outfitID, pieceID} = req.body
  const otpID = uuidv4()
  try {
    const newOtp = await database('outfit_to_piece').insert({ id: `OTP-${otpID}`, outfit_id: outfitID, piece_id: pieceID }).returning('*')
    res.status(201).json({
      message: `OTP-${otpID} Outfit to piece relationship added!`,
      newData: { id: newOtp[0].id, outfitID: newOtp[0].outfit_id, pieceID: newOtp[0].piece_id }
    })
  } catch (error) {
    res.status(500).json({error})
  }
})

// //PATCH ENDPOINTS
// app.patch('/api/v1/data/closet/:userID/:pieceID', (req, res) => {
//   const {userID, pieceID} = req.params;
//   const {notes} = req.body;
//   const piece = pieceExists(pieceID, userID)

//   if(!piece) {
//     return res.status(404).json({
//       message: 'Error: Piece not found!'
//     })
//   }

//   piece.notes = notes 

//   res.status(201).json({
//     message: `Success! Piece # ${pieceID} edited!`,
//     newData: piece
//   })
  
// })

app.patch('/api/v1/data/outfit/:userID/:outfitID', async(req,res) => {
  const { outfitID, userID } = req.params;
  const { fullOutfitImage, notes } = req.body

  try {
    const patchedOutfit = await database('outfit').where('user_id', userID).where('id', outfitID).update({image: fullOutfitImage, note: notes}, ['image', 'note'])
    res.status(201).json({
      message: 'Success! Full outfit image and notes updated.', 
      newData: { outfitID: outfitID, fullOutfitImage: patchedOutfit[0].image, notes: patchedOutfit[0].note}
    })
  } catch (error) {
    res.status(500).json({error})
  }
})

// //DELETE ENDPOINTS

// app.delete('/api/v1/data/outfit-to-pieces/:userID', (req, res) => {
//   const {userID} = req.params
//   const {outfitID, pieceID} = req.body

//   const foundOutfitToPiece = user(userID).outfitToPieces.find(combo => 
//     combo.outfitID === outfitID && combo.pieceID === pieceID
//   )

//   user(userID).outfitToPieces.splice(user(userID).outfitToPieces.indexOf(foundOutfitToPiece), 1)

//   if(!foundOutfitToPiece) {
//     res.status(404).json({
//       message: 'Error: Outfit to piece not found! Relationship nonexistant'
//     })
//   }

//   res.status(201).json({
//     message: `Success! Piece ${pieceID} removed from outfit ${outfitID}`,
//     newData: user(userID).outfitToPieces.filter(combo => combo.outfitID === outfitID)
//   })
// })

// app.delete('/api/v1/data/outfits/:userID', (req, res) => {
//   const {userID} = req.params
//   const {id } = req.body

//   if(!outfitExists(id, userID)) {
//     res.status(400).json({
//       message: `Error: Outfit Not Found!`
//     })
//   }

//   const foundOutfit = user(userID).outfits.find(outfit => outfit.id === id)
//   user(userID).outfits.splice(user(userID).outfits.indexOf(foundOutfit), 1)
  
//   res.status(201).json({
//     message: `${id} Outfit deleted!`
//   })

// })

app.delete('/api/v1/data/piece/:userID', async (req, res) => {
  const {userID} = req.params;
  const {id} = req.body;

  try {
    await database('piece').where('user_id', userID).where('id', id).del()
    res.status(201).json({
      message: `${id} Piece deleted!`
    })
  } catch (error) {
    res.status(500).json({error})
  }
})

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});