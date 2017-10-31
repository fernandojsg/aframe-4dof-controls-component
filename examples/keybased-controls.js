AFRAME.registerComponent('keybased-controls', {
  //schema: {hand: 'left'},
  init: function () {
    var dstEl = document.getElementById('hand');
    var el = this.el;
    el.addEventListener('trackpadup', function(evt) {
      dstEl.emit('gripopen', evt, false);
    });
    el.addEventListener('trackpaddown', function(evt) {
      dstEl.emit('gripclose', evt, false);
    });
  },
  tick: function () {
    var diff=0.1;
    if (this.el.object3D.rotation.z > 0.1) {
      var dstEl = document.getElementById('hand');
      dstEl.setAttribute('position',{x:0, y:0, z: 0.1 - this.el.object3D.rotation.z * 2});
    }
  },
  update: function () {
  }
});
