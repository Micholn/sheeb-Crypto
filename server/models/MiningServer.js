const MiningServerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('miningserver', MiningServerSchema);
