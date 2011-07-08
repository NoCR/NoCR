(function() {
  var assert, getSession, getSessionAsync, impltest, nocr, sessionInstance, vows, _;
  vows = require("vows");
  assert = require("assert");
  nocr = require("../NoCR.js");
  impltest = require("./ImplTest.js");
  _ = require('util');
  sessionInstance = null;
  getSession = function() {
    return impltest.getSession();
  };
  getSessionAsync = function(callback, err) {
    return callback(err, impltest.getSession());
  };
  exports.getSuite = function() {
    var suite;
    return suite = {
      '[NoCR] Testing RootNode nodeType property': {
        topic: function() {
          var self;
          self = this;
          return getSessionAsync(function(err, session) {
            return session.getRootNode(function(err, node) {
              return node.getProperty('nt:primaryType', function(err, property) {
                return self.callback(err, property);
              });
            });
          });
        },
        "Test property return instance": function(err, property) {
          return assert.ok(property instanceof nocr.Property, "Returned property is not a Property instance");
        },
        "Test property type": function(err, property) {
          return assert.ok(property.getType() === 'NAME');
        },
        "Test property value": function(err, property) {
          return assert.ok(property.getString() === 'nt:unstructured');
        }
      },
      '[NoCR] Testing RootNode set property': {
        topic: function() {
          var self;
          self = this;
          return getSessionAsync(function(err, session) {
            return session.getRootNode(function(err, node) {
              node.setProperty("myproperty", "mavaleur");
              return node.getProperty("myproperty", self.callback);
            });
          });
        },
        "verifying setted property": function(err, property) {
          return assert.ok(property instanceof nocr.Property, "Error at node.getProperty() instanceof Property");
        },
        "Testing value of previously setted property": function(err, property) {
          return assert.ok(property.getString() === "mavaleur", "Error, incorrect string value returned");
        },
        "deleting property and testing if getProperty throws error (with no callback)": function(err, node) {
          var assertfunc, checkerr;
          assertfunc = function() {
            node.setProperty("myproperty");
            return node.getProperty("myproperty", function(err, prop) {
              if (err !== null) {
                throw new Error(err);
              }
            });
          };
          checkerr = function(err) {
            assert.ok(err instanceof Error);
            assert.ok(err.message = "Property not found in node");
            return true;
          };
          return assert.throws(assertfunc, checkerr, "Should throw an error");
        },
        "Testing if getProperty with a callback send an error": function(err, node) {
          var assertfunc, checkerr;
          assertfunc = function() {
            return node.getProperty("myproperty", function(err, prop) {
              if (err !== null && typeof prop === 'undefined') {
                return throws(new Error(err));
              }
            });
          };
          checkerr = function(err) {
            assert.ok(err instanceof Error);
            assert.ok(err.message = "Property not found in node");
            return true;
          };
          return assert.throws(assertfunc, checkerr, "Should throw an error");
        }
      },
      '[NoCR] Testing a created property': {
        topic: function() {
          var self;
          self = this;
          return getSessionAsync(function(err, session) {
            return session.getRootNode(function(err, node) {
              node.setProperty("myproperty", "mavaleur");
              return node.getProperty("myproperty", self.callback);
            });
          });
        },
        "Testing getPath result": function(err, property) {
          return assert.ok(property.getPath() === '/myproperty', "Incorrect path " + property.getPath());
        }
      }
    };
  };
}).call(this);
