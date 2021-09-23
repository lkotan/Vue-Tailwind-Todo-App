import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        name:"Todos",
        component:()=>import("@/components/Todos")
    },
    {
        path:"/todo",
        name:"Form",
        component:()=>import("@/components/Form")
    }
]

const router=new VueRouter({
    routes,
    mode:"history"
})

export default router