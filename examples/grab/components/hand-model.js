/* THREE.JSONLoader component. */
AFRAME.registerComponent('hand-model', {
  schema: {
    default: 'right'
  },

  init: function () {
    var self = this;

    this.loader = new THREE.ObjectLoader();
    this.loader.setCrossOrigin('anonymous');
    this.controllerConnected = false;
    this.mesh = null;

    this.el.addEventListener('controllerconnected', function() {
      if (self.mesh) {
        console.log('>>>>1');
        self.mesh.visible = true;
      }
      self.controllerConnected = true;
    });
  },

  update: function () {
    var self = this;
    var el = this.el;
    var url = 'https://cdn.aframe.io/controllers/oculus-hands/v2/' + this.data + 'Hand.json';
    this.loader.load(url, function (geometry) {
      self.mesh = geometry.getObjectByName('Hand');
      //self.mesh.visible = self.controllerConnected;
      console.log('>>>>2', self.controllerConnected);
      el.setObject3D('mesh', self.mesh);
    });
  }
});
