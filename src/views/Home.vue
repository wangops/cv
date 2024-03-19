<template>
    <div class="container home-bg">
        <div class="header">
            <ThemeSwitch></ThemeSwitch>
        </div>
    </div>
</template>
<script setup lang="ts">
import ThemeSwitch from '@/components/public/ThemeSwitch.vue'
</script>
<style scoped lang="less">
.home-bg{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    .header{
        width: 100%;
        height: 60px;
        background-color: var(--primary-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
}
</style>