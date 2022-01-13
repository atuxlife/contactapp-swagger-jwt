"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsers = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.t0 = Promise;
            _context.t1 = _User["default"];
            _context.next = 10;
            return _User["default"].encryptPassword("AZ92adx$!");

          case 10:
            _context.t2 = _context.sent;
            _context.t3 = {
              firstname: "Carlos",
              lastname: "Jacquin",
              idnumber: 72288848,
              typedoc: "CC",
              address: "Calle 74 # 39 - 32",
              phone: "3182310491",
              email: "atuxlife@gmail.com",
              password: _context.t2,
              role: "admin"
            };
            _context.t4 = new _context.t1(_context.t3).save();
            _context.t5 = _User["default"];
            _context.next = 16;
            return _User["default"].encryptPassword("Pass123$!");

          case 16:
            _context.t6 = _context.sent;
            _context.t7 = {
              firstname: "Mauricio",
              lastname: "Montes",
              idnumber: 72288616,
              typedoc: "CC",
              address: "Calle 94 # 43 - 108",
              phone: "3143156971",
              email: "mmontesrestrepo@gmail.com",
              password: _context.t6,
              role: "user"
            };
            _context.t8 = new _context.t5(_context.t7).save();
            _context.t9 = _User["default"];
            _context.next = 22;
            return _User["default"].encryptPassword("Pass123$!");

          case 22:
            _context.t10 = _context.sent;
            _context.t11 = {
              firstname: "Laura",
              lastname: "Torres",
              idnumber: 32288616,
              typedoc: "CC",
              address: "Calle 45 # 9F - 45",
              phone: "3143340403",
              email: "lalatorres@gmail.com",
              password: _context.t10,
              role: "user"
            };
            _context.t12 = new _context.t9(_context.t11).save();
            _context.t13 = [_context.t4, _context.t8, _context.t12];
            _context.next = 28;
            return _context.t0.all.call(_context.t0, _context.t13);

          case 28:
            values = _context.sent;
            console.log(values);
            _context.next = 35;
            break;

          case 32:
            _context.prev = 32;
            _context.t14 = _context["catch"](0);
            console.error(_context.t14);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 32]]);
  }));

  return function createUsers() {
    return _ref.apply(this, arguments);
  };
}();

exports.createUsers = createUsers;