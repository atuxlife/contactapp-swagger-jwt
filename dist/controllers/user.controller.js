"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.unFollowUser = exports.getUsers = exports.getUserById = exports.getFilteredUsers = exports.followUser = exports.deleteUserById = exports.createUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Follow = _interopRequireDefault(require("../models/Follow"));

var _cleanParams = require("../libs/cleanParams");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, firstname, lastname, idnumber, typedoc, address, phone, email, password, role, newUser, savedUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, idnumber = _req$body.idnumber, typedoc = _req$body.typedoc, address = _req$body.address, phone = _req$body.phone, email = _req$body.email, password = _req$body.password, role = _req$body.role;
            _context.t0 = _User["default"];
            _context.t1 = firstname;
            _context.t2 = lastname;
            _context.t3 = idnumber;
            _context.t4 = typedoc;
            _context.t5 = address;
            _context.t6 = phone;
            _context.t7 = email;
            _context.next = 11;
            return _User["default"].encryptPassword(password);

          case 11:
            _context.t8 = _context.sent;
            _context.t9 = role;
            _context.t10 = {
              firstname: _context.t1,
              lastname: _context.t2,
              idnumber: _context.t3,
              typedoc: _context.t4,
              address: _context.t5,
              phone: _context.t6,
              email: _context.t7,
              password: _context.t8,
              role: _context.t9
            };
            newUser = new _context.t0(_context.t10);
            _context.next = 17;
            return newUser.save();

          case 17:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(200).json(savedUser));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var limit, page, users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = req.query.limit || 10;
            page = req.query.page || 1;
            _context2.next = 4;
            return _User["default"].paginate({}, {
              limit: limit,
              page: page
            });

          case 4:
            users = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(users));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User["default"].findById(req.params.id);

          case 2:
            user = _context3.sent;

            if (user) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 5:
            return _context3.abrupt("return", res.status(200).json(user));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var getFilteredUsers = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var limit, page, objClean, users;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            limit = req.query.limit || 10;
            page = req.query.page || 1;
            objClean = (0, _cleanParams.cleanParams)(req.body);
            _context4.next = 5;
            return _User["default"].paginate({
              objClean: objClean
            }, {
              limit: limit,
              page: page
            });

          case 5:
            users = _context4.sent;

            if (!(!users || users.length == 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 8:
            return _context4.abrupt("return", res.status(200).json(users));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getFilteredUsers(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFilteredUsers = getFilteredUsers;

var updateUserById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var updatedUser;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            updatedUser = _context5.sent;

            if (updatedUser) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 5:
            return _context5.abrupt("return", res.status(200).json(updatedUser));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateUserById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUserById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deletedUser;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _User["default"].findByIdAndDelete(id);

          case 3:
            deletedUser = _context6.sent;

            if (deletedUser) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 6:
            return _context6.abrupt("return", res.status(200).json({
              message: 'User deleted successfully'
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteUserById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;

var followUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, userToFollow, isFollow, followUser;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return _User["default"].findById(id, {
              password: 0
            });

          case 3:
            userToFollow = _context7.sent;

            if (userToFollow) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "No user to follow found"
            }));

          case 6:
            _context7.next = 8;
            return _Follow["default"].findOne({
              userid: req.userId,
              followid: id
            });

          case 8:
            isFollow = _context7.sent;

            if (!isFollow) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", res.status(406).json({
              message: "You're already following this user"
            }));

          case 11:
            followUser = new _Follow["default"]({
              userid: req.userId,
              followid: id
            });
            followUser.save();
            return _context7.abrupt("return", res.status(200).json({
              message: 'User was successfully followed'
            }));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function followUser(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.followUser = followUser;

var unFollowUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, userToUnfollow, isFollow;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.next = 3;
            return _User["default"].findById(id, {
              password: 0
            });

          case 3:
            userToUnfollow = _context8.sent;

            if (userToUnfollow) {
              _context8.next = 6;
              break;
            }

            return _context8.abrupt("return", res.status(404).json({
              message: "No user to unfollow found"
            }));

          case 6:
            _context8.next = 8;
            return _Follow["default"].findOne({
              userid: req.userId,
              followid: id
            });

          case 8:
            isFollow = _context8.sent;

            if (isFollow) {
              _context8.next = 11;
              break;
            }

            return _context8.abrupt("return", res.status(406).json({
              message: "You're not following this user"
            }));

          case 11:
            _context8.next = 13;
            return _Follow["default"].findByIdAndDelete(isFollow._id);

          case 13:
            return _context8.abrupt("return", res.status(200).json({
              message: "You've unfollowed this user"
            }));

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function unFollowUser(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.unFollowUser = unFollowUser;