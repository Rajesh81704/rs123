const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: String,
  phone: String,
  chargePerHour: String,
  imageSrc: String,
  portfolio: String, 
  email: String, 
  photoshootType: String, 
  eventRate: String, 
  overview: String, 
  serviceLocation: String,
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
