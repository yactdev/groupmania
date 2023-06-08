const User = require('../models/users');
User.findOne({ where: { email: req.body.email } });
