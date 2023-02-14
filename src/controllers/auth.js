const { callbackErrorHandler } = require('../middleware/error-handlers');
const { errors } = require('../utils/errors');
const { createJWT } = require('../utils/token');

module.exports.login = (User) => {
  return callbackErrorHandler(async function (req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      throw errors.NOT_FOUND(`User with email : '${email}' not found`);
    }

    const isPasswordCorrect = password === user.password;

    if (!isPasswordCorrect) {
      throw errors.VALIDATION('Incorrect password');
    }

    const token = createJWT(user);

    return res.status(200).json({
      token
    });
  });
};
