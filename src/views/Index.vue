<template>
    <div class="container">
        <svg width="400" height="400"> 
            <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
        </svg>
    </div>
</template>
<script setup lang="ts">
const changeTheme = () => {
    const htmlElement = document.querySelector('html')
    if(htmlElement){
        if(htmlElement.getAttribute('theme') == 'dark'){
            htmlElement.setAttribute('theme', 'light')
        }else{
            htmlElement.setAttribute('theme', 'dark')
        }
    }
}
</script>
<style scoped>

</style>