const mongoose = require('mongoose');

const tshirtSchema = new mongoose.Schema({
    username: String,
    isInterested:{type:Boolean, default:false},
    menOption: {
      supimaCotton: {type:Boolean, default:false},
      sweatWickingFabric: {type:Boolean, default:false},
    },
    womenOption: {
      supimaCotton: {type:Boolean, default:false},
      sweatWickingFabric: {type:Boolean, default:false},
    },
    grandKidsOption: {
      supimaCotton: {type:Boolean, default:false},
    },
    quantity: {
      menQuantity: {
        supimaCotton: {
          sSize: {type:Number, default:0},
          mSize: {type:Number, Default:0},
          lSize: {type:Number, Default:0},
          xlSize: {type:Number, Default:0},
          xxlSize: {type:Number, default:0},
          xxxlSize:{type:Number, default:0},
        },
        sweatWickingFabric: {
          sSize: {type:Number, default:0},
          mSize: {type:Number, default:0},
          lSize: {type:Number, default:0},
          xlSize: {type:Number, default:0},
          xxlSize: {type:Number, default:0},
          xxxlSize: {type:Number, default:0},
        }
      },
      womenQuantity: {
        supimaCotton: {
          sSize: {type:Number, default:0},
          mSize: {type:Number, default:0},
          lSize: {type:Number, default:0},
          xlSize: {type:Number, default:0},
        },
        
      },
      grandKids: {
        girls: {
          category1: {type:Number, default:0},
          category2: {type:Number, default:0},
          category3: {type:Number, default:0},
        },
        boys: {
          category1: {type:Number, default:0},
          category2: {type:Number, default:0},
          category3: {type:Number, default:0},
        }
      }
    }
  });

module.exports = mongoose.model('Tshirt', tshirtSchema);
