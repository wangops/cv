<template>
    <RouterView v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </RouterView>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style scoped></style>
