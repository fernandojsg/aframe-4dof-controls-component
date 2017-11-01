## aframe-4dof-controls-component

[![Version](http://img.shields.io/npm/v/aframe-4dof-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-4dof-controls-component)
[![License](http://img.shields.io/npm/l/aframe-4dof-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-4dof-controls-component)

A 4dof Controls component for A-Frame based on the original idea in the [Thinking Beyond a Rotation-Only Controller](https://www.youtube.com/watch?v=7z1xYmJPhI4) talk.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| events         | List of events to redirect to the target element. | |
| length         | Maximum length to move the target element | 2 |
| maxAngle         | Maximum angle to rotate on Z | 115 |
| minAngle         | Minimum angle to rotate on Z | 0 |
| target         | Selector for the target element, if not defined it will default to the first child of the element. |  |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-4dof-controls-component/dist/aframe-4dof-controls-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity daydream-controls gearvr-controls 4dof-controls>
      <a-entity><!-- hand --></a-entity>
    </a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-4dof-controls-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-4dof-controls-component
```

Then require and use.

```js
require('aframe');
require('aframe-4dof-controls-component');
```
