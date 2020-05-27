const { isEmail, isLength } = require('validator');
const jwt = require('jwt-simple');
const { User } = require('../models');
const { secret } = require('../config');

function tokenForUser(user) {
  // 1st argument is the information we want to encode
  // 2nd argument is the secret we are going to use to encrypt it
  // By convention all json web tokens have a sub property
  // by sub we mean subject. As in who does this token belong to?
  // iat or issued at time is another convention by  jwt
  const timeStamp = new Date().getTime();
  // This subject will become the payload in our strategy
  // eslint-disable-next-line no-underscore-dangle
  return jwt.encode({ sub: user._id, iat: timeStamp }, secret);
}

module.exports = {
  signUp: async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    console.log(req.body);
    if (!firstName || !lastName) {
      return res.status(422).json({ error: 'You must provide a first and last name.' });
    }

    if (!email || !password) {
      return res.status(422).json({ error: 'You must provide email and password.' });
    }

    if (!isEmail(email)) {
      return res.status(403).json({ error: 'You must provide a valid email address.' });
    }

    if (!isLength(password, { min: 6 })) {
      return res.status(403).json({ error: 'Your password must be at least 6 characters long.' });
    }

    try {
      // See if a user with the given email exists
      const existingUser = await User.findOne({ email });
      if (existingUser) { return res.status(403).json({ error: 'User already exists' }); }
      const user = await new User({ email, password, firstName, lastName }).save();
      const currentUser = await User.findById(user._id).select('-password');
      console.log(user);
      console.log(currentUser);
      //get user without password
      // Eventually we will send a token
      return res.json({ token: tokenForUser(user), user: currentUser});
    } catch (e) {
      console.log(e);
      return res.status(403).json({ e });
    }
  },
  signIn: (req, res) => res.json({ token: tokenForUser(req.user) }),
};
