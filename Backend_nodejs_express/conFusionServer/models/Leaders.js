let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
    },
    abbr: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    featured: {
      type: Boolean,
      required: true
  }
}, {
    timestamps: true
});

let Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;