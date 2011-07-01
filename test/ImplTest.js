(function() {
  var datests, nodetest, nodetypemanagertest, repositorytest, sessionInstance;
  datests = require('./DirectAccessTest.js');
  nodetest = require('./NodeImplTest.js');
  nodetypemanagertest = require('./NodeTypeManagerTest.js');
  repositorytest = require('./RepositoryImplTest.js');
  exports.setRepository = function(repo) {
    repositorytest.setRepository(repo);
    return datests.setRepository(repo);
  };
  sessionInstance = null;
  exports.getSession = function() {
    return sessionInstance;
  };
  exports.setSession = function(session) {
    datests.setSession(session);
    nodetest.setSession(session);
    nodetypemanagertest.setSession(session);
    return sessionInstance = session;
  };
  exports.getSessionAsync = function(callback) {
    return nodetest.getSessionAsync(callback);
  };
  exports.setNode = function(node) {
    nodetest.setNode(node);
    return datests.setNode(node);
  };
  exports.getNode = function() {
    return nodetest.getNode();
  };
  exports.getRepository = function() {
    return repositorytest.getRepository();
  };
  exports.addNoCRBatch = function(suite) {
    suite.addBatch(repositorytest.getSuite());
    suite.addBatch(nodetypemanagertest.getSuite());
    suite.addBatch(nodetest.getSuite());
    return suite.addBatch(datests.getSuite());
  };
}).call(this);
