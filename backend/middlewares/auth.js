const jwt = require('jsonwebtoken');
const moment = require('moment');
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .json('The request does not has a authorization header');
  } else {
    try {
      console.log(req.headers.authorization);
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      console.log(decodedToken);
      req.UserId = decodedToken.userid;

      const userId = decodedToken.userid;

      if (decodedToken.exp < moment().unix()) {
        return res.status(401).json({ message: 'Expired token' });
      }
      if (req.body.id && req.body.id !== userId) {
        throw 'Invalid user ID';
      } else {
      }
      next();
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!'),
      });
    }
  }
};
