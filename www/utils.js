module.exports = {
  isEmail: function (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  sayHello: function (name) {
    return `Hello, ${name}!`;
  }
};
