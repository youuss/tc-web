<template>
<!--  border-black border-2 -->
  <header class="relative w-full bg-white">
    <div class="h-18 border-b-2 border-solid border-gray-100 rounded-none mb-0 py-1 px-5 ">
      <div class="absolute float-left w-36">
        <img class="h-16" src="@/assets/logo.png"/>
      </div>
      <div class="">
        <ul class="w-full flex flex-row justify-center items-center h-16">
          <li class=" mx-6 inline-block flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" v-for="m in menu"
              @mouseenter="openMenu"
              @mouseleave="closeMenu"
          >
            {{ m.title }}
            <span class="ml-1 w-2" v-if="m.children">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
              </svg>
            </span>
          </li>

        </ul>
      </div>

    </div>
    <div class="hidden border-black border-2">1</div>
<!--    <nav class="-z-10  inset-x-0 inset-y-0 h-full overflow-visible bg-white duration-300 w-full px-0 py-3.5">-->
<!--      <ul class="list-unstyled absolute w-full h-full text-center pt-0 flex-row ">-->
<!--        <li class="inline-block float-none px-2 m-0 py-1" v-for="m in menu" :key="m.name">-->
<!--          <a class="relative block outline-none no-underline text-gray-500 ">-->
<!--            {{m.title}}-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
  </header>

</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      menu:[
        {title:'首页',name:'Home',route:'',},
        {title:'关于思碳',name:'About',route:'',children:[
            {title:'公司介绍',name:'About',route:''},
            {title:'新闻与活动',name:'News',route:''},
            {title:'投资我们',name:'About',route:''},
            {title:'招贤纳士',name:'About',route:''},
          ]},
        {title:'我们的产品',name:'Product',route:'',children:[
            {title:'公司介绍',name:'About',route:''},
          ]},
        {title:'我们的技术',name:'Tech',route:'',children:[
            {title:'公司介绍',name:'About',route:''},
          ]},
        {title:'服务中心',name:'Service',route:'',children:[
            {title:'公司介绍',name:'About',route:''},
          ]},
        {title:'联系我们',name:'Contact',route:''},
      ]
    }
  },
  methods:{
    openMenu(){
     console.log(1)
    },
    closeMenu(){
      console.log(2)
    }
  }
};
</script>

<style scoped>

</style>
