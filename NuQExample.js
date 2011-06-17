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
var core = require("./src/NuQCore.js"), a,
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
	    
	},
	MyRepository,
	_ = require('util');

console.log(_);
_.inherits(MyNode,core.Node);
  console.log(MyNode);

a = new MyNode();	
console.log(a);
_.log('test override');
a.accept();
_.log("test a parent's method");
try {
	a.getProperties();
} catch (e) {
	// As it's not overriden, throws an error
	_.log(e.stack);
}
_.log("test a parentparent's method");
try {
	a.getName();
} catch (e) {
	// As it's not overriden, throws an error
	_.log(e.stack);
}
_.log("instanceOf NuQItem : " + (a instanceof core.Item) );
_.log("instanceOf NuQNode : " + (a instanceof core.Node) );
_.log("instanceOf MyNode : " + (a instanceof MyNode) );