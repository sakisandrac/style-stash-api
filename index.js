const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const data = require('./data/data');
app.locals = { title: 'Data', data}

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
app.get('/api/v1/data/closet/', (req, res) => {
  const { data } = app.locals;
  const closetData = data[0].pieces;

  res.status(200).json({ closetData });
});

app.get('/api/v1/data/closet/:userID/:category', (req, res) => {
  const { category, userID }  = req.params;
  const filteredPieces = user(userID).pieces.filter(piece => piece.categoryID === `CAT-${category}`)
  res.status(200).json({ filteredPieces })
});

app.get('/api/v1/data/closet/:userID/', (req, res) => {
  const { userID }  = req.params;
  const pieces = user(userID).pieces
  res.status(200).json({ pieces })
});


app.get('/api/v1/data/outfits/:userID', (req, res) => {
  const { userID } = req.params;
  const outfitData = user(userID).outfits
  
  const allData = outfitData.map(outfit => {
    const foundOTP = user(userID).outfitToPieces.filter(piece => piece.outfitID === outfit.id)
    const outfitPieces = foundOTP.reduce((arr, piece) => {
      const foundPieces = user(userID).pieces.find(item => item.id === piece.pieceID)
        arr.push(foundPieces)
      return arr
    },[])
    return { outfit, outfitPieces }
  })

  res.status(200).json({ allData });
});

app.get('/api/v1/data/outfits/:userID/:outfitID', (req, res) => {
  const { userID, outfitID } = req.params;
  const outfitData = user(userID).outfits.find(outfit => outfitID === outfit.id)

  const foundOTP = user(userID).outfitToPieces.filter(piece => piece.outfitID === outfitID)
  const outfitPieces = foundOTP.reduce((arr, piece) => {
    const foundPieces = user(userID).pieces.find(item => item.id === piece.pieceID)
      arr.push(foundPieces)
    return arr
  },[])
 
  res.status(200).json({outfitData, outfitPieces});
});

app.get('/api/v1/data/outfit-piece-amount/:userID/:pieceID', (req, res) => {
  const {userID, pieceID} = req.params;

  if(!pieceExists(pieceID, userID)) {
    return res.status(404).json({
      message: 'Error: Piece not found!'
    })
  }

  const allOTPs = user(userID).outfitToPieces.filter(otp => otp.pieceID === pieceID)

  res.status(201).json({
    data: allOTPs
  })
})

// POST ENDPOINTS
app.post('/api/v1/data/closet/', (req, res) => {
  const { image, categoryID, id, notes, userID } = req.body;
  const requiredProperties = ['image', 'categoryID', 'id'];

  for (let requiredParameter of requiredProperties) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  if (!user(userID).pieces.some(piece => piece.id === id)) {
    user(userID).pieces.push({ id, image, categoryID, notes })
    res.status(201).json({
      message: `${id} Item added!`,
      newData: {
        id,
        image,
        categoryID,
        notes,
      }
    });
  }
})

app.post('/api/v1/data/user', (req, res) => {
  const { data } = app.locals;
  const { username, password } = req.body;

  const credentialsFound = data.filter(user => {
    return user.credentials.username === username && user.credentials.password === password
  })
  
  if(credentialsFound.length > 0) {
    res.status(201).json({credentialsFound});
  } else {
    res.status(422).json({message: 'Error: Incorrect username or password!'})
  }
})

app.post('/api/v1/data/outfits/:userID', (req, res) => {
  const {userID} = req.params
  const {id, fullOutfitImage, notes} = req.body

  user(userID).outfits.push({id, fullOutfitImage, notes})
  res.status(201).json({
    message: `${id} Outfit added!`,
    newData: {id, fullOutfitImage, notes}
  })
  
})

app.post('/api/v1/data/outfit-to-pieces/:userID', (req, res) => {
  const {userID} = req.params
  const {outfitID, pieceID} = req.body
  const otpID = uuidv4()

  if(!pieceExists(pieceID, userID)) {
    return res.status(404).json({
      message: 'Error: Piece not found!'
    })
  }

  if(!outfitExists(outfitID, userID)) {
    res.status(404).json({
      message: 'Error: Outfit not found!'
    })
  }

  user(userID).outfitToPieces.push({id: `OTP-${otpID}`, outfitID, pieceID})
  res.status(201).json({
    message: `OTP-${otpID} Outfit to piece relationship added!`,
    newData: {id:`OTP-${otpID}`, outfitID, pieceID}
  })
})

//PATCH ENDPOINTS
app.patch('/api/v1/data/closet/:userID/:pieceID', (req, res) => {
  const {userID, pieceID} = req.params;
  const {notes} = req.body;
  const piece = pieceExists(pieceID, userID)

  if(!piece) {
    return res.status(404).json({
      message: 'Error: Piece not found!'
    })
  }

  piece.notes = notes 

  res.status(201).json({
    message: `Success! Piece # ${pieceID} edited!`,
    newData: piece
  })
  
})

app.patch('/api/v1/data/outfit/:userID/:outfitID', (req,res) => {
  const { outfitID, userID } = req.params;
  const { fullOutfitImage, notes } = req.body

  if(!outfitExists(outfitID, userID)) {
    res.status(404).json({
      message: 'Error: Outfit not found!'
    })
  }

  const foundOutfit = user(userID).outfits.find(outfit => outfit.id === outfitID)
  foundOutfit.fullOutfitImage = fullOutfitImage
  foundOutfit.notes = notes

  res.status(201).json({
    message: 'Success! Full outfit image updated.', 
    newData: {outfitID, fullOutfitImage}
  })

})

//DELETE ENDPOINTS

app.delete('/api/v1/data/outfit-to-pieces/:userID', (req, res) => {
  const {userID} = req.params
  const {outfitID, pieceID} = req.body

  const foundOutfitToPiece = user(userID).outfitToPieces.find(combo => 
    combo.outfitID === outfitID && combo.pieceID === pieceID
  )

  user(userID).outfitToPieces.splice(user(userID).outfitToPieces.indexOf(foundOutfitToPiece), 1)

  if(!foundOutfitToPiece) {
    res.status(404).json({
      message: 'Error: Outfit to piece not found! Relationship nonexistant'
    })
  }

  res.status(201).json({
    message: `Success! Piece ${pieceID} removed from outfit ${outfitID}`,
    newData: user(userID).outfitToPieces.filter(combo => combo.outfitID === outfitID)
  })
})

app.delete('/api/v1/data/outfits/:userID', (req, res) => {
  const {userID} = req.params
  const {id } = req.body

  if(!outfitExists(id, userID)) {
    res.status(400).json({
      message: `Error: Outfit Not Found!`
    })
  }

  const foundOutfit = user(userID).outfits.find(outfit => outfit.id === id)
  user(userID).outfits.splice(user(userID).outfits.indexOf(foundOutfit), 1)
  
  res.status(201).json({
    message: `${id} Outfit deleted!`
  })

})

app.delete('/api/v1/data/piece/:userID', (req, res) => {
  const {userID} = req.params;
  const {id} = req.body;

  if(!pieceExists(id, userID)) {
    res.status(400).json({
      message: `Error: Piece Not Found!`
    })
  }

  const foundPiece = user(userID).pieces.find(piece => piece.id === id)
  user(userID).pieces.splice(user(userID).outfits.indexOf(foundPiece), 1)

  res.status(201).json({
    message: `${id} Piece deleted!`
  })

})

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});