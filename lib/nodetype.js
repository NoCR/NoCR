(function() {
  /*
   * This file is part of No-CR.
   *
   * No-CR is free software: you can redistribute it and/or modify
   * it under the terms of the GNU Lesser General Public License as published by
   * the Free Software Foundation, either version 3 of the License, or
   * any later version.
   *
   * No-CR is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU Lesser General Public License for more details.
   *
   * You should have received a copy of the GNU Lesser General Public License
   * along with No-CR.  If not, see <http://www.gnu.org/licenses/>.
  
  
  */  var NodeType;
  NodeType = (function() {
    function NodeType() {
      throw new Error("NodeType must be implemented");
    }
    /*
        # Returns true if this node type allows the addition of a child node called childNodeName
        # of node type nodeTypeName.
        #  If it's called without specific node type information (nodeTypeName is not specified - undefined)
        # (that is, given the definition of this parent node type, the child node name is sufficient
        # to determine the intended child node type).
        */
    NodeType.prototype.canAddChildNode = function(nodeName, nodeTypeName) {
      throw new Error("method not implemented");
    };
    /*
        # Returns true if removing the child node called nodeName is allowed by this node type.
        */
    NodeType.prototype.canRemoveNode = function(nodeName) {
      throw new Error("method not implemented");
    };
    /*
        # Returns true if removing the property called propertyName is allowed by this node type.
        */
    NodeType.prototype.canRemoveProperty = function(propertyName) {
      throw new Error("method not implemented");
    };
    /*
        # Returns true if setting propertyName to value is allowed by this node type.
        # value parameter can either be a single value as an array of values
        */
    NodeType.prototype.canSetProperty = function(propertyName, value) {
      throw new Error("method not implemented");
    };
    /*
        # Returns an array containing the child node definitions of this node type.
        */
    NodeType.prototype.getChildNodeDefinitions = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns the direct subtypes of this node type in the node type inheritance hierarchy
        # that is, those which actually declared this node type in their list of supertypes.
        */
    NodeType.prototype.getDeclaredSubtypes = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns the direct supertypes of this node type in the
        # node type inheritance hierarchy, that is, those actually declared in this node type.
        */
    NodeType.prototype.getDeclaredSupertypes = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns an array containing the property definitions of this node type.
        */
    NodeType.prototype.getPropertyDefinitions = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns all subtypes of this node type in the node type inheritance hierarchy.
        */
    NodeType.prototype.getSubtypes = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns all supertypes of this node type in the node type inheritance hierarchy.
        */
    NodeType.prototype.getSupertypes = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns true if the name of this node type or any of its direct or indirect supertypes is equal to nodeTypeName, otherwise returns false.
        */
    NodeType.prototype.isNodeType = function(nodeTypeName) {
      throw new Error("method not implemented");
    };
    return NodeType;
  })();
  exports.NodeType = NodeType;
}).call(this);
