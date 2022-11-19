import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const SECRET_KEY  = process.env.SECRET_KEY

const generateToken = (data) =>
  jwt.sign({data: data}, SECRET_KEY, { expiresIn:  '24h' });

const generateResetToken = (data) =>
  jwt.sign({data: data}, SECRET_KEY, { expiresIn: '24h'});

const createResetToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  return generateResetToken(payload);
};

const createUserJwt = (user) => {
  const payload = {
    id: user.id,
  };

  return generateToken(payload);
};

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return {};
  }
};

export default {
  generateToken,
  createUserJwt,
  validateToken,
  generateResetToken,
  createResetToken,
};