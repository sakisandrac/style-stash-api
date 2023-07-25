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


// GET ENDPOINTS
app.get('/api/v1/data/closet/', (req, res) => {
  const { data } = app.locals;
  const closetData = data[0].pieces;

  res.status(200).json({ closetData });
});

app.get('/api/v1/data/closet/:userID/:category', (req, res) => {
  const { data } = app.locals;
  const { category, userID }  = req.params;
  const closetData = data.filter(user => user.userID === userID )
  console.log(closetData)
  const filteredPieces = closetData[0].pieces.filter(piece => piece.categoryID === `CAT-${category}`)

  res.status(200).json({ filteredPieces })
});

app.get('/api/v1/data/outfits/:userID', (req, res) => {
  const { data } = app.locals;
  const { userID } = req.params;
  const user = data.find(user => user.userID === userID)
  const outfitData = user.outfits
  const allData = outfitData.map(outfit => {
    const foundOTP = user.outfitToPieces.filter(piece => piece.outfitID === outfit.id)
    const outfitPieces = foundOTP.reduce((arr, piece) => {
      const foundPieces = user.pieces.find(item => item.id === piece.pieceID)
        arr.push(foundPieces)
      return arr
    },[])
    return { outfit, outfitPieces }
  })

  res.status(200).json({ allData });
});

app.get('/api/v1/data/outfits/:userID/:outfitID', (req, res) => {
  const { data } = app.locals;
  const { userID, outfitID } = req.params;
  const user = data.find(user => user.userID === userID)
  const outfitData = user.outfits.find(outfit => outfitID === outfit.id)

  const foundOTP = user.outfitToPieces.filter(piece => piece.outfitID === outfitID)
  const outfitPieces = foundOTP.reduce((arr, piece) => {
    const foundPieces = user.pieces.find(item => item.id === piece.pieceID)
      arr.push(foundPieces)
    return arr
  },[])
 
  res.status(200).json({outfitData, outfitPieces});
});

// POST ENDPOINTS
app.post('/api/v1/data/closet', (req, res) => {
  const { image, categoryID, id, notes } = req.body;
  const requiredProperties = ['image', 'categoryID', 'id'];

  for (let requiredParameter of requiredProperties) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  if (!app.locals.data[0].pieces.some(piece => piece.id === id)) {
    app.locals.data[0].pieces.push({ id, image, categoryID, notes })
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
  const {data} = app.locals

  if(outfitExists(id, userID)) {
    res.status(400).json({
      message: `Error: Outfit already exists!`
    })
  }
  const user = data.find(user => user.userID === userID)
  user.outfits.push({id, fullOutfitImage, notes})
  
  res.status(201).json({
    message: `${id} Outfit added!`,
    newData: {id, fullOutfitImage, notes}
  })
  
})

app.post('/api/v1/data/outfit-to-pieces/:userID', (req, res) => {
  const {userID} = req.params
  const {outfitID, pieceID} = req.body
  const {data} = app.locals
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
  const user = data.find(user => user.userID === userID)
  user.outfitToPieces.push({id: `OTP-${otpID}`, outfitID, pieceID})
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
  const { data } = app.locals;

  if(!outfitExists(outfitID, userID)) {
    res.status(404).json({
      message: 'Error: Outfit not found!'
    })
  }

  const user = data.find(user => user.userID === userID)
  const foundOutfit = user.outfits.find(outfit => outfit.id === outfitID)
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
  const {data} = app.locals

  const foundOutfitToPiece = data[0].outfitToPieces.find(combo => 
    combo.outfitID === outfitID && combo.pieceID === pieceID
  )

  if(!foundOutfitToPiece) {
    res.status(404).json({
      message: 'Error: Outfit to piece not found! Relationship nonexistant'
    })
  }

  const user = data.find(user => user.userID === userID)
  user.outfitToPieces.splice(data[0].outfitToPieces.indexOf(foundOutfitToPiece), 1)

  res.status(201).json({
    message: `Success! Piece ${pieceID} removed from outfit ${outfitID}`,
    newData: data[0].outfitToPieces.filter(combo => combo.outfitID === outfitID)
  })
})

app.delete('/api/v1/data/outfits/:userID', (req, res) => {
  const {userID} = req.params
  const {id } = req.body
  const {data} = app.locals
  if(!outfitExists(id, userID)) {
    res.status(400).json({
      message: `Error: Outfit Not Found!`
    })
  }

  const user = data.find(user => user.userID === userID)
  const foundOutfit = user.outfits.find(outfit => outfit.id === id)
  user.outfits.splice(user.outfits.indexOf(foundOutfit), 1)
  
  res.status(201).json({
    message: `${id} Outfit deleted!`
  })
  
})

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});