const express = require('express');
const { register, login } = require('../controllers/authController');
const { auth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


router.get('/protected', auth, (req, res) => {
    res.send('This is a protected route, user ID: ' + req.user.userId);
});

module.exports = router;
