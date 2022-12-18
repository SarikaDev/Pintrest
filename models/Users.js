const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please fill the Email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please Name the Password"],
    unique: true,
    trim: true,
  },
});

const UsersSchema =
  mongoose.models.userLoggedIn_Details ||
  mongoose.model("userLoggedIn_Details", Schema);

export default UsersSchema;
