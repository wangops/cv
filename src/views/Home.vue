<template>
    <div class="container home-bg">
        <div class="header">
            <ThemeSwitch></ThemeSwitch>
        </div>
        <div class="container-body">
            <RouterView v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </RouterView>
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
        height: 50px;
        background-color: var(--primary-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid var(--border-line-color);
    }
    .container-body{
        flex: 1;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .container-body::-webkit-scrollbar{
        background-color: var(--webkit-scroll-bar-background);
    }
}
</style>   