// models/Category.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  
  name: 
    { 
      type: String,
      enum : ['mathematics', 'physics' , 'biology'],
      required: true 
    },

  description: 
    { 
      type: String, 
      required: false 
    }
});

module.exports = mongoose.model('Category', categorySchema);