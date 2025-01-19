const mongoose = require("mongoose");

async function connecttomonogodb(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Ensure compatibility with modern MongoDB versions
  });
}

module.exports = {
  connecttomonogodb,
};
