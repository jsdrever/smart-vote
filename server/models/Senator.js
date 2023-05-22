const { Schema, model } = require('mongoose');
// const { default: Senator } = require('../../client/src/components/pages/Senators');

const senatorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  PartyAffiliation: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Senator = model('SenatorsPics', senatorSchema);

module.exports = Senator;
