const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  checklistName: {
    type: String,
    trim: true,
  },
  checklistType: {
      type: String,
      trim: true
  },
  entries: [{
      entryname: String,
      description: String,
      dueDate: Date,
      completedDate: Date,
      completed: Boolean
  }],
  createDate: Date,
  completedDate: Date,
  completed: Boolean
});

module.exports = mongoose.model('Checklist', checklistSchema);