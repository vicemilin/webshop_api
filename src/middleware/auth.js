const jwt = require('jsonwebtoken');

const { UNAUTHORIZED } = require('../helpers/errorHelper');

module.exports.authMiddleware = (req, res, next) => {
  // #swagger.autoHeaders=false
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(UNAUTHORIZED('No token provided'));
  }

  const token = authorization.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    return next();
  } catch (err) {
    console.error(err);
    return next(UNAUTHORIZED(err.message));
  }
};
