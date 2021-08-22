const bcrypt = require("bcryptjs");
const helpers = {};
//cifrado de la contraseña
helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

//comparacion de la contraseña ingresada con la almacenada de manera cifrada en la base de datos
helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (err) {
    console.log(err);
  }
};
module.exports = helpers;
