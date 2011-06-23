(function() {
  var assert, core, getNodeAsync, getSession, getSessionAsync, getSuite, getTestedNode, nodeInstance, sessionInstance, setNode, setSession, vows, _;
  vows = require("vows");
  assert = require("assert");
  core = require("../src/NuQCore.js");
  _ = require("util");
  nodeInstance = null;
  getTestedNode = function() {
    return nodeInstance;
  };
  setNode = function(node) {
    return nodeInstance = node;
  };
  getNodeAsync = function(callback, err) {
    return callback(err, nodeInstance);
  };
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
      '[Nu-Q] Testing instance of Node': {
        topic: function() {
          return getNodeAsync(this.callback);
        },
        "Instance of NuQNode": function(err, node) {
          return assert.ok(node instanceof core.Node, "Node is not instance of NuQNode");
        },
        "Instance of NuQItem": function(err, node) {
          return assert.ok(node instanceof core.Item, "Node is not instance of NuQItem");
        },
        "GetPath returns String": function(err, node) {
          return assert.ok(typeof node.getPath() === 'string', "GetPath return type is not string");
        }
      },
      "Verify Session": {
        topic: function() {
          return getSession().getNode(getTestedNode().getPath(), this.callback);
        },
        "Compare objects": function(err, node) {
          assert.ok(node !== void 0, "node is undefined");
          assert.ok(node instanceof core.Node, "Node is not instance of NuQNode");
          assert.ok(node instanceof core.Item, "Node is not instance of NuQItem");
          return assert.ok(getTestedNode() === node, "equality must be verified");
        }
      },
      "Direct Access tests (cf jcr-spec.pdf p88, v2)": {
        topic: function() {
          return getSessionAsync(this.callback);
        },
        "S.getItem(p(N)) returns N.": function(err, S) {
          return S.getItem(getTestedNode().getPath(), function(err, N) {
            return assert.ok(N === getTestedNode(), "equality must be verified");
          });
        },
        "S.itemExists(p(N)) returns true": function(err, S) {
          return S.itemExists(getTestedNode().getPath(), function(err, res) {
            return assert.ok(res);
          });
        },
        "S.getNode(p(N)) returns N.": function(err, S) {
          return S.getNode(getTestedNode().getPath(), function(err, N) {
            return assert.ok(N === getTestedNode(), "equality must be verified");
          });
        },
        "S.nodeExists(p(N)) returns true": function(err, S) {
          return S.nodeExists(getTestedNode().getPath(), function(err, res) {
            return assert.ok(res);
          });
        },
        "S.getNodeByIdentifier(id(N)) returns N": function(err, S) {
          return S.getNodeByIdentifier(getTestedNode().getIdentifier(), function(err, N) {
            return assert.ok(N === getTestedNode(), "equality must be verified");
          });
        },
        "If N is the primary item of a node M then M.getPrimaryItem() returns N": function(err, S) {
          return assert.ok(false, "Test not implemented");
        },
        "If N is the root node of the workspace then S.getRootNode() returns N": function(err, S) {
          return assert.ok(false, "Test not implemented");
        },
        "For all nodes M to which S has direct access, M.getNode(p(M,N)) returns N": function(err, S) {
          return assert.ok(false, "Test not implemented");
        },
        "For all nodes M to which S has direct access, M.hasNode(p(M,N)) returns true": function(err, S) {
          return assert.ok(false, "Test not implemented");
        }
      }
    };
  };
  exports.getTestedNode = getTestedNode;
  exports.getSuite = getSuite;
  exports.setNode = setNode;
  exports.setSession = setSession;
}).call(this);
