module.exports = app => {
    const list = require("../controllers/list.controller.js");
  
    var router = require("express").Router();
  
    // Create a new List
    router.post("/", list.create);
  
    // Retrieve all Lists
    router.get("/", list.findAll);
  
    // Retrieve all published Lists
    router.get("/done", list.findAllDone);
  
    // Retrieve a single List with id
    router.get("/:id", list.findOne);
  
    // Update a List with id
    router.put("/:id", list.update);
  
    // Delete a List with id
    router.delete("/:id", list.delete);
  
    // Create a new List
    router.delete("/", list.deleteAll);
  
    app.use('/api/list', router);
  };