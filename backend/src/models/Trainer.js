const { Schema, model } = require("mongoose");

const TrainerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Trainer", TrainerSchema);
