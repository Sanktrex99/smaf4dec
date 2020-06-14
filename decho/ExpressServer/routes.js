const express = require('express');
const router = express.Router();

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/twitter/auth', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));
