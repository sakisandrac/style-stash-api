module.exports = [
  {
    userID: 'USE-user-ex-1',
    credentials: {username: 'user1', password: '1234'},
    pieces: [
      {
      id: "PIE-pants-ex-1",
      image: "https://i.imgur.com/ddninn4.jpg",
      categoryID: 'CAT-pants',
      notes: ""
      }, 
      {
        id: "PIE-tops-ex-1",
        image: "https://i.imgur.com/mCvW03T.jpg",
        categoryID: "CAT-tops",
        notes: ""
      },
      {
        id: "PIE-skirts-ex-1",
        image: "https://i.imgur.com/GVKEPiN.jpg",
        categoryID: "CAT-skirts",
        notes: ""
      },
      {
        id: "PIE-onepiece-ex-1",
        image: "https://i.imgur.com/mroP74J.jpg",
        categoryID: "CAT-onepieces",
        notes: ""
      },
      {
        id: "PIE-shoes-ex-1",
        image: "https://i.imgur.com/xQNPDND.jpg",
        categoryID: "CAT-shoes",
        notes: ""
      },
      {
        id: "PIE-bags-ex-1",
        image: "https://i.imgur.com/tjrHoPs.jpg",
        categoryID: "CAT-bags",
        notes: ""
      },
      {
        id: "PIE-accessories-ex-1",
        image: "https://i.imgur.com/aWoR9up.jpg",
        categoryID: "CAT-accessories",
        notes: ""
      },
      {
        id: "PIE-outerwear-ex-1",
        image: "https://i.imgur.com/Tm2gIqW.jpg",
        categoryID: "CAT-outerwear",
        notes: ""
      },
      {
        id: "PIE-misc-ex-1",
        image: "https://i.imgur.com/eSO0N4s.jpg",
        categoryID: "CAT-miscellaneous",
        notes: ""
      }
    ],
    categories: [
      {id: 'CAT-pants', name: 'Pants'},
      {id: 'CAT-tops', name: 'Tops'},
      {id: 'CAT-skirts', name: 'Skirts'},
      {id: 'CAT-onepieces', name: 'One Pieces'},
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
      {id: "OUT-outfit-ex-1", fullOutfitImage: "https://i.imgur.com/0CPqUal.png", notes: ""},
      {id: "OUT-outfit-ex-2", fullOutfitImage: "https://i.imgur.com/EqL59lG.jpg", notes: ""}
    ]
  }
]