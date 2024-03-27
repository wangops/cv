<template>
    <div class="container home-bg">
        <div class="header">
            <div class="header-funcs">
                <div class="func">
                    <span>个人信息</span>
                </div>
                <div class="func">
                    <span>技能特长</span>
                </div>
                <div class="func">
                    <span>工作经历</span>
                </div>
                <div class="func">
                    <span>项目经验</span>
                </div>
                <div class="func">
                    <span>个人博客</span>
                </div> 
            </div>
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
import { reactive } from "vue"
const data = reactive({

}) 

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
        border-bottom: 0.5px solid var(--border-line-color);
        .header-funcs{
            margin-left: auto;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            .func{
                width: 80px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                cursor: pointer;
                span:first-child{
                    height: 48px;
                    width: 100%;
                    text-align: center;
                    line-height: 48px;
                    color: var(--font-normal-color);
                    font-size: 14px;
                }
                div{
                    height: 2px;
                    width: 80%;
                    border-radius: 1px;
                    background-color: var(--font-normal-color);
                }
            }
        }
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