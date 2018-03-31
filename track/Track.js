var mongoose = require('mongoose');  
var TrackSchema = new mongoose.Schema({  
  identification: String,
  time : { type : Date,
   default: Date.now
    },
  longitude: String,
  latitude: String
});
mongoose.model('Track', TrackSchema);
module.exports = mongoose.model('Track');