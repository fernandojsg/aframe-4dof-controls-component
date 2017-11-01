/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * 4dof Controls component for A-Frame.
	 */
	AFRAME.registerComponent('4dof-controls', {
	  schema: {
	    events: {type: 'array'},
	    length: {default: 2},
	    maxAngle: {default: 115},
	    minAngle: {default: 0},
	    target: {type: 'selector'}
	  },

	  multiple: false,

	  init: function () {
	    var dstEl;
	    var self = this;
	    var el = this.el;

	    dstEl = this.targetEl = this.data.target || el.firstElementChild;

	    this.controlledConnected = false;
	    this.handMultiplier = 1;

	    el.addEventListener('controllerconnected', function (evt) {
	      self.handMultiplier = evt.detail.component.data.hand === 'left' ? -1 : 1;
	      self.controlledConnected = true;
	    });

	    this.prevRoll = undefined;
	    if (this.data.events.length > 0) {
	      for (var i = 0; i < this.data.events.length; i++) {
	        var eventName = this.data.events[i];
	        el.addEventListener(eventName, (function (eventName) {
	          return function (evt) {
	            dstEl.emit(eventName, evt, false);
	          };
	        })(eventName));
	      }
	    }
	  },

	  update: function () {
	    this.minAngleRad = this.data.minAngle * THREE.Math.DEG2RAD;
	    this.maxAngleRad = this.data.maxAngle * THREE.Math.DEG2RAD;
	    this.angleRangeRad = this.maxAngleRad - this.minAngleRad;
	  },

	  remove: function () { },

	  tick: function () {
	    if (!this.controlledConnected) {
	      return;
	    }

	    var roll = this.handMultiplier * this.el.object3D.rotation.z;

	    if (roll < this.minAngleRad) {
	      roll = this.minAngleRad;
	    } else if (roll > this.maxAngleRad) {
	      roll = this.maxAngleRad;
	    }

	    if (roll !== this.prevRoll) {
	      this.targetEl.setAttribute('position', {z: -this.data.length * roll / this.angleRangeRad});
	      this.prevRoll = roll;
	    }
	  }
	});


/***/ })
/******/ ]);