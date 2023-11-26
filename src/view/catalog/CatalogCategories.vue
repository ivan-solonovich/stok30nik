<script setup>

import BackToCatalogCategories from "./BackToCatalogCategories.vue";

const mainCategories = [
    {name:' women-clothes', href: 'women-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/collection-of-beige-tone-colored-pants_23-2150773424.jpg?updatedAt=1700927960198'},
    {name:' men-clothes', href: 'men-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/close-up-on-flannel-shirt-detail.jpg?updatedAt=1700927812776'},
    {name:' girls-clothes', href: 'girls-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/baby-elementson-pink.jpg?updatedAt=1700931265802'},
    {name:' boys-clothes', href: 'boys-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/baby-boy-clothes-on-white-background.jpg?updatedAt=1700931248075'},
    {name:' sport-clothes', href: 'sport-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/women-sports-wear-mockup-active-wear-apparel.jpg?updatedAt=1700932178425'},
    {name:' xxxl-clothes', href: 'xxxl-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/plus-size-jacket-apparel-women-s-fashion_53876-97872.jpg?updatedAt=1700932163007'},
    {name:' works-clothes', href: 'works-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/female-and-male-workers-wearing-work-clothes.jpg?updatedAt=1700932149268'},
    {name:' brand-clothes', href: 'brand-clothes', src: 'https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/assortment-of-beige-tone-colored-pants.jpg?updatedAt=1701008145116'},

]
</script>

<template>

    <div class="w-full flex justify-around gap-8 flex-wrap ml-6 mr-6">
      <div v-for="item in mainCategories">
        <div class="w-[300px]">
            <router-link :to="item.href" :key="item.name" as="a"><img class="w-full"   :src="item.src"></router-link>
        </div>
      </div>




<!--            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/female-and-male-workers-wearing-work-clothes.jpg?updatedAt=1700932149268">-->
<!--        </div>-->
<!--        <div class="w-[300px]">-->
<!--            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/stack-of-clothes-on-white-background-closeup.jpg?updatedAt=1700932555673">-->
<!--        </div>-->
    </div>
</template>

<style scoped>

</style>