(function() {
  var assert, core, geRepositoryAsync, getNodeAsync, getRepository, getSession, getSessionAsync, getSuite, getTestedNode, nodeInstance, repositoryInstance, sessionInstance, setNode, setRepository, setSession, vows, _;
  vows = require("vows");
  assert = require("assert");
  core = require("../NoCR.js");
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
  repositoryInstance = null;
  getRepository = function() {
    return repositoryInstance;
  };
  geRepositoryAsync = function(callback, err) {
    return callback(err, repositoryInstance);
  };
  setRepository = function(session) {
    return repositoryInstance = session;
  };
  getSuite = function() {
    var suite;
    return suite = {
      "Direct Access tests (cf jcr-spec v2 pdf p88)": {
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
        }
      },
      "S.getNodeByIdentifier(id(N)) returns N": {
        topic: function() {
          return getSession().getNodeByIdentifier(getTestedNode().getIdentifier(), this.callback);
        },
        "verify node": function(err, N) {
          return assert.ok(N === getTestedNode(), "equality must be verified");
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
  exports.setRepository = setRepository;
}).call(this);
