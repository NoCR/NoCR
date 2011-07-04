(function() {
  var assert, core, getSession, getSessionAsync, getSuite, sessionInstance, setSession, vows, _;
  vows = require("vows");
  assert = require("assert");
  core = require("../NoCR.js");
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
  getSuite = function() {
    var suite;
    return suite = {
      '[NoCR] Testing NodeTypeManager': {
        topic: function() {
          var self;
          self = this;
          return getSessionAsync(function(err, session) {
            return self.callback(null, session.getWorkspace().getNodeTypeManager());
          });
        },
        "has function getNodeType": function(err, nodeTypeManager) {
          return assert.ok(typeof nodeTypeManager.getNodeType !== 'undefined', "getNodeType method not found");
        },
        "Check for type 'nt:base'": function(err, nodeTypeManager) {
          var type;
          type = nodeTypeManager.getNodeType('nt:base');
          assert.ok(type instanceof core.NodeType, "nodeTypeManager.getNodeType('nt:base') doesn't returns a valid type object");
          return assert.ok(type.isNodeType('nt:base', "type.isNodeType 'nt:base' false"));
        },
        "Check for type 'nt:unstructured'": function(err, nodeTypeManager) {
          var type;
          type = nodeTypeManager.getNodeType('nt:unstructured');
          assert.ok(type instanceof core.nodetype.NodeType, "nodeTypeManager.getNodeType('nt:unstructured') doesn't returns a valid type object");
          return assert.ok(type.isNodeType('nt:unstructured', "type.isNodeType 'nt:unstructured' false"));
        }
      }
    };
  };
  exports.getSuite = getSuite;
  exports.setSession = setSession;
}).call(this);
