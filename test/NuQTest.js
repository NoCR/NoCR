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
  */  var Node, a, core;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = require('./NuQCore.coffee');
  Node = (function() {
    __extends(Node, core.Node);
    function Node() {}
    Node.prototype.accept = function() {};
    return Node;
  })();
  console.log("test");
  a = new Node();
  console.log(a);
  a.accept;
}).call(this);
