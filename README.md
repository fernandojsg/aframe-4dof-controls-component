## aframe-4dof-controls-component

[![Version](http://img.shields.io/npm/v/aframe-4dof-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-4dof-controls-component)
[![License](http://img.shields.io/npm/l/aframe-4dof-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-4dof-controls-component)

A 4dof Controls component for A-Frame.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-4dof-controls-component/dist/aframe-4dof-controls-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity 4dof-controls="foo: bar"></a-entity>
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
