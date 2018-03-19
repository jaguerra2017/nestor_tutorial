var Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res) {
  Author.find(function(err, authors) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(authors);
  });
};

// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
  Author.findOne({_id:req.params.id},function (err,author) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(author);
  })
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
  let AuthorGet = new Author({
    first_name: req.body.first_name,
    family_name: req.body.family_name,
    date_of_birth: req.body.date_of_birth,
    date_of_death: req.body.date_of_death
  })

  AuthorGet.save(function(err, authors) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(authors);
  });
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
  Author.remove({_id:req.params.id},function (err,author) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(author);
  })
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
  Author.remove({_id:req.body.id},function (err,author) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(author);
  })
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
  Author.findOneAndUpdate({_id:req.params.id},{
    first_name: req.body.first_name,
    family_name: req.body.family_name,
    date_of_birth: req.body.date_of_birth,
    date_of_death: req.body.date_of_death
  }, function (err,author) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(author);
  })
};