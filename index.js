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

    this.controllerConnected = false;
    this.handMultiplier = 1;

    el.addEventListener('controllerconnected', function (evt) {
      self.handMultiplier = evt.detail.component.data.hand === 'left' ? -1 : 1;
      self.controllerConnected = true;
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
    this.zPosition = {z: 0};
  },

  update: function () {
    this.minAngleRad = this.data.minAngle * THREE.Math.DEG2RAD;
    this.maxAngleRad = this.data.maxAngle * THREE.Math.DEG2RAD;
    this.angleRangeRad = this.maxAngleRad - this.minAngleRad;
  },

  remove: function () { },

  tick: function () {
    if (!this.controllerConnected) {
      return;
    }

    var roll = this.handMultiplier * this.el.object3D.rotation.z;

    if (roll < this.minAngleRad) {
      roll = this.minAngleRad;
    } else if (roll > this.maxAngleRad) {
      roll = this.maxAngleRad;
    }

    if (roll !== this.prevRoll) {
      this.zPosition.z = -this.data.length * roll / this.angleRangeRad;
      this.targetEl.setAttribute('position', this.zPosition);
      this.prevRoll = roll;
    }
  }
});
