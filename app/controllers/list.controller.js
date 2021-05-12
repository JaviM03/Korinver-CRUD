const db = require("../models");
const List = db.list;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  };

  // Create a List
  const list = {
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false
  };

  // Save List in the database
  List.create(list)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List."
      });
    });
};

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    List.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving lists."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    List.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving List with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    List.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update List with id=${id}. Maybe List was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating List with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    List.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete List with id=${id}. Maybe List was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete List with id=" + id
        });
      });
  };

// Delete all Lists from the database.
exports.deleteAll = (req, res) => {
    List.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Lists were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all lists."
        });
      });
  };

// Find all done Lists
exports.findAllDone = (req, res) => {
    List.findAll({ where: { done: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving lists."
        });
      });
  };