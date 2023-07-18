const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const data = require('./data/data');

app.locals = {
  title: 'Data',
  data,
}

app.use(cors());
app.use(express.json());

app.get('/api/v1/data/closet/', (req, res) => {
  const { data } = app.locals;
  const closetData = data[0].pieces;

  res.status(200).json({ closetData });
});

app.get('/api/v1/data/closet/:category', (req, res) => {
  const { data } = app.locals;
  const closetData = data[0].pieces 
  const category = req.params.category
  const filteredPieces = closetData.filter(piece => piece.categoryID === `CAT-${category}`)

  res.status(200).json({ filteredPieces })
});

app.get('/api/v1/data/outfits', (req, res) => {
  const { data } = app.locals;
  const outfitData = data[0].outfits
  res.status(200).json({ outfitData });
});


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
  console.log(newData)
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