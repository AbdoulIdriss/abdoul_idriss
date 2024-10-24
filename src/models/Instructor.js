// models/Instructor.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({

  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  contactNumber: { 
    type: Number, 
    required: true 
  },

});

module.exports = mongoose.model('Instructor', instructorSchema);
