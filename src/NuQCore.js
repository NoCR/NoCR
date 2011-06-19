(function() {
  /*
   * This file is part of Nu-Q.
   *
   * Nu-Q is free software: you can redistribute it and/or modify
   * it under the terms of the GNU Lesser General Public License as published by
   * the Free Software Foundation, either version 3 of the License, or
   * any later version.
   *
   * Nu-Q is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU Lesser General Public License for more details.
   *
   * You should have received a copy of the GNU Lesser General Public License
   * along with Nu-Q.  If not, see <http://www.gnu.org/licenses/>.
  */  var NuQItem, NuQNode, NuQProperty, NuQRepository, NuQSession, NuQWorkspace, RepositoryManager;
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
  NuQWorkspace = (function() {
    function NuQWorkspace() {
      throw new Error("NuQWorkspace must be implemented");
    }
    NuQWorkspace.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    return NuQWorkspace;
  })();
  exports.Workspace = NuQWorkspace;
  NuQSession = (function() {
    function NuQSession() {
      throw new Error("NuQSession must be implemented");
    }
    NuQSession.prototype.getUserID = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getItem = function(absPath) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getRootNode = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getNode = function(absPath) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getNodeByIdentifier = function(uuid) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.checkPermission = function(abspath, action) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.impersonate = function(credentials) {
      throw new Error("method not implemented");
    };
    return NuQSession;
  })();
  exports.Session = NuQSession;
  NuQRepository = (function() {
    function NuQRepository() {
      throw new Error("NuQRepository must be implemented");
    }
    NuQRepository.prototype.login = function(credentials) {
      throw new Error("method not implemented");
    };
    NuQRepository.prototype.getRoot = function() {
      throw new Error("method not implemented");
    };
    return NuQRepository;
  })();
  exports.Repository = NuQRepository;
  NuQItem = (function() {
    function NuQItem() {
      throw new Error("NuQItem must be implemented");
    }
    NuQItem.prototype.accept = function(visitor) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getName = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getParent = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getPath = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getDepth = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getAncestror = function(depth) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getSession = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isModified = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isNew = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isNode = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isSame = function(otherItem) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.refresh = function(keepChanges) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.remove = function() {
      throw new Error("method not implemented");
    };
    return NuQItem;
  })();
  exports.Item = NuQItem;
  NuQNode = (function() {
    __extends(NuQNode, NuQItem);
    function NuQNode() {
      throw new Error("NuQNode must be implemented");
    }
    NuQNode.prototype.addNode = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.addMixin = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getNodes = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getProperties = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getIdentifier = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.hasNode = function() {
      throw new Error("method not implemented");
    };
    return NuQNode;
  })();
  exports.Node = NuQNode;
  NuQProperty = (function() {
    __extends(NuQProperty, NuQItem);
    function NuQProperty() {
      throw new Error("NuQProperty must be implemented");
    }
    NuQProperty.prototype.getBinary = function() {};
    return NuQProperty;
  })();
  exports.Property = NuQProperty;
}).call(this);
