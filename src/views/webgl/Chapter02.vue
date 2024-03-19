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
    const planeGeometry = new THREE.PlaneGeometry(60,40,1,1);
    const planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
    const plane = new THREE.Mesh(planeGeometry,planeMaterial)
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane)

    //
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))
    scene.add(addCube(planeGeometry))

    // 
    const spotLight =  new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40,60,-30)
    spotLight.castShadow = true
    spotLight.target = plane
    spotLight.intensity = 10000
    spotLight.shadow.mapSize.width = 4098;
    spotLight.shadow.mapSize.height = 4098;
    spotLight.shadow.radius = 5;
    scene.add(spotLight)

    // 
    const ambientLight = new THREE.AmbientLight(0xff0000)
    scene.add(ambientLight)

    //scene.fog = new THREE.Fog(0xffffff,0.015,100)
    scene.fog = new THREE.FogExp2(0xffffff,0.01)
    // 
    camera.position.x = -30;
    camera.position.y = 40
    camera.position.z = 30
    camera.lookAt(scene.position)

    const element = document.getElementById('gl')
    element?.append(renderer.domElement)


    const stats = new Stats()
    stats.showPanel(0)
    stats.dom.style.position = 'absolute'
    stats.dom.style.left = '0px'
    stats.dom.style.top = '0px'
    const app = document.getElementById('app')
    app?.append(stats.dom)
    const controls = {
        rotationSpeed:0.02,
        bouncingSpeed:0.03
    }
    const update =  ()=>{
        stats.update()
        scene.traverse((cube)=>{
            if(cube instanceof THREE.Mesh && cube != plane){
                cube.rotation.x += controls.rotationSpeed
                cube.rotation.y += controls.rotationSpeed
                cube.rotation.z += controls.rotationSpeed
            }
        })
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

const addCube = (planeGep:PlaneGeometry)=>{
    const cubeSize = Math.ceil(Math.random() * 3)
    const cubeGeometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize)
    const cubeMaterial = new THREE.MeshLambertMaterial({color:Math.random() * 0xffffff})
    const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
    cube.castShadow = true
    cube.position.x = -30 + Math.round(Math.random() * planeGep.parameters.width)
    cube.position.y = Math.round(Math.random() * 5)
    cube.position.z = -20 + Math.round(Math.random() * planeGep.parameters.height)
    return cube
}
</script>
<style scoped lang="less">

</style>