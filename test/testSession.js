(function() {
  var assert, core, getSession, getSessionAsync, sessionInstance, setSession, vows, _;
  vows = require("vows");
  assert = require("assert");
  core = require("../src/NuQCore.js");
  _ = require("util");
  sessionInstance = null;
  getSession = function() {
    return sessionInstance;
  };
  getSessionAsync = function(callback, err) {
    return callback(err, sessionInstance);
  };
  setSession = function(session) {
    return sessionInstance = session;
  };
}).call(this);
