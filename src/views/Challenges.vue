<template>
    <NavBar />
    <main class="m-5 md:m-10">
        <h1 class="font-bold text-gray-900 text-xl lg:text-4xl md:text-3xl sm:text-3xl">100 Challenges for 100 Days</h1>
        <div class="grid grid-cols-2 mt-5">
            <div>
                <div class="relative rounded-md">
                    <img src="" alt="" srcset="">
                    <div class="w-fit h-16 p-3 flex items-center gap-1 justify-center bg-gray-600 rounded-md ">
                        <FileLock2 class="text-gray-100" :size="32" aria-hidden="true" />
                        <h3 class="text-gray-100 text-3xl">{{ challenges }}</h3>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { FileLock2 } from 'lucide-vue-next'

const challenges = {
    day1: {
        id: 1,
        name: "Day One",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square",
    },

    day2: {
        id: 2,
        name: "Day Two",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square"
    },

    day3: {
        id: 3,
        name: "Day Three",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square",
    },

    day4: {
        id: 4,
        name: "Day Four",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square"
    },

    day5: {
        id: 5,
        name: "Day Five",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square",
    },

    day6: {
        id: 1,
        name: "Day Six",
        imageBefore: "",
        imageAfter: "",
        completed: false,
        tag: "square"
    }
}


</script>