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
    _ = require('util');

function getSuite(repository) {
	return {
		'Testing a custom implementation of Node': {
	        topic: undefined, // topic should be set in custom implementation test suite 
	        'instanceof NuQRepository': function(topic) {
//	        	console.log(topic);
	        	assert.ok((topic instanceof core.Repository),'topic is not instanceOf NuQRepository');
	        }
		}
	};
};

function implSuite(instance) {
	var context = {
	        topic: instance,
	        'instanceof NuQRepository': function(instance) {
//	        	console.log(instance);
	        	assert.ok((instance instanceof core.Repository),'topic is not instanceOf NuQRepository');
	        }
	    };

	    return context;
}
exports.implSuite = implSuite;
exports.getSuite = getSuite;