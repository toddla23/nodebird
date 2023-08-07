const express = require('express');
const { renderProfile, renderJoin, renderMain } = require('../controllers/page');
const { isLoggenIn, isNotLoggenIn } = require('../middlewares');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', isLoggenIn, renderProfile);

router.get('/join', isNotLoggenIn, renderJoin);

router.get('/', renderMain);

module.exports = router;