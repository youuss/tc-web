<template>
    <div>
        <div class="h-8 border-black border-2 flex justify-center items-center md:h-16 ">
            <div v-for="m in menu" :key="m.name" class="md:w-30 md:border-grey md:border-2 md:flex md:justify-center hidden">{{m.name}}</div>
            <div class="md:hidden flex justify-center">
                <div>浙江思碳亿芯环保技术有限公司</div>
                <button class="absolute top-1.5 right-2" @click="openMenu()">
                    <img src="@/assets/view.png" class="w-4">
                </button>
            </div>
        </div>
        <div class="absolute top-8.5 right-2 w-2/5 border-grey border-1" :hidden="menuSwitch">
            <div v-for="m in menu" :key="m.name" class="pl-2 pb-1 pt-1">
                {{m.name}}
            </div>
        </div>
        <router-view/>
        <div>页脚</div>
    </div>

</template>
<!-- 每页固定部分(菜单，浮窗，页脚) -->
<script>
    export default {
        name: "Main",
        data(){
            return {
                menu:[
                    {name:'首页'},
                    {name:'关于思碳'},
                    {name:'我们的技术'},
                    {name:'我们的产品'},
                    {name:'服务中心'},
                    {name:'联系我们'}
                ],
                menuSwitch:true
            }
        },
        methods:{
            openMenu(){
                this.menuSwitch = this.menuSwitch=== true? false:true
            },
        }
    }
</script>

<style scoped>

</style>
