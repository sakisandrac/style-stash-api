module.exports = [
  {
    userID: 'USE-user-ex-1',
    pieces: [
      {
      id: "PIE-pants-ex-1",
      image: "./pants.JPG",
      categoryID: 'CAT-pants',
      notes: ""
      }, 
      {
        id: "PIE-tops-ex-1",
        image: "./top.JPG",
        categoryID: "CAT-tops",
        notes: ""
      },
      {
        id: "PIE-skirts-ex-1",
        image: "./skirt.JPG",
        categoryID: "CAT-skirts",
        notes: ""
      },
      {
        id: "PIE-onepiece-ex-1",
        image: "./romper.JPG",
        categoryID: "CAT-onePieces",
        notes: ""
      },
      {
        id: "PIE-shoes-ex-1",
        image: "./shoes.JPG",
        categoryID: "CAT-shoes",
        notes: ""
      },
      {
        id: "PIE-bag-ex-1",
        image: "./bag.JPG",
        categoryID: "CAT-bags",
        notes: ""
      },
      {
        id: "PIE-accessories-ex-1",
        image: "./necklace.jpg",
        categoryID: "CAT-accessories",
        notes: ""
      },
      {
        id: "PIE-outerwear-ex-1",
        image: "./jacket.JPG",
        categoryID: "CAT-outerwear",
        notes: ""
      },
      {
        id: "PIE-misc-ex-1",
        image: "./hat.JPG",
        categoryID: "CAT-miscellaneous",
        notes: ""
      }
    ],
    categories: [
      {id: 'CAT-pants', name: 'Pants'},
      {id: 'CAT-tops', name: 'Tops'},
      {id: 'CAT-skirts', name: 'Skirts'},
      {id: 'CAT-onePieces', name: 'One Pieces'},
      {id: 'CAT-shoes', name: 'Shoes'},
      {id: 'CAT-bags', name: 'Bags'},
      {id: 'CAT-accessories', name: 'Accessories'},
      {id: 'CAT-outerwear', name: 'Outer Wear'},
      {id: 'CAT-miscellaneous', name: 'Miscellaneous'}
    ],
    outfitToPieces: [
      {id: "OTP-otp-ex-1", outfitID: "OUT-outfit-ex-1", pieceID: 'PIE-pants-ex-1'},
      {id: "OTP-otp-ex-2", outfitID: "OUT-outfit-ex-1", pieceID: 'PIE-tops-ex-1'},
      {id: "OTP-otp-ex-3", outfitID: "OUT-outfit-ex-1", pieceID: 'PIE-accessories-ex-1'},
      {id: "OTP-otp-ex-4", outfitID: "OUT-outfit-ex-1", pieceID: 'PIE-shoes-ex-1'},
      {id: "OTP-otp-ex-5", outfitID: "OUT-outfit-ex-1", pieceID: 'PIE-bags-ex-1'},
      {id: "OTP-otp-ex-6", outfitID: "OUT-outfit-ex-2", pieceID: 'PIE-onepiece-ex-1'},
      {id: "OTP-otp-ex-7", outfitID: "OUT-outfit-ex-2", pieceID: 'PIE-outerwear-ex-1'},
      {id: "OTP-otp-ex-8", outfitID: "OUT-outfit-ex-2", pieceID: 'PIE-shoes-ex-1'},
      {id: "OTP-otp-ex-9", outfitID: "OUT-outfit-ex-2", pieceID: 'PIE-bags-ex-1'},
    ],
    outfits: [
      {id: "outfit-ex-1", fullOutfitImage: "./outfit.JPG"},
      {id: "outfit-ex-2", fullOutfitImage: "./outfit2.png"}
    ]
  }
]