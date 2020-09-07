const { Schema, model } = require("mongoose");

const PokeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: String,
});

const TeamSchema = new Schema(
  {
    title: String,
    pokes: [PokeSchema],
    trainer: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Team", TeamSchema);
