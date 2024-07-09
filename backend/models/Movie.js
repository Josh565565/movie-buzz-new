const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now
    // },
    // // Add a reference to the user who created the movie
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // },
    // // Add a reference to the user who updated the movie
    // updatedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // },
  },
  {
    timestamps: true,
  }
);

const student = mongoose.model("movie", studentSchema);

module.exports = student;
