(function() {
  var credentials, datests, getCredentials, getCredentialsAsync, nodetest, nodetypemanagertest, postsavetest, repository, repositorytest, sessionInstance, sessionsavetest, setCredentials;
  datests = require('./DirectAccessTest.js');
  nodetest = require('./NodeImplTest.js');
  nodetypemanagertest = require('./NodeTypeManagerTest.js');
  repositorytest = require('./RepositoryImplTest.js');
  sessionsavetest = require("./SaveSessionTest.js");
  postsavetest = require("./PostSessionSaveTest.js");
  repository = null;
  exports.setRepository = function(repo) {
    repositorytest.setRepository(repo);
    datests.setRepository(repo);
    return repository = repo;
  };
  exports.getRepository = function() {
    return repository;
  };
  credentials = null;
  getCredentials = function() {
    return credentials;
  };
  exports.getCredentials = getCredentials;
  getCredentialsAsync = function(callback) {
    return callback(null, credentials);
  };
  exports.getCredentialsAsync = getCredentialsAsync;
  setCredentials = function(creds) {
    credentials = creds;
    return postsavetest.setCredentials(creds);
  };
  exports.setCredentials = setCredentials;
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
  exports.addNoCRBatch = function(suite) {
    var createnodetest, propertytest;
    suite.addBatch(repositorytest.getSuite());
    suite.addBatch(nodetypemanagertest.getSuite());
    propertytest = require("./RootNodePropertyTest.js");
    suite.addBatch(propertytest.getSuite());
    createnodetest = require("./CreateNodeTest.js");
    suite.addBatch(createnodetest.getSuite());
    suite.addBatch(sessionsavetest.getSuite());
    suite.addBatch(postsavetest.getSuite());
    suite.addBatch(nodetest.getSuite());
    return suite.addBatch(datests.getSuite());
  };
}).call(this);
