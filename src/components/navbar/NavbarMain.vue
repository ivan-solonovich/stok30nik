<template>
  <Disclosure as="nav" class="bg-sky-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="../../assets/images/icons/logo.jpg" alt="Сток30ник" />
          </div>
          <h1 class="pl-2 font-bold">Сток30ник</h1>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name"  :to="item.href" :class="[item.current ? 'bg-gray-900 text-gray-700' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel  class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">

        <DisclosureButton @click="!open" v-for="item in navigation" :key="item.name"  :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
        <router-link  :to="item.href"  >{{ item.name }}</router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon,  XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Каталог', href: 'catalog', current: false },
    { name: 'Распродажа', href: 'sales', current: false },
    { name: 'Спорт', href: 'sport', current: false },
    { name: 'Бренд', href: 'brand', current: false },
    { name: 'Рабочая одежда', href: 'work-clothes', current: false },
    { name: 'XXXL', href: 'xxxl', current: false },
]

</script>