<template>
    <div class="container gl-background"  id="gl">

    </div>
</template>
<script setup lang="ts">
import { onMounted, render } from 'vue';
import * as THREE from "three"
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { AxesHelper } from 'three/src/helpers/AxesHelper.js';

onMounted(()=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000)
    const renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setClearColor(new THREE.Color(0,0,0))
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.shadowMap.enabled = true
    const axis = new AxesHelper(20)
    scene.add(axis)
    
    // 
    const planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
    const planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
    const plane = new THREE.Mesh(planeGeometry,planeMaterial)
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true
    scene.add(plane)

    //  
    const cubeGeometry = new THREE.BoxGeometry(4,4,4);
    const cubeMaterial = new THREE.MeshLambertMaterial({color:0xff0000})
    const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
    cube.position.x = -4
    cube.position.y = 3;
    cube.position.z = 0;
    plane.castShadow = true
    scene.add(cube)     

    // 
    const sphereGeometry = new THREE.SphereGeometry(4,20,20);
    const sphereMaterial = new THREE.MeshLambertMaterial({color:0x7777ff})
    const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
    sphere.position.x = 20
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true
    scene.add(sphere)  
    // 
    camera.position.x = -30;
    camera.position.y = 40
    camera.position.z = 30

    camera.lookAt(scene.position)


    // 
    const spotLight =  new THREE.SpotLight(0x000000);
    spotLight.position.set(-40,60,-10)
    spotLight.castShadow = true
    scene.add(spotLight)


    const element = document.getElementById('gl')
    element?.append(renderer.domElement)


    // const stats = new Stats()
    // stats.showPanel(0)
    // stats.dom.style.position = 'absolute'
    // stats.dom.style.left = '0px'
    // stats.dom.style.top = '0px'

    // const app = document.getElementById('app')
    // app?.append(stats.dom)
    const update =  ()=>{
        // stats.update()
        renderer.render(scene,camera)
        requestAnimationFrame(update)
    }

    update()


    

})
</script>
<style scoped lang="less">

</style>