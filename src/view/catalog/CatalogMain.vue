<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../../store/store.js";
import {data} from "autoprefixer";


let mainCategories = ref([])
let allProducts = ref([])
let products = ref([])
data:{
    products: []
}
onMounted(async () => {
    mainCategories.value = store.state.mainCategories;
    allProducts.value = await store.dispatch("getAllProducts");

})

 products = computed(()=>store.getters.products)


let getProducts = products.value
console.log(getProducts);
</script>

<template>
    <div class="w-full flex h-10 justify-center items-center p-3 m-4">
        <h1 class="font-bold text-4xl text-blue-500">Каталог</h1>
    </div>

    <div class="w-full flex justify-center">
        <h3>
           <span><input type="text" class="rounded border-2 border-gray-200 p-2 m-8" placeholder="Поиск по каталогу"></span>
        </h3>
        <hr/>
    </div>
    <div class="w-full flex justify-around gap-8 flex-wrap">
        <div class="w-[300px]">
           <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/collection-of-beige-tone-colored-pants_23-2150773424.jpg?updatedAt=1700927960198">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/close-up-on-flannel-shirt-detail.jpg?updatedAt=1700927812776">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/baby-elementson-pink.jpg?updatedAt=1700931265802">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/baby-boy-clothes-on-white-background.jpg?updatedAt=1700931248075">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/women-sports-wear-mockup-active-wear-apparel.jpg?updatedAt=1700932178425">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/plus-size-jacket-apparel-women-s-fashion_53876-97872.jpg?updatedAt=1700932163007">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/female-and-male-workers-wearing-work-clothes.jpg?updatedAt=1700932149268">
        </div>
        <div class="w-[300px]">
            <img class="w-full" src="https://ik.imagekit.io/b367zdch6/catalog-collections-pictures/stack-of-clothes-on-white-background-closeup.jpg?updatedAt=1700932555673">
        </div>
    </div>
  <h3 class="p-3 m-5">{{ mainCategories }}</h3>
<hr/>
 <ol class="w-full flex  gap-8">

     <li v-for="product in products">
         <div >
         <div class="w-[300px]">
             <img class="image-product " :src=" product.image ">
              {{ product.title }}

         </div>
         </div>
     </li>
 </ol>

</template>

<style scoped>
.image-product{
    width: 200px;
    height: auto;
}
</style>