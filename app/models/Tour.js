const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    username: String,
    isInterested:{type:Boolean, default:false},
    paxCount: {
      trichy: {type:Number, default:0},
      phuketKrabi: {type:Number, default:0},
      mysoreBandipur: {type:Number, default:0},
      belurHampi: {type:Number, default:0},
    }
  });

module.exports = mongoose.model('Tour', tourSchema);
