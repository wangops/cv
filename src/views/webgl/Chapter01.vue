<template>
    <div class="container gl-background"  id="gl">

    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from "three"
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { AxesHelper } from 'three/src/helpers/AxesHelper.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
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
    const hemiLight =  new THREE.HemisphereLight(0x0000ff,0x00ff00,0.6)
    hemiLight.position.set(0,500,0)
    hemiLight.groundColor =  new THREE.Color(0x000000)
    hemiLight.color = new THREE.Color(0xffffff)
    scene.add(hemiLight)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)


    const element = document.getElementById('gl')
    element?.append(renderer.domElement)

    //
    // 


    const stats = new Stats()
    stats.showPanel(0)
    stats.dom.style.position = 'absolute'
    stats.dom.style.left = '0px'
    stats.dom.style.top = '0px'

    const app = document.getElementById('app')
    app?.append(stats.dom)
    let step = 0;
    const controls = {
        rotationSpeed:0.02,
        bouncingSpeed:0.03
    }
    const update =  ()=>{
        stats.update()

        //
        cube.rotation.x += controls.rotationSpeed
        cube.rotation.y += controls.rotationSpeed
        cube.rotation.z += controls.rotationSpeed
        //
        //
        step += controls.bouncingSpeed
        sphere.position.x = 20 + (10 * (Math.cos(step)))
        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)))
        //
        renderer.render(scene,camera)
        requestAnimationFrame(update)
    }

    update()


    
    const gui = new GUI()
    gui.add(controls,'rotationSpeed',0,0.5)
    gui.add(controls,'bouncingSpeed',0,0.5)

    window.addEventListener('resize',()=>{
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth,window.innerHeight)
    })
})
</script>
<style scoped lang="less">

</style>