const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const data = require('./data/data');
const checkID = (type) => {
  return (id) => data[0][type].find(item => item.id === id)
}

const outfitExists = checkID('outfits')
const pieceExists = checkID('pieces')

app.locals = {
  title: 'Data',
  data,
}

app.use(cors());
app.use(express.json());

app.get('/api/v1/data/closet', (req, res) => {
  const { data } = app.locals;
  const closetData = data[0].closet 
  res.status(200).json({ closetData });
});

app.get('/api/v1/data/outfits', (req, res) => {
  const { data } = app.locals;
  const outfitData = data[0].outfits
  res.status(200).json({ outfitData });
});


app.post('/api/v1/data/closet', (req, res) => {
  const { image, category, id, notes } = req.body;
  const requiredProperties = ['image', 'category', 'id'];

  for (let requiredParameter of requiredProperties) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  //will need to change push if more than 1 user
  if (!app.locals.data[0].closet[category].some(item => item.id === id)) {
    app.locals.data[0].closet[category].push({ id, image, category, notes })
    res.status(201).json({
      message: `${id} Item added!`,
      newData: {
        id,
        image,
        category,
        notes,
      }
    });
  }
  console.log(newData)
})

app.post('/api/v1/data/outfits', (req, res) => {
  const {id, fullOutfitImage, notes} = req.body
  const {data} = app.locals

  if(outfitExists(id)) {
    res.status(400).json({
      message: `Error: Outfit already exists!`
    })
  }
  
  data[0].outfits.push({id, fullOutfitImage, notes})
  
  res.status(201).json({
    message: `${id} Outfit added!`,
    newData: {id, fullOutfitImage, notes}
  })
  
})

app.post('/api/v1/data/outfit-to-pieces', (req, res) => {
  const {outfitID, pieceID} = req.body
  const {data} = app.locals
  const otpID = uuidv4()

  if(!pieceExists(pieceID)) {
    return res.status(404).json({
      message: 'Error: Piece not found!'
    })
  }

  if(!outfitExists(outfitID)) {
    res.status(404).json({
      message: 'Error: Outfit not found!'
    })
  }

  data[0].outfitToPieces.push({id: `OTP-${otpID}`, outfitID, pieceID})
  res.status(201).json({
    message: `OTP-${otpID} Outfit to piece relationship added!`,
    newData: {id:`OTP-${otpID}`, outfitID, pieceID}
  })
})

app.patch('/api/v1/data/outfit/:id', (req,res) => {
  const { id } = req.params;
  const { fullOutfitImage } = req.body
  const { data } = app.locals;

  if(!outfitExists(id)) {
    res.status(404).json({
      message: 'Error: Outfit not found!'
    })
  }

  const foundOutfit = data[0].outfits.find(outfit => outfit.id === id)
  foundOutfit.fullOutfitImage = fullOutfitImage

  res.status(201).json({
    message: 'Success! Full outfit image updated.', 
    newData: {id, fullOutfitImage}
  })

})

app.delete('/api/v1/data/outfit-to-pieces', (req, res) => {
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

  data[0].outfitToPieces.splice(data[0].outfitToPieces.indexOf(foundOutfitToPiece), 1)

  res.status(201).json({
    message: `Success! Piece ${pieceID} removed from outfit ${outfitID}`,
    newData: data[0].outfitToPieces.filter(combo => combo.outfitID === outfitID)
  })
})

// app.delete('/api/v1/data/:id', (req, res) => {
//   const  { id } = req.params;
//   const { data } = app.locals;

//   const filteredIdeas = ideas.filter(idea => {
//     return idea.id !== parseInt(id)
//   })

//   app.locals.ideas = filteredIdeas

//   res.status(200).json({
//     message: `Idea #${id} has deleted`,
//     ideas: filteredIdeas
//   })
// })

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});