var Genre = require('../models/genre');

// Display list of all Genre.
exports.genre_list = function(req, res) {
  Genre.find(function(err, genres) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genres);
  });
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
  Genre.findOne({_id:req.params.id},function (err,genre) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genre);
  })
};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
  let GenreGet = new Genre({
    name: req.body.name
  })

  GenreGet.save(function(err, genres) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genres);
  });
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
  Genre.remove({_id:req.params.id},function (err,genre) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genre);
  })
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
  Genre.remove({_id:req.body.id},function (err,genre) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genre);
  })
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
  Genre.findOneAndUpdate({_id:req.params.id},{
    name: req.body.name
  }, function (err,genre) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(genre);
  })
};