const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MiningServerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('miningserver', MiningServerSchema);
