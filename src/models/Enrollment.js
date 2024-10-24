// models/Enrollment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({

  studentId: 
  { 
    type: Schema.Types.ObjectId, 
    ref: 'Student', 
    required: true 
  },
  courseId: 
  { 
    type: Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  enrollmentDate: 
  { 
    type: Date, 
    default: Date.now 
  }

});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
