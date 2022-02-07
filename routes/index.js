var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Checklist = mongoose.model('Checklist');

/* GET home page. */
router.get('/', function(req, res, next) {
  Checklist.find()
    .then((checklists) => {      
      const currentChecklists = checklists.filter(checklist => !checklist.completed);
      const completedChecklists = checklists.filter(checklist => checklist.completed === true);

      console.log(`Total checklists: ${checklists.length}   Current tasks: ${currentChecklists.length}    Completed tasks:  ${completedChecklists.length}`)
      res.render('index', { currentChecklists: currentChecklists, completedChecklists: completedChecklists });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/addChecklist', function(req, res, next) {
  const checklistName = req.body.checklistName;
  const createDate = Date.now();
  
  var checklist = new Checklist({
    checklistName: taskName,
    createDate: createDate
  });
  console.log(`Adding a new check list ${checklistName} - createDate ${createDate}`)

  task.save()
      .then(() => { 
        console.log(`Added new check list ${checklistName} - createDate ${createDate}`)        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
});

router.post('/editChecklist', function(req, res, next) {
  console.log("I am in the PUT method - editChecklist")

  /*const taskId = req.body._id;
  const completedDate = Date.now();

  Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now()})
    .then(() => { 
      console.log(`Completed task ${taskId}`)
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });*/
});


router.post('/cloneChecklist', function(req, res, next) {
  console.log("cloneChecklist")
  /*const taskId = req.body._id;
  const completedDate = Date.now();
  Task.findByIdAndDelete(taskId)
    .then(() => { 
      console.log(`Deleted task $(taskId)`)      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });*/
});


module.exports = router;
