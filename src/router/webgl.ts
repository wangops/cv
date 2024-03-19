
import Chapter01 from "@/views/webgl/Chapter01.vue"
import Chapter02 from "@/views/webgl/Chapter02.vue"
export default [{
        path: '/webgl/chapter01',
        name: 'chapter01',
        component: Chapter01
    },{
        path: '/webgl/chapter02',
        name: 'chapter02',
        component: Chapter02
    },{
        path: '/webgl/chapter03',
        name: 'chapter03',
        component: ()=>import("@/views/webgl/Chapter03.vue")
    }
]