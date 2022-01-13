"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var mongooseOptions, db;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          mongooseOptions = {
            dbName: process.env.DB_NAME,
            auth: {
              username: process.env.DB_USER,
              password: process.env.DB_PASW
            }
          }; //const db = mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PORT}`, mongooseOptions);

          db = _mongoose["default"].connect("mongodb+srv://".concat(process.env.DB_HOST), mongooseOptions);
          _context.t0 = console;
          _context.next = 6;
          return db;

        case 6:
          _context.t1 = _context.sent.connection.name;

          _context.t0.log.call(_context.t0, 'Database is connected: ', _context.t1);

          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t2 = _context["catch"](0);
          console.error(_context.t2);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 10]]);
}))();