(function() {
  var NEQItem, NEQNode, NEQProperty, NEQRepository, NEQSession, NEQWorkspace, RepositoryManager;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  RepositoryManager = (function() {
    function RepositoryManager() {}
    RepositoryManager.registry = {};
    RepositoryManager.prototype.register = function(id, repository) {
      return this.registry[id] = repository;
    };
    RepositoryManager.prototype.getRepository = function(id) {
      return this.registry[id];
    };
    return RepositoryManager;
  })();
  exports.manager = new RepositoryManager;
  NEQWorkspace = (function() {
    function NEQWorkspace() {
      throw new Error("NEQWorkspace must be implemented");
    }
    NEQWorkspace.prototype.getRepository = function() {};
    return NEQWorkspace;
  })();
  exports.Workspace = NEQWorkspace;
  NEQSession = (function() {
    function NEQSession() {
      throw new Error("NEQSession must be implemented");
    }
    NEQSession.prototype.getUserID = function() {};
    NEQSession.prototype.getItem = function(absPath) {};
    NEQSession.prototype.getRootNode = function() {};
    NEQSession.prototype.getNode = function(absPath) {};
    NEQSession.prototype.getNodeByIdentifier = function(uuid) {};
    NEQSession.prototype.getRepository = function() {};
    NEQSession.prototype.impersonate = function(credentials) {};
    return NEQSession;
  })();
  exports.session = NEQSession;
  NEQRepository = (function() {
    function NEQRepository() {
      throw new Error("NEQRepository must be implemented");
    }
    NEQRepository.prototype.login = function(credentials) {};
    NEQRepository.prototype.getRoot = function() {};
    return NEQRepository;
  })();
  exports.Repository = NEQRepository;
  NEQItem = (function() {
    function NEQItem() {
      throw new Error("NEQItem must be implemented");
    }
    NEQItem.prototype.accept = function(visitor) {};
    NEQItem.prototype.getName = function() {};
    NEQItem.prototype.getParent = function() {};
    NEQItem.prototype.getPath = function() {};
    NEQItem.prototype.getDepth = function() {};
    NEQItem.prototype.getAncestror = function(depth) {};
    NEQItem.prototype.getSession = function() {};
    NEQItem.prototype.isModified = function() {};
    NEQItem.prototype.isNew = function() {};
    NEQItem.prototype.isNode = function() {};
    NEQItem.prototype.isSame = function(otherItem) {};
    NEQItem.prototype.refresh = function(keepChanges) {};
    NEQItem.prototype.remove = function() {};
    return NEQItem;
  })();
  exports.Item = NEQItem;
  NEQNode = (function() {
    __extends(NEQNode, NEQItem);
    function NEQNode() {
      throw new Error("NEQNode must be implemented");
    }
    NEQNode.prototype.addNode = function() {};
    NEQNode.prototype.addMixin = function() {};
    NEQNode.prototype.getNodes = function() {};
    NEQNode.prototype.getProperties = function() {};
    NEQNode.prototype.getIdentifier = function() {};
    NEQNode.prototype.hasNode = function() {};
    return NEQNode;
  })();
  exports.Node = NEQNode;
  NEQProperty = (function() {
    __extends(NEQProperty, NEQItem);
    function NEQProperty() {
      throw new Error("NEQProperty must be implemented");
    }
    NEQProperty.prototype.getBinary = function() {};
    return NEQProperty;
  })();
  exports.Property = NEQProperty;
}).call(this);
