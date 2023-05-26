const mongoose = require('mongoose')

const { Schema } = mongoose
// const { default: Senator } = require('../../client/src/components/pages/Senators');

const senatorSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  PartyAffiliation: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Senator = mongoose.model('Senator', senatorSchema);

module.exports = Senator;
