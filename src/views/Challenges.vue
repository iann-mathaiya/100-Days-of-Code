<template>
    <NavBar />
    <main class="m-5 md:m-10">
        <HeadingOne>The Ultimate Creative Sprint: From Ideas to Reality</HeadingOne>
        <div class="grid grid-cols-2 mt-5 gap-4 md:gap-8 md:px-10 ">
            <div v-for="(challenge, index) in challenges" :key="index" class="relative overflow-hidden h-96 w-full rounded-xl">
                <!-- <div class="absolute h-full w-full backdrop-blur-md bg-white/30"></div> -->
                <img v-if="challenge.is_completed === false" :src="challenge.image" class="h-96 w-full rounded-xl blur object-cover grayscale transition ease-in-out delay-150 hover:blur-none hover:scale-125 duration-500" alt="" srcset="" />
                <img v-else-if="challenge.is_completed === true" :src="challenge.image" class="h-96 w-full rounded-xl grayscale-0 object-cover transition ease-in-out delay-150 hover:scale-125 duration-500" alt="" srcset="" />
                <div class="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                    <div class="w-fit h-fit md:h-16 p-2 md:p-3 flex items-center gap-1 justify-center bg-gray-600 rounded-md ">
                        <FileLock2 class="text-gray-100 h-5 w-5" aria-hidden="true" />
                        <h3 class="text-gray-100 text-base md:text-3xl">{{ challenge.id }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { FileLock2 } from 'lucide-vue-next'
import HeadingOne from '@/components/typography/HeadingOne.vue'

const challenges = [
    {
        id: 1,
        name: "Day One",
        image: "./src/assets/challenges/day-one.webp",
        is_completed: true,
        tag: "square",
    },

    {
        id: 2,
        name: "Day Two",
        image: "./src/assets/challenges/pexels-beyzaa-yurtkuran-14651941.jpg",
        is_completed: false,
        tag: "square"
    },

    {
        id: 3,
        name: "Day Three",
        image: "./src/assets/challenges/placeholder-image.webp",
        is_completed: false,
        tag: "square",
    },

    {
        id: 4,
        name: "Day Four",
        image: "./src/assets/challenges/placeholder-image.webp",
        is_completed: false,
        tag: "square"
    },

    {
        id: 5,
        name: "Day Five",
        image: "./src/assets/challenges/placeholder-image.webp",
        is_completed: false,
        tag: "square",
    },

    {
        id: 6,
        name: "Day Six",
        image: "./src/assets/challenges/placeholder-image.webp",
        is_completed: false,
        tag: "square"
    }
]


</script>