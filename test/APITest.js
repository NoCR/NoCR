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
 */
var vows = require('vows'),
    assert = require('assert'),
    core = require("../src/NuQCore.js"),
    _ = require('util'),
    a, MyRepository,
/**
 * Subclass implementation
 */
MyNode = function() {
	/**
	 *  Below is an override example
	 */
	this.accept = function() {
	    _.log("Overrides accept");
    };
    // Constructor of subclass
    _.log("Subclass constructor");
    _.log("`this` in contructor : ");
    console.log(this);
    _.log("`MyNode.super_` in contructor : ");
    // MyNode._super access superclass's type prototype
    console.log(MyNode.super_.constructor);
    // 
    // How to call super (as core.Node is an interface, this cannot be done here
    //MyNode.super_.constructor.apply(this, arguments);
    
};
_.inherits(MyNode,core.Node);

exports.suite1 = vows.describe('Nu-Q core API validation').addBatch({
	'Testing a custom implementation of Node': {
        topic: function() {
        	return new MyNode();
        },
        'instanceof NuQItem': function(topic) {
        	assert.ok((topic instanceof core.Item),'topic is not instanceOf NuQItem');
        },
        'instanceof NuQNode': function(topic) {
        	assert.ok(topic instanceof core.Node,'topic is not instanceOf NuQNode');
        },
        'instanceof MyNode': function(topic) {
        	assert.ok(topic instanceof MyNode,'topic is not instanceOf MyNode');
        },
        "Parent's unimplemented method throws exception": function(topic) {
        	assert.throws(function() {
        		topic.getProperties();
        	}, Error);
        },
        "Parent of Parent's unimplemented method throws exception": function(topic) {
        	assert.throws(function() {
        		topic.getName();
        	}, Error);
        }
    }
});