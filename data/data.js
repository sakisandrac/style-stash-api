const users = [
  {
    id: "1",
    name: "Saki",
    username: "user1",
    password: '1234',
    email: "sakisandra.c@gmail.com"
  },  
  {
    id: "2",
    name: "Laura",
    username: "user2",
    password: '1234',
    email: "l.garciaguerra1@gmail.com"
  }
]

const pieces = [
    {
      id: "PIE-pants-ex-1",
      image: "https://i.imgur.com/ddninn4.jpg",
      user_id: "1",
      category_id: 'CAT-pants',
      note: "These pants are a great conversation starter piece! here are some really really really really really really erally really really really really long note for this piece of pants!"
    },
    {
      id: "PIE-tops-ex-1",
      image: "https://i.imgur.com/mCvW03T.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-skirts-ex-123",
      image: "https://i.imgur.com/qTbnxWX.png",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-skirts-ex-1",
      image: "https://i.imgur.com/GVKEPiN.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-onepiece-ex-1",
      image: "https://i.imgur.com/mroP74J.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-shoes-ex-1",
      image: "https://i.imgur.com/xQNPDND.jpg",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-bags-ex-1",
      image: "https://i.imgur.com/tjrHoPs.jpg",
      user_id: "1",
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-accessories-ex-1",
      image: "https://i.imgur.com/aWoR9up.jpg",
      user_id: "1",
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-outerwear-ex-1",
      image: "https://i.imgur.com/Tm2gIqW.jpg",
      user_id: "1",
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-misc-ex-1",
      image: "https://i.imgur.com/eSO0N4s.jpg",
      user_id: "1",
      category_id: "CAT-miscellaneous",
      note: ""
    },
    {
      id: "PIE-pants-ex-2",
      image: "https://i.imgur.com/k9MlDi0.jpg",
      user_id: "1",
      category_id: "CAT-pants",
      note: ""
    },
    {
      id: "PIE-onepiece-ex-2",
      image: "https://i.imgur.com/xRVD81w.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-skirts-ex-2",
      image: "https://i.imgur.com/afty7SC.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-outer-ex-2",
      image: "https://i.imgur.com/4lLSFHj.jpg",
      user_id: "1",
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-misc-ex-2",
      image: "https://i.imgur.com/LV1XMvW.jpg",
      user_id: "1",
      category_id: "CAT-miscellaneous",
      note: ""
    },
    {
      id: "PIE-skirts-ex-3",
      image: "https://i.imgur.com/2qdfAHB.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-skirts-ex-4",
      image: "https://i.imgur.com/DNzhbMo.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-acc-1",
      image: "https://i.imgur.com/WqSfEuv.jpg",
      user_id: "1",
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-ex-2",
      image: "https://i.imgur.com/1xioIok.jpg",
      user_id: "1",
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-tops-ex-2",
      image: "https://i.imgur.com/3bibQio.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-misc-ex-3",
      image: "https://i.imgur.com/DytDk1P.jpg",
      user_id: "1",
      category_id: "CAT-miscellaneous",
      note: ""
    },
    {
      id: "PIE-skirts-ex-6",
      image: "https://i.imgur.com/MHtx98h.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-acc-ex-900",
      image: "https://i.imgur.com/f2wfHGn.jpg",
      user_id: "1",
      category_id: "CAT-acessories",
      note: ""
    },
    {
      id: "PIE-bag-ex-910",
      image: "https://i.imgur.com/b7q6V2n.png",
      user_id: "1",
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-tops-ex-4",
      image: "https://i.imgur.com/9PpAK5C.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-bags-ex-2",
      image: "https://i.imgur.com/tMJU4uN.jpg",
      user_id: "1",
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-tops-ex-400",
      image: "https://i.imgur.com/9PpAK5C.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-acc-ex-5",
      image: "https://i.imgur.com/BivYLq5.jpg",
      user_id: "1",
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-ex-6",
      image: "https://i.imgur.com/VEKXycp.jpg",
      user_id: "1",
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-op-ex-1",
      image: "https://i.imgur.com/mCy2fZz.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-tops-ex-6",
      image: "https://i.imgur.com/b0SS1PJ.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-OP-ex-62",
      image: "https://i.imgur.com/v5eL6a5.png",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-pants-ex-3",
      image: "https://i.imgur.com/RTmJKzc.jpg",
      user_id: "1",
      category_id: "CAT-pants",
      note: ""
    },
    {
      id: "PIE-op-ex-2",
      image: "https://i.imgur.com/5TRRL59.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-tops-ex-7",
      image: "https://i.imgur.com/Y9udUcP.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-shoes-ex-17",
      image: "https://i.imgur.com/NQy8bMU.png",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-tops-ex-117",
      image: "https://i.imgur.com/ktoHjYO.png",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
  
    {
      id: "PIE-tops-ex-8",
      image: "https://i.imgur.com/eXWOKl0.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-pants-ex-5",
      image: "https://i.imgur.com/kKo6Dep.jpg",
      user_id: "1",
      category_id: "CAT-pants",
      note: ""
    },
    {
      id: "PIE-skirts-ex-7",
      image: "https://i.imgur.com/uOCnlfF.jpg",
      user_id: "1",
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-out-ex-1",
      image: "https://i.imgur.com/ceEJTP4.jpg",
      user_id: "1",
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-tops-ex-9",
      image: "https://i.imgur.com/faIHUd2.jpg",
      user_id: "1",
      category_id: "CAT-tops",
      note: ""
    },
    {
      id: "PIE-outerwear-ex-4",
      image: "https://i.imgur.com/RprUrJA.jpg",
      user_id: "1",
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-pants-ex-6",
      image: "https://i.imgur.com/m9yTDR9.jpg",
      user_id: "1",
      category_id: "CAT-pants",
      note: ""
    },
    {
      id: "PIE-op-ex-6",
      image: "https://i.imgur.com/HHMSiPo.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-op-ex-10",
      image: "https://i.imgur.com/VxNpHE3.jpg",
      user_id: "1",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-shoes-ex-3",
      image: "https://i.imgur.com/aZd8LVZ.jpg",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-bags-ex-3",
      image: "https://i.imgur.com/hYuBpK2.jpg",
      user_id: "1",
      category_id: "CAT-bags",
      note: "Bottega Venetta"
    },
    {
      id: "PIE-shoes-ex-6",
      image: "https://i.imgur.com/bVxQCOK.jpg",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-shoes-ex-7",
      image: "https://i.imgur.com/tqPpgRq.jpg",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-out-ex-17",
      image: "https://i.imgur.com/NnKQ4MG.png",
      user_id: "1",
      category_id: "CAT-outerwear",
      note: ""
    },
    
    {
      id: "PIE-bags-ex-6",
      image: "https://i.imgur.com/7FSXbCC.jpg",
      user_id: "1",
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-shoes-ex-8",
      image: "https://i.imgur.com/0iZhrDU.jpg",
      user_id: "1",
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: 'PIE-pants-lg0',
      image: 'https://i.imgur.com/hcwNUhk.jpeg',
      user_id: "2",
      category_id: 'CAT-pants',
      note: ''
    },
    {
      id: 'PIE-pants-lg1',
      image: 'https://i.imgur.com/824uDKt.jpeg',
      user_id: "2",
      category_id: 'CAT-pants',
      note: 'Looks best when worn with a bodysuit'
    },

    //
    {
      id: 'PIE-pants-lg2',
      image: 'https://i.imgur.com/5Fc4rmz.jpeg',
      user_id: "2",
      category_id: 'CAT-pants',
      note: ''
    },
    {
      id: 'PIE-tops-lg0',
      image: 'https://i.imgur.com/haR3VOK.jpeg',
      user_id: "2",
      category_id: 'CAT-tops',
      note: ''
    },
    {
      id: 'PIE-tops-lg1',
      image: 'https://i.imgur.com/sk5lPYt.jpeg',
      user_id: "2",
      category_id: 'CAT-tops',
      note: ''
    },
    {
      id: 'PIE-tops-lg2',
      image: 'https://i.imgur.com/XdeQ7zZ.jpeg',
      user_id: "2",
      category_id: 'CAT-tops',
      note: ''
    },
    {
      id: 'PIE-tops-lg3',
      image: 'https://i.imgur.com/B3WANg3.jpeg',
      user_id: "2",
      category_id: 'CAT-tops',
      note: ''
    },
    {
      id: 'PIE-tops-lg4',
      image: 'https://i.imgur.com/sDJ7f3H.jpeg',
      user_id: "2",
      category_id: 'CAT-tops',
      note: ''
    },
    {
      id: "PIE-onepiece-lg0",
      image: "https://i.imgur.com/L2yRTWy.jpeg",
      user_id: "2",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-onepiece-lg1",
      image: 'https://i.imgur.com/hLB4Ckd.jpeg',
      user_id: "2",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: "PIE-onepiece-lg2",
      image: 'https://i.imgur.com/6ncqAOi.jpeg',
      user_id: "2",
      category_id: "CAT-onepieces",
      note: ""
    },
    {
      id: 'PIE-onepiece-lg3',
      image: 'https://i.imgur.com/QhG7bYP.jpeg',
      user_id: "2",
      category_id: 'CAT-onepieces',
      note: '',
    },
    {
      id: "PIE-bag-lg0",
      image: 'https://i.imgur.com/lp80hPa.jpeg',
      user_id: "2", 
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-bag-lg1",
      image: 'https://i.imgur.com/p8SFUIf.jpeg',
      user_id: "2", 
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-bag-lg2",
      image: 'https://i.imgur.com/C03sa7B.jpeg',
      user_id: "2", 
      category_id: "CAT-bags",
      note: ""
    },
    {
      id: "PIE-shoe-lg0",
      image: 'https://i.imgur.com/eHr6ETq.jpeg',
      user_id: "2", 
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-shoe-lg1",
      image: 'https://i.imgur.com/m2lvwcA.jpeg',
      user_id: "2", 
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-shoe-lg2",
      image: 'https://i.imgur.com/YQtuN83.jpeg',
      user_id: "2", 
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-shoe-lg3",
      image: 'https://i.imgur.com/qiopEYY.jpeg',
      user_id: "2", 
      category_id: "CAT-shoes",
      note: ""
    },
    {
      id: "PIE-outer-lg0",
      image: 'https://i.imgur.com/Matvubz.jpeg',
      user_id: "2", 
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-outer-lg1",
      image: 'https://i.imgur.com/r3Bsrq0.png',
      user_id: "2", 
      category_id: "CAT-outerwear",
      note: ""
    },
    {
      id: "PIE-acc-lg0",
      image: "https://i.imgur.com/kJKQtue.jpeg",
      user_id: "2", 
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-lg1",
      image: "https://i.imgur.com/HpGld6p.jpeg",
      user_id: "2", 
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-lg2",
      image: 'https://i.imgur.com/3XuA6CU.jpeg',
      user_id: "2", 
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-lg3",
      image: 'https://i.imgur.com/3CG3xtK.jpeg',
      user_id: "2", 
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-acc-lg4",
      image: 'https://i.imgur.com/vZYyLni.jpeg',
      user_id: "2", 
      category_id: "CAT-accessories",
      note: ""
    },
    {
      id: "PIE-skirts-lg0",
      image: "https://i.imgur.com/FIDJmqI.jpeg",
      user_id: "2", 
      category_id: "CAT-skirts",
      note: ""
    },
    {
      id: "PIE-misc-lg0",
      image: "https://i.imgur.com/MIUBBQt.jpeg",
      user_id: "2", 
      category_id: "CAT-miscellaneous",
      note: ""
    }
  ]

const outfits = 
 [
    {id: "OUT-outfit-sc-3", user_id: "1", image: "https://i.imgur.com/Ndq51uq.jpg", note: ""},
    {id: "OUT-outfit-sc-5", user_id: "1", image: "https://i.imgur.com/2ZBY3ix.jpg", note: ""},
    {id: "OUT-outfit-sc-4", user_id: "1", image: "https://i.imgur.com/UxIRW1c.jpg", note: ""},
    {id: "OUT-outfit-sc-6", user_id: "1", image: "", note: ""},
    {id: "OUT-outfit-lg-1", user_id: "2", image: "https://i.imgur.com/Oo4qkhn.jpeg", note: ""},
    {id: "OUT-outfit-lg-2", user_id: "2", image: "https://i.imgur.com/0CPqUal.png", note: ""},
    {id: "OUT-outfit-lg-3", user_id: "2", image: "https://i.imgur.com/phQ7cly.jpeg", note: ""},
    { id: "OUT-outfit-lg-4", user_id: "2", image: "https://i.imgur.com/cUtWAdS.jpeg", note: "" },
    {id:"OUT-outfit-lg-5", user_id: "2", image: "https://i.imgur.com/HTPUB29.jpeg", note: ""},
    {id: "OUT-outfit-lg-6", user_id: "2", image: "https://i.imgur.com/AQYAY96.jpeg", note: ""},
    {id: "OUT-outfit-lg-7", user_id: "2", image: "", note: ""},
  ]

const outfitToPieces = [
  {id: "OTP-otp-sc-10", outfit_id: "OUT-outfit-sc-3", piece_id: 'PIE-shoes-ex-8'},
  {id: "OTP-otp-sc-11", outfit_id: "OUT-outfit-sc-3", piece_id: 'PIE-bags-ex-3'},
  {id: "OTP-otp-sc-13", outfit_id: "OUT-outfit-sc-3", piece_id: 'PIE-OP-ex-62'},
  {id: "OTP-otp-sc-14", outfit_id: "OUT-outfit-sc-4", piece_id: 'PIE-tops-ex-117'},
  {id: "OTP-otp-sc-15", outfit_id: "OUT-outfit-sc-4", piece_id: 'PIE-out-ex-17'},
  {id: "OTP-otp-sc-16", outfit_id: "OUT-outfit-sc-4", piece_id: 'PIE-shoes-ex-1'},
  {id: "OTP-otp-sc-17", outfit_id: "OUT-outfit-sc-4", piece_id: 'PIE-skirts-ex-123'},
  {id: "OTP-otp-sc-18", outfit_id: "OUT-outfit-sc-5", piece_id: 'PIE-pants-ex-1'},
  {id: "OTP-otp-sc-19", outfit_id: "OUT-outfit-sc-5", piece_id: 'PIE-bag-ex-910'},
  {id: "OTP-otp-sc-20", outfit_id: "OUT-outfit-sc-5", piece_id: 'PIE-shoes-ex-17'},
  {id: "OTP-otp-sc-21", outfit_id: "OUT-outfit-sc-5", piece_id: 'PIE-outer-ex-2'},
  {id: "OTP-otp-sc-23", outfit_id: "OUT-outfit-sc-6", piece_id: 'PIE-shoes-ex-8'},
  {id: "OTP-otp-sc-24", outfit_id: "OUT-outfit-sc-6", piece_id: 'PIE-bags-ex-6'},
  {id: "OTP-otp-sc-25", outfit_id: "OUT-outfit-sc-6", piece_id: 'PIE-tops-ex-9'},
  {id: "OTP-otp-sc-26", outfit_id: "OUT-outfit-sc-6", piece_id: 'PIE-acc-ex-6'},
  {id: "OTP-otp-lg-1", outfit_id: "OUT-outfit-lg-1", piece_id: 'PIE-bag-lg0'},
  {id: "OTP-otp-lg-2", outfit_id: "OUT-outfit-lg-1", piece_id: 'PIE-pants-lg0'},
  {id: "OTP-otp-lg-3", outfit_id: "OUT-outfit-lg-1", piece_id: 'PIE-tops-lg3' },
  {id: "OTP-otp-lg-4", outfit_id: "OUT-outfit-lg-2", piece_id: 'PIE-shoe-lg3' },
  {id: "OTP-otp-lg-5", outfit_id: "OUT-outfit-lg-2", piece_id: 'PIE-bag-lg1'},
  {id: "OTP-otp-lg-6", outfit_id: "OUT-outfit-lg-2", piece_id: 'PIE-onepiece-lg0'},
  {id: "OTP-otp-lg-7", outfit_id: "OUT-outfit-lg-2", piece_id: 'PIE-outer-lg1'},
  {id: "OTP-otp-lg-8", outfit_id: "OUT-outfit-lg-3", piece_id: 'PIE-pants-lg0'},
  {id: "OTP-otp-lg-9", outfit_id: "OUT-outfit-lg-3", piece_id: 'PIE-tops-lg4'},
  {id: "OTP-otp-lg-10", outfit_id: "OUT-outfit-lg-3", piece_id: 'PIE-acc-lg1'},
  {id: "OTP-otp-lg-11", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-pants-lg0'},
  {id: "OTP-otp-lg-12", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-shoe-lg3'},
  {id: "OTP-otp-lg-13", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-outer-lg0'},
  {id: "OTP-otp-lg-14", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-bag-lg2'},
  {id: "OTP-otp-lg-15", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-acc-lg4'},
  {id: "OTP-otp-lg-16", outfit_id: "OUT-outfit-lg-4", piece_id: 'PIE-acc-lg1'},
  {id: "OTP-otp-lg-17", outfit_id: "OUT-outfit-lg-5", piece_id: 'PIE-tops-lg1'},
  {id: "OTP-otp-lg-18", outfit_id: "OUT-outfit-lg-5", piece_id: 'PIE-pants-lg2'},
  {id: "OTP-otp-lg-19", outfit_id: "OUT-outfit-lg-6", piece_id: 'PIE-onepiece-lg3'},
  {id: "OTP-otp-lg-20", outfit_id: "OUT-outfit-lg-6", piece_id: 'PIE-shoe-lg3'},
  {id: "OTP-otp-lg-21", outfit_id: "OUT-outfit-lg-7", piece_id: 'PIE-onepiece-lg2'},
  {id: "OTP-otp-lg-22", outfit_id: "OUT-outfit-lg-7", piece_id: 'PIE-misc-lg0'},
  {id: "OTP-otp-lg-23", outfit_id: "OUT-outfit-lg-7", piece_id: 'PIE-acc-lg0'},
  {id: "OTP-otp-lg-24", outfit_id: "OUT-outfit-lg-7", piece_id: 'PIE-shoe-lg2'},
]
module.exports = {users, pieces, outfits, outfitToPieces}