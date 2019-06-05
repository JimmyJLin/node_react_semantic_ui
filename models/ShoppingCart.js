const mongoose = require('mongoose');
const { Schema } = mongoose;

const shoppingCartSchema = new Schema({
  clientId: { type: String },
  varians_id: { type: String },
  name: { type: String },
  productId: { type: String },
  productHandle: { type: String },
  imgUrl: { type: String },
  color: { type: String },
  size: { type: String },
  price: { type: Number },
  weight: { type: Number },
  weight_unit: { type: String },
  qty: { type: Number },
  compledtedCheckout: { type: Boolean, default: false },
  addToCartDate: { type: Date, default: Date.now }
})

mongoose.model('shoppingCart', shoppingCartSchema);
