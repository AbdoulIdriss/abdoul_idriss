// models/Schedule.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  courseId: 
  { type: Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  instructorId: 
  { type: Schema.Types.ObjectId, 
    ref: 'Instructor', 
    required: true 
  },
  classroom: 
  { 
    type: String, 
    required: true 
  },
  date: 
  { type: Date, 
    required: true,
    default: Date.now //to change later 
  },
  startTime: 
  { type: String, 
    required: true 
  },
  endTime: 
  { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
