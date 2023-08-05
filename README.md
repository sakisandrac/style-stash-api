# Style Stash API
Api Backend for <a href="https://github.com/sakisandrac/style-stash">STYLE STASH</a>

## Set Up
Clone this down, and `cd` into it.  Then run:
`npm install`
`nodemon index.js`

## Endpoints
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all items from a single category of a user|`http://localhost:3003/api/v1/data/closet/:userID/:category`| GET  | none | object containing an array of all items from a category|
|Get single customer|`http://localhost:3003/api/v1/data/outfits/:userID`| GET  | none | object containing an array of all outfits from a single user|
|Get all items for a single user| `http://localhost:3003/api/v1/data/closet/:userID/` | GET | none | object containing an array of all items in a single user's closet |
|Get all items from an outfit| `http://localhost:3003/api/v1/data/outfits/:userID/:outfitID` | GET | none | object with containing an array of all items from a single outfit |
| Add new item |`http://localhost:3003/api/v1/data/closet/`| POST | `{ image: <string>, categoryID: <string>, id: <string>, notes: <string>, userID: <string> }` | `{message: `${id} Item added!`, newData: {id, image, categoryID, notes}}`|
|Check login info| `http://localhost:3003/api/v1/data/user`|POST | `{userID: <string> }` | object with all of user's closet data|
|Add new outfit | `http://localhost:3003/api/v1/data/outfit-to-pieces/:userID`|POST | `{id: <string>, fullOutfitImage: <string>, notes: <string>}` |`{message: `${id} Outfit added!`, newData: {id, fullOutfitImage, notes}|
|Add new piece to outfit| `http://localhost:3003/api/v1/data/outfits/:userID`|POST | `{outfitID: <string>, pieceID: <string>}` |`{message: `OTP-{otpID} Outfit to piece relationship added!`, newData: {id:`OTP-${otpID}`, outfitID, pieceID}}`|
|Update piece| `http://localhost:3003/api/v1/data/closet/:userID/:pieceID`|PATCH| `{notes: <string>}` |`{message: `Success! Piece # ${pieceID} edited!`, newData: piece}`|
|Update outfit| `http://localhost:3003/api/v1/data/outfit/:userID/:outfitID`|PATCH| `{ fullOutfitImage: <string>, notes: <string> }` |`{message: 'Success! Full outfit image updated,newData: {outfitID, fullOutfitImage}}`|
|Delete single piece| `http://localhost:3003/api/v1/data/outfit-to-pieces/:userID`| DELETE |`{outfitID: <string>, pieceID: <string>}` | `{message: `Success! Piece {pieceID} removed from outfit {outfitID}`, newData}` |
|Delete outfit| `http://localhost:3003/api/v1/data/outfit-to-pieces/:userID`| DELETE |`{id: <string> }` | `{message: `${id} Outfit deleted!`}`|
