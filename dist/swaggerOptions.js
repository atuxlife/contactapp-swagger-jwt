"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RV Contacts API",
      version: "1.0.0",
      description: "RV Contacts simple API (Tecnical Test)"
    },
    servers: [{
      url: "http://localhost:8000"
    }]
  },
  apis: ["./src/routes/*.js"]
};
exports.options = options;