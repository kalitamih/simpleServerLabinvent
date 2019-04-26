const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  task: { type: String, required: true },
  'eth-ip': { type: String, required: true },
  'eth-ip-addr': { type: String, required: true },
  'eth-mask': { type: String, required: true },
  'eth-gtw': { type: String, required: true },
  'eth-dns': { type: String, required: true },
  'eth-main-dns': { type: String, required: true },
  'eth-sub-dns': { type: String, required: true },
  wifi: { type: Boolean, required: true },
  point: {
    favorite: Boolean,
    name: String,
    strength: Number,
    security: [String],
  },
  security: { type: Boolean, required: true },
  key: { type: String, required: true },
  'wifi-ip': { type: String, required: true },
  'wifi-ip-addr': { type: String, required: true },
  'wifi-mask': { type: String, required: true },
  'wifi-gtw': { type: String, required: true },
  'wifi-dns': { type: String, required: true },
  'wifi-main-dns': { type: String, required: true },
  'wifi-sub-dns': { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);
