const express = require('express');
const progressController = require('../controllers/progressController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'user');
};

router
  .post('/', auth, progressController.createProgress)
  .get('/lawsuit/:id', auth, progressController.indexProgressOfLawsuit)
  .get('/:id/translation', auth, progressController.showProgressTranslation);

module.exports = router;
