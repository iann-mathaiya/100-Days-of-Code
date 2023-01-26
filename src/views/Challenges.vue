<template>
    <NavBar />
    <main class="m-5 md:m-10">
        <h1 class="font-bold text-gray-900 text-xl lg:text-4xl md:text-3xl sm:text-3xl">100 Challenges for 100 Days</h1>
        <div class="grid grid-cols-2 mt-5 gap-4 md:gap-8 ">
            <div v-for="(challenge, index) in challenges" :key="index" class="relative rounded-xl">
                <img :src="challenge.imageBefore" class="rounded-xl" alt="" srcset="" />
                <img v-if="challenge.is_completed === true" class="rounded-xl" src="" alt="" srcset="" />
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
import NavBar from '@/components/NavBar.vue';
import { FileLock2 } from 'lucide-vue-next'

const challenges = [
    {
        id: 1,
        name: "Day One",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square",
    },

    {
        id: 2,
        name: "Day Two",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square"
    },

    {
        id: 3,
        name: "Day Three",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square",
    },

    {
        id: 4,
        name: "Day Four",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square"
    },

    {
        id: 5,
        name: "Day Five",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square",
    },

    {
        id: 6,
        name: "Day Six",
        imageBefore: "./src/assets/challenges/placeholder-image.webp",
        imageAfter: "",
        is_completed: false,
        tag: "square"
    }
]


</script>