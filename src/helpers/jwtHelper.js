const jwt = require('jsonwebtoken');

module.exports.createJWT = (user) => {
  return jwt.sign(
    { id: user.id, user_role: user.role_id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};
