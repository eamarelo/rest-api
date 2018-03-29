var mongoose = require('mongoose');  
var TrackSchema = new mongoose.Schema({  
  identification: String,
  longitude: String,
  latitude: String
});
mongoose.model('Track', TrackSchema);
module.exports = mongoose.model('Track');