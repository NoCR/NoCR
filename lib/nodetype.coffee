###
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


###

class NodeType
    constructor: ->
        throw new Error "NodeType must be implemented"
    ###
    # Returns true if this node type allows the addition of a child node called childNodeName
    # of node type nodeTypeName.
    #  If it's called without specific node type information (nodeTypeName is not specified - undefined)
    # (that is, given the definition of this parent node type, the child node name is sufficient
    # to determine the intended child node type).
    ###
    canAddChildNode: (nodeName, nodeTypeName) ->
        throw new Error "method not implemented"
    
    ###
    # Returns true if removing the child node called nodeName is allowed by this node type.
    ###
    canRemoveNode: (nodeName) ->
        throw new Error "method not implemented"
    
    ###
    # Returns true if removing the property called propertyName is allowed by this node type.
    ###
    canRemoveProperty: (propertyName) ->
        throw new Error "method not implemented"
    
    ###
    # Returns true if setting propertyName to value is allowed by this node type.
    # value parameter can either be a single value as an array of values
    ###
    canSetProperty: (propertyName, value) ->
        throw new Error "method not implemented"
    
    ###
    # Returns an array containing the child node definitions of this node type.
    ###
    getChildNodeDefinitions: ->
        throw new Error "method not implemented"
    
    ###
    # Returns the direct subtypes of this node type in the node type inheritance hierarchy
    # that is, those which actually declared this node type in their list of supertypes.
    ###
    getDeclaredSubtypes: ->
        throw new Error "method not implemented"
    
    ###
    # Returns the direct supertypes of this node type in the
    # node type inheritance hierarchy, that is, those actually declared in this node type.
    ###
    getDeclaredSupertypes: ->
        throw new Error "method not implemented"
    
    ###
    # Returns an array containing the property definitions of this node type.
    ###
    getPropertyDefinitions: ->
        throw new Error "method not implemented"
    
    ###
    # Returns all subtypes of this node type in the node type inheritance hierarchy.
    ###
    getSubtypes: ->
        throw new Error "method not implemented"
    
    ###
    # Returns all supertypes of this node type in the node type inheritance hierarchy.
    ###
    getSupertypes: ->
        throw new Error "method not implemented"
    
    ###
    # Returns true if the name of this node type or any of its direct or indirect supertypes is equal to nodeTypeName, otherwise returns false.
    ###
    isNodeType: (nodeTypeName)->
        throw new Error "method not implemented"

exports.NodeType = NodeType