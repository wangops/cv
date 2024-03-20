<template>
    <div class="container gl-background"  id="gl"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from "three"
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js"
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js" 
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js'
onMounted(async () => {
    const clock = new THREE.Clock();
    const stats = initStats();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(0x000000, 1.0);
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMap.enabled = true;

    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = 0;
    camera.lookAt(new THREE.Vector3(0, 5, 0))
    scene.add(camera)

    // const trackballControls = new TrackballControls(camera,document.getElementById('gl')!);
    // trackballControls.rotateSpeed = 1.0;
    // trackballControls.zoomSpeed = 1.0;
    // trackballControls.panSpeed = 1.0;

    // const flyControl = new FlyControls(camera,document.getElementById('gl')!)
    // flyControl.rollSpeed = Math.PI / 24;
    // flyControl.autoForward = true;
    // flyControl.dragToLook = false;

    const firstControl = new FirstPersonControls(camera, document.getElementById('gl')!)
    firstControl.lookSpeed = 0.1;
    firstControl.movementSpeed = 20;
    firstControl.lookVertical = true;
    firstControl.constrainVertical = true;
    firstControl.verticalMin = 1.0;
    firstControl.verticalMax = 2.0;
    firstControl.lookAt(0,5,0)

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 300, 0);
    spotLight.intensity = 1000;
    spotLight.castShadow = true
    scene.add(spotLight);

    document.getElementById("gl")!.appendChild(webGLRenderer.domElement);

    
    const texture = await new THREE.TextureLoader().loadAsync('/textures/metro01.jpg')
    const loader = new MTLLoader()
    const material = await loader.loadAsync("/models/city.mtl")
    material.preload()
    const objLoader = new OBJLoader()
    objLoader.setMaterials(material)
    const object = await objLoader.loadAsync("/models/city.obj")
    object.castShadow = true
    object.material = material
    spotLight.target = object
    object.children.forEach((child:THREE.Mesh) => {
        child.castShadow = true
        child.receiveShadow = true
    })
    scene.add(object)


    const animate = function () {
        const delta = clock.getDelta();
        requestAnimationFrame(animate);
        webGLRenderer.render(scene, camera);
        //trackballControls.update(delta);
        //flyControl.update(delta)
        firstControl.update(delta)
    }
    animate()
})







// var step = 0;


// // setup the control gui
// var controls = new function () {
//     // we need the first child, since it's a multimaterial


// };

// var gui = new dat.GUI();
// var mesh;

// var loader = new THREE.OBJMTLLoader();
// var load = function (object) {
//     var scale = chroma.scale(['red', 'green', 'blue']);
//     setRandomColors(object, scale);
//     mesh = object;
//     scene.add(mesh);
// };


// 
// //texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
// loader.load('../assets/models/city.obj', '../assets/models/city.mtl', load);
// //texture.repeat.set( 1 , 1);


// function setCamControls() {

// }

// render();

// function setRandomColors(object:THREE.Object3D, scale:Function) {
//     var children = object.children;


//     if (children && children.length > 0) {
//         children.forEach(function (e) {
//             setRandomColors(e, scale)
//         });
//     } else {
//         // no children assume contains a mesh
//         if (object instanceof THREE.Mesh) {

//             object.material.color = new THREE.Color(scale(Math.random()).hex());
//             if (object.material.name.indexOf("building") == 0) {
//                 object.material.emissive = new THREE.Color(0x444444);
//                 object.material.transparent = true;
//                 object.material.opacity = 0.8;
//             }
//         }
//     }
// }


// function render() {
//     stats.update();
//     var delta = clock.getDelta();

//     trackballControls.update(delta);
//     //webGLRenderer.clear();
//     // render using requestAnimationFrame
//     requestAnimationFrame(render);
//     webGLRenderer.render(scene, camera)
// }

// function initStats() {

//     var stats = new Stats();
//     stats.showPanel(0); // 0: fps, 1: ms

//     // Align top-left
//     stats.dom.style.position = 'absolute';
//     stats.dom.style.left = '0px';
//     stats.dom.style.top = '0px';

//     document.getElementById("app")!.appendChild(stats.dom);

//     return stats;
// }
// }
const initStats = ()=> {
    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms
    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '0px';
    stats.dom.style.top = '0px';
    document.getElementById("app")!.appendChild(stats.dom);
    return stats;
}

</script>
<style lang="less" scoped>

</style>