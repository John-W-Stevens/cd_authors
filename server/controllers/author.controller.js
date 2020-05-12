const { Author } = require("../models/author.model")

// CRUD Operations for Author Documnet

// Get All Authors: READ
module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(allAuthors => response.json({Authors: allAuthors}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

// Get a Single Author: READ
module.exports.findOneSingleAuthor = (request, response) => {
    Author.find({_id: request.params.id})
        .then(oneSingleAuthor => response.json({ Author: oneSingleAuthor}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};

// Create an Author: CREATE
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name,
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
};

// Update an Author: UPDATE
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(error => response.status(400).json(error))
}

// Delete an Author: DELETE
module.exports.deleteAuthor= (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}