<template>
    <div class="container" id="gl">
    </div>
</template>
<script setup lang="ts">
import * as THREE from "three"
import  { onMounted } from "vue"
import { AxesHelper } from 'three/src/helpers/AxesHelper.js'
onMounted(()=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(Math.PI / 4, window.innerWidth/window.innerHeight,0.1,1000)
    const renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setClearColor(0x000000)
    renderer.setSize(window.innerWidth,window.innerHeight)
    const viewport = document.getElementById('gl')
    viewport!.appendChild(renderer.domElement)

    camera.position.x = -30;
    camera.position.y = 40
    camera.position.z = 30

    camera.lookAt(scene.position)

    initAxes(scene) // 添加坐标轴
    rendering(renderer,scene,camera) // 开启渲染
    detectWindowSizeChange(renderer,camera)  // 监听window窗口尺寸发生变化
}) 


const initAxes = (scene:THREE.Scene)=>{
    const axesHelper = new AxesHelper(30)
    scene.add(axesHelper)
}


const rendering = (renderer:THREE.WebGLRenderer,scene:THREE.Scene,camera:THREE.PerspectiveCamera)=>{
    renderer.render(scene,camera)
    window.requestAnimationFrame(()=>{
        rendering(renderer,scene,camera)
    })
}
const detectWindowSizeChange = (renderer:THREE.WebGLRenderer,camera:THREE.PerspectiveCamera)=>{
    window.addEventListener("resize",()=>{
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth,window.innerHeight)
    })
}
</script>
<style scoped lang="less">
</style>