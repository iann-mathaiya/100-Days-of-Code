<template>
    <div class="px-6 pt-6 lg:px-8">
        <div>
          <nav class="flex h-9 items-center justify-between" aria-label="Global">
            <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" class="-m-1.5 p-1.5 flex gap-x-2 items-center">
                  <img class="h-8" src="../assets/logo.svg" alt="" />

                  <!-- Attribution for mission & hard to find icons -->
                  <!-- <a target="_blank" href="https://icons8.com/icon/25645/mission">Mission</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                  <a target="_blank" href="https://icons8.com/icon/7Amyt6NLpsUe/hard-to-find">Hard to Find</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
                <span class="font-semibold text-green-800">100  Days of Design + Code</span>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                <span class="sr-only">Open main menu</span>
                <Menu class="text-gray-700 " :size="24" aria-hidden="true" />
              </button>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-10">
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-x-10">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-semibold text-gray-600 hover:text-green-700">{{ item.name }}</a>
              <a href="/challenges" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-sm ring-1 ring-gray-900/30 hover:text-gray-900 hover:ring-gray-900/70">View Challenges</a>
            </div>
          </nav>
          <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div class="flex h-9 items-center justify-between">
                <div class="flex">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">100 Days of Design + Code</span>
                    <img class="h-8" src="../assets/logo.svg" alt="" />
                  </a>
                </div>
                <div class="flex">
                  <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                    <span class="sr-only">Close menu</span>
                    <X class="text-gray-700" :size="24" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{ item.name }}</a>
                  </div>
                  <div class="py-6">
                    <a href="/challenges" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">View Challenges</a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Menu, X } from 'lucide-vue-next'

const navigation = [
  { name: 'Blog', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>