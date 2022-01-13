"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var followSchema = new _mongoose.Schema({
  userid: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  },
  followid: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Follow', followSchema);

exports["default"] = _default;