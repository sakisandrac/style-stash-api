const users = [
  {
    name: "Saki",
    username: "user1",
    password: '1234',
    email: "sakisandra.c@gmail.com"
  },  
  {
    name: "Laura",
    username: "user2",
    password: '1234',
    email: "l.garciaguerra1@gmail.com"
  }
]

const pieces = {
  user1: [
    {
      id: "PIE-pants-ex-1",
      image: "https://i.imgur.com/ddninn4.jpg",
      categoryID: 'CAT-pants',
      notes: "These pants are a great conversation starter piece! here are some really really really really really really erally really really really really long notes for this piece of pants!"
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
    },
    {
      id: "PIE-pants-ex-2",
      image: "https://i.imgur.com/k9MlDi0.jpg",
      categoryID: "CAT-pants",
      notes: ""
    },
    {
      id: "PIE-onepiece-ex-2",
      image: "https://i.imgur.com/xRVD81w.jpg",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-skirts-ex-2",
      image: "https://i.imgur.com/afty7SC.jpg",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-outer-ex-2",
      image: "https://i.imgur.com/4lLSFHj.jpg",
      categoryID: "CAT-outerwear",
      notes: ""
    },
    {
      id: "PIE-misc-ex-2",
      image: "https://i.imgur.com/LV1XMvW.jpg",
      categoryID: "CAT-miscellaneous",
      notes: ""
    },
    {
      id: "PIE-skirts-ex-3",
      image: "https://i.imgur.com/2qdfAHB.jpg",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-skirts-ex-4",
      image: "https://i.imgur.com/DNzhbMo.jpg",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-acc-1",
      image: "https://i.imgur.com/WqSfEuv.jpg",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-ex-2",
      image: "https://i.imgur.com/1xioIok.jpg",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-tops-ex-2",
      image: "https://i.imgur.com/3bibQio.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-misc-ex-3",
      image: "https://i.imgur.com/DytDk1P.jpg",
      categoryID: "CAT-miscellaneous",
      notes: ""
    },
    {
      id: "PIE-skirts-ex-6",
      image: "https://i.imgur.com/MHtx98h.jpg",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-acc-ex-5",
      image: "https://i.imgur.com/f2wfHGn.jpg",
      categoryID: "CAT-acessories",
      notes: ""
    },
    {
      id: "PIE-tops-ex-4",
      image: "https://i.imgur.com/9PpAK5C.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-bags-ex-2",
      image: "https://i.imgur.com/tMJU4uN.jpg",
      categoryID: "CAT-bags",
      notes: ""
    },
    {
      id: "PIE-tops-ex-4",
      image: "https://i.imgur.com/9PpAK5C.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-acc-ex-5",
      image: "https://i.imgur.com/BivYLq5.jpg",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-ex-6",
      image: "https://i.imgur.com/VEKXycp.jpg",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-op-ex-1",
      image: "https://i.imgur.com/mCy2fZz.jpg",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-tops-ex-6",
      image: "https://i.imgur.com/b0SS1PJ.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-pants-ex-3",
      image: "https://i.imgur.com/RTmJKzc.jpg",
      categoryID: "CAT-pants",
      notes: ""
    },
    {
      id: "PIE-op-ex-2",
      image: "https://i.imgur.com/5TRRL59.jpg",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-tops-ex-7",
      image: "https://i.imgur.com/Y9udUcP.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-tops-ex-8",
      image: "https://i.imgur.com/eXWOKl0.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-pants-ex-5",
      image: "https://i.imgur.com/kKo6Dep.jpg",
      categoryID: "CAT-pants",
      notes: ""
    },
    {
      id: "PIE-skirts-ex-7",
      image: "https://i.imgur.com/uOCnlfF.jpg",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-out-ex-1",
      image: "https://i.imgur.com/ceEJTP4.jpg",
      categoryID: "CAT-outerwear",
      notes: ""
    },
    {
      id: "PIE-tops-ex-9",
      image: "https://i.imgur.com/faIHUd2.jpg",
      categoryID: "CAT-tops",
      notes: ""
    },
    {
      id: "PIE-outerwear-ex-4",
      image: "https://i.imgur.com/RprUrJA.jpg",
      categoryID: "CAT-outerwear",
      notes: ""
    },
    {
      id: "PIE-pants-ex-6",
      image: "https://i.imgur.com/m9yTDR9.jpg",
      categoryID: "CAT-pants",
      notes: ""
    },
    {
      id: "PIE-op-ex-6",
      image: "https://i.imgur.com/HHMSiPo.jpg",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-op-ex-10",
      image: "https://i.imgur.com/VxNpHE3.jpg",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-shoes-ex-3",
      image: "https://i.imgur.com/aZd8LVZ.jpg",
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-bags-ex-3",
      image: "https://i.imgur.com/hYuBpK2.jpg",
      categoryID: "CAT-bags",
      notes: "Bottega Venetta"
    },
    {
      id: "PIE-shoes-ex-6",
      image: "https://i.imgur.com/bVxQCOK.jpg",
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-shoes-ex-7",
      image: "https://i.imgur.com/tqPpgRq.jpg",
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-bags-ex-6",
      image: "https://i.imgur.com/7FSXbCC.jpg",
      categoryID: "CAT-bags",
      notes: ""
    },
    {
      id: "PIE-shoes-ex-8",
      image: "https://i.imgur.com/0iZhrDU.jpg",
      categoryID: "CAT-shoes",
      notes: ""
    }
  ],
  user2: [
    {
      id: 'PIE-pants-lg0',
      image: 'https://imgur.com/a/nkYrWxE',
      categoryID: 'CAT-pants',
      notes: ''
    },
    {
      id: 'PIE-pants-lg1',
      image: 'https://imgur.com/a/FIo9yFm',
      categoryID: 'CAT-pants',
      notes: 'Looks best when worn with a bodysuit'
    },
    {
      id: 'PIE-pants-lg2',
      image: 'https://imgur.com/a/GlKAeBp',
      categoryID: 'CAT-pants', 
      notes: ''
    }, 
    {
      id: 'PIE-tops-lg0',
      image: 'https://imgur.com/a/UCIbjbc', 
      categoryID: 'CAT-tops', 
      notes: ''
    },
    {
      id: 'PIE-tops-lg1',
      image: 'https://imgur.com/a/0VtSxVK', 
      categoryID: 'CAT-tops', 
      notes: ''
    },
    {
      id: 'PIE-tops-lg2',
      image: 'https://imgur.com/a/l2MTqaI', 
      categoryID: 'CAT-tops', 
      notes: ''
    },
    {
      id: 'PIE-tops-lg3',
      image: 'https://imgur.com/a/ZbJ3hpJ', 
      categoryID: 'CAT-tops', 
      notes: ''
    },
    {
      id: 'PIE-tops-lg4',
      image: 'https://imgur.com/a/1KMeFzs', 
      categoryID: 'CAT-tops', 
      notes: ''
    },
    {
      id: "PIE-onepiece-lg0",
      image: "https://imgur.com/a/1k2hf71",
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-onepiece-lg1",
      image: 'https://imgur.com/a/V75nR5t',
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-onepiece-lg2",
      image: 'https://imgur.com/a/OUCDb38',
      categoryID: "CAT-onepieces",
      notes: ""
    },
    {
      id: "PIE-bag-lg0",
      image: 'https://imgur.com/a/DXYfoaA',
      categoryID: "CAT-bags",
      notes: ""
    },
    {
      id: "PIE-bag-lg1",
      image: 'https://imgur.com/a/nwXGIMJ',
      categoryID: "CAT-bags",
      notes: ""
    },
    {
      id: "PIE-bag-lg2",
      image: 'https://imgur.com/a/NgxXfNS',
      categoryID: "CAT-bags",
      notes: ""
    },
    {
      id: "PIE-shoe-lg0",
      image: 'https://imgur.com/a/4vYNrP9',
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-shoe-lg1",
      image: 'https://imgur.com/a/Y8jeaao',
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-shoe-lg2",
      image: 'https://imgur.com/a/bpEW28u',
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-shoe-lg3",
      image: 'https://imgur.com/a/crWarFm',
      categoryID: "CAT-shoes",
      notes: ""
    },
    {
      id: "PIE-outer-lg0",
      image: 'https://imgur.com/a/y1koGS2',
      categoryID: "CAT-outerwear",
      notes: ""
    },
    {
      id: "PIE-outer-lg1",
      image: 'https://imgur.com/a/0qPoNGb',
      categoryID: "CAT-outerwear",
      notes: ""
    },
    {
      id: "PIE-acc-lg0",
      image: "https://imgur.com/a/5GigHyN",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-lg1",
      image: "https://imgur.com/a/JUT30U3",
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-lg2",
      image: 'https://imgur.com/a/JpRz1Ly',
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-lg3",
      image: 'https://imgur.com/a/wccj7jT',
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-acc-lg4",
      image: 'https://imgur.com/a/w7cB5Lj',
      categoryID: "CAT-accessories",
      notes: ""
    },
    {
      id: "PIE-skirts-lg0",
      image: "https://imgur.com/a/iJBljOf",
      categoryID: "CAT-skirts",
      notes: ""
    },
    {
      id: "PIE-misc-lg0",
      image: "https://imgur.com/a/d4p2WDv",
      categoryID: "CAT-miscellaneous",
      notes: ""
    }
  ]
}

const outfits = {
  user1: [
    {id: "OUT-outfit-ex-1", fullOutfitImage: "https://i.imgur.com/0CPqUal.png", notes: ""},
    {id: "OUT-outfit-ex-2", fullOutfitImage: "https://i.imgur.com/EqL59lG.jpg", notes: ""},
    {id: "OUT-outfit-ex-3", fullOutfitImage: "https://i.imgur.com/Ndq51uq.jpg", notes: ""},
    {id: "OUT-outfit-ex-4", fullOutfitImage: "https://i.imgur.com/2ZBY3ix.jpg", notes: ""},
    {id: "OUT-outfit-ex-5", fullOutfitImage: "https://i.imgur.com/UxIRW1c.jpg", notes: ""},
    {id: "OUT-outfit-ex-6", fullOutfitImage: "", notes: ""}
  ], 
  user2: [
    {id: "OUT-outfit-ex-1", fullOutfitImage: "https://imgur.com/a/NPy1Kyp", notes: ""},
    {id: "OUT-outfit-ex-2", fullOutfitImage: "https://imgur.com/a/YkKikHT", notes: ""},
    {id: "OUT-outfit-ex-3", fullOutfitImage: "https://imgur.com/a/CuQvfjY", notes: ""},
    {id: "OUT-outfit-ex-4", fullOutfitImage: "https://imgur.com/a/gwcv39a", notes: ""},
    {id: "OUT-outfit-ex-5", fullOutfitImage: "https://imgur.com/a/kabJTzP", notes: ""},
    {id: "OUT-outfit-ex-6", fullOutfitImage: "", notes: ""}
  ]
}

module.exports = {users, pieces, outfits}