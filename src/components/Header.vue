<template>
    <!--  border-black border-2 -->
    <header class="relative w-full bg-white">
        <!--    <div class="h-18 border-b-2 border-solid border-gray-100 rounded-none mb-0 py-1 px-5 ">-->
        <!--      <div class="absolute float-left w-36">-->
        <!--        <img class="h-16" src="@/assets/logo.png"/>-->
        <!--      </div>-->
        <!--      <div class="">-->
        <!--        <ul class="w-full flex flex-row justify-center items-center h-16">-->
        <!--          <li class=" mx-6 inline-block flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" v-for="m in menu"-->
        <!--              @mouseenter="openMenu"-->
        <!--              @mouseleave="closeMenu"-->
        <!--          >-->
        <!--            {{ m.title }}-->
        <!--            <span class="ml-1 w-2" v-if="m.children">-->
        <!--              <svg-->
        <!--                  xmlns="http://www.w3.org/2000/svg"-->
        <!--                  viewBox="0 0 20 20"-->
        <!--                  fill="currentColor"-->
        <!--                  class="h-5 w-5">-->
        <!--                <path-->
        <!--                    fill-rule="evenodd"-->
        <!--                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"-->
        <!--                    clip-rule="evenodd" />-->
        <!--              </svg>-->
        <!--            </span>-->
        <!--          </li>-->

        <!--        </ul>-->
        <!--      </div>-->

        <!--    </div>-->
        <div class=" border-b-2 border-solid bg-gray-100 h-10 flex flex-row justify-center items-center">

            <div class="absolute left-2" @click="openMobileMenu">
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

            </div>
            ??????????????????????????????????????????
            <div class="absolute left-1 top-10 z-1 bg-gray-100 w-1/2 shadow-xl" v-if="mobileMenu">
                <div class="p-2">
                    <img class="" src="@/assets/logo.png"/>
                    <div class="px-2 my-3 " v-for="m in menu" :key="m.name">
                        <div class="font-bold text-lg border-b-2">{{ m.title }}</div>

                        <div v-if="m.children">
                            <div class="my-2" v-for="mc in m.children"> &nbsp;&nbsp;&nbsp;{{ mc.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                mobileMenu: false,
                menu: [
                    {title: '??????', name: 'Home', route: '',},
                    {
                        title: '????????????', name: 'About', route: '', children: [
                            {title: '????????????', name: 'About', route: ''},
                            {title: '???????????????', name: 'News', route: ''},
                            {title: '????????????', name: 'Vite', route: ''},
                            {title: '????????????', name: 'Join', route: ''},
                        ]
                    },
                    {
                        title: '???????????????', name: 'Product', route: '', children: [
                            {title: '??????????????????', name: 'Product', route: ''},
                            {title: '??????????????????', name: 'Heating', route: ''},
                        ]
                    },
                    {
                        title: '???????????????', name: 'Tech', route: '', children: [
                            { title: '?????????????????????', name: 'before', route: '/' },
                            { title: '??????????????????', name: 'after', route: '/' },
                            { title: '??????????????????', name: 'after', route: '/' }
                        ]
                    },
                    {
                        title: '????????????', name: 'Service', route: '', children: [
                            { title: '????????????', name: 'before', route: '/' },
                            { title: '????????????', name: 'after', route: '/' },
                            { title: '????????????', name: 'doc', route: 'doc' }
                        ]
                    },
                    {title: '????????????', name: 'Contact', route: ''},
                ]
            }
        },
        methods: {
            openMenu() {
                console.log(1)
            },
            closeMenu() {
                console.log(2)
            },
            openMobileMenu() {
                if (this.mobileMenu === false) {
                    this.mobileMenu = true
                } else {
                    this.mobileMenu = false
                }
            },
        }
    };
</script>

<style scoped>

</style>
