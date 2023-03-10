<template>
    <div>
      <Header/>
        <router-view/>
        <div>页脚</div>
    </div>

</template>
<!-- 每页固定部分(菜单，浮窗，页脚) -->
<script>
    import Header from "../components/Header.vue";
    export default {
        name: "Main",
      components: { Header },
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
