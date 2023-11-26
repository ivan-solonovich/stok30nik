<script setup>
import {computed, onMounted, ref} from "vue";
import store from "../../store/store.js";
import {data} from "autoprefixer";
import CatalogCategories from "./CatalogCategories.vue";


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
   <router-view/>
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