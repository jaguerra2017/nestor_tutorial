var BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
  BookInstance.find(function(err, bookinstances) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstances);
  });
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
  BookInstance.findOne({_id:req.params.id},function (err,bookinstance) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstance);
  })
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
  let BookInstanceGet = new BookInstance({
    book: req.body.book,
    imprint: req.body.imprint,
    status: req.body.status,
    due_back: req.body.due_back
  })

  BookInstanceGet.save(function(err, bookinstances) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstances);
  });
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
  BookInstance.remove({_id:req.params.id},function (err,bookinstance) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstance);
  })
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
  BookInstance.remove({_id:req.body.id},function (err,bookinstance) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstance);
  })
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
  BookInstance.findOneAndUpdate({_id:req.params.id},{
    book: req.body.book,
    imprint: req.body.imprint,
    status: req.body.status,
    due_back: req.body.due_back
  }, function (err,bookinstance) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json(bookinstance);
  })
};