<template>
  <div class="Other">
    <Header class="Other-Header"/>
    <div class="around-other lg:ml-16 lg:mr-16  md:ml-10 md:mr-10  xs:mr-2 xs:ml-2">
      <div class="container lg:mt-[25px] xs:mt-[25px] xs:flex-col flex lg:flex-row justify-between">
        <div class="container-router-other xs:text-[14px] lg:text-[18px] text-[#949494]">
          <router-link to="/" class="text-[#949494]">TRANG CHỦ</router-link> /
          <router-link to="" class="font-medium text-black">PHỤ KIỆN KHÁC</router-link>
        </div>
        <div class="container-options flex">
          <span class="mr-[20px] xs:hidden lg:block">Hiển thị một kết quả duy nhất</span>
          <form class=" outline-none xs:mx-auto lg:mt-[0] xs:mt-[20px]" method="get">
            <select @change="OnchangeOption($event)" name="orderby" class="orderby outline-none xs:text-[14px] lg:w-[250px] lg:text-[16px] xs:w-[250px]">
              <option value="menu_order" class="outline-none" selected="selected">
                Thứ tự mặc định
              </option>
              <option value="từ thấp đến cao">Thứ tự theo giá: thấp đến cao</option>
              <option value="từ cao xuống thấp">
                Thứ tự theo giá: cao xuống thấp
              </option>
            </select>
            <input type="hidden" class="outline-none " name="paged" value="1" />
          </form>
        </div>
      </div>
      <div class="container flex xs:justify-center lg:justify-between xs:mt-[50px] xs:mb-[50px]  lg:mt-[50px] lg:mb-[50px]">
        <div class="other-left xs:hidden lg:block lg:w-[25%]">
            <h1 class="text-[18px] font-medium text-[#353535] text-left">SẢN PHẨM</h1>
           <ul class="other-list flex flex-col lg:mt-[20px] lg:px-[8px] lg:py-[12px] bg-[#FCFCFC] border-[1.5px] border-[#DDDDDD]">
                  <li v-for="(product,index) in product_suggest" :key="index"  class="flex pb-[10px] justify-around">
                      <img class="lg:w-[60px] lg:h-[60px] object-cover" :src="`${product.attributes.product_image.data.attributes.url}`" alt="">
                      <div class="content-price flex flex-col justify-between ml-[10px]">
                          <span class="text-[14px] text-[#666]">{{ product.attributes.product_name }}</span>
                          <span class="text-[16px] text-black font-medium">{{ product.attributes.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</span>
                      </div>
                  </li>
                
              </ul>
        </div>
        <div class="other-right">
            <div class="other-product-around lg:mt-[40px] lg:ml-[20px]">
                <div class="other-product-list grid lg:grid-cols-4 xs:grid-cols-1 xs:grid-rows-6 xs:gap-y-[20px] md:grid-cols-2 md:grid-rows-3 md:gap-x-[20px] md:gap-y-[20px] lg:gap-y-[20px] lg:gap-x-[20px] lg:grid-rows-2">
                    <div class="other-product-item pb-[10px]" v-for="product in product_other" :key="product">
                        <img   class="h-[200px] object-cover" :src="`${product.attributes.product_image.data.attributes.formats.thumbnail.url}`" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">{{product.attributes.product_name}}</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">{{product.attributes.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</span>
                        </div>
                        <button @click="AddProduct(product.attributes)" class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>                      
                </div>
            </div>
        </div>
      </div>
    </div>
    <Footer />
    <Loader class="load"/>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Loader from '../../components/Loader.vue'
import { mapMutations, mapState } from 'vuex';
import ProductApi from "@/Service/product_api";
import { URL_BACKEND } from "@/variable_enviroment";
export default {
  components: {
    Header,
    Footer,
    Loader
  },
  data(){
     return{
      product_other:[],
      product_suggest : []
     }
  },
  computed:{
     ...mapState(['ProductOther'])
  },
 async created(){
   const reponse = await ProductApi.GetAllProductApi(`${URL_BACKEND}/api/products?populate=*`);
   
   for(var i = 0; i < reponse.data.data.length; i++){
    if(reponse.data.data[i].attributes.product_zone == "ProductOther"){
      this.product_other.push(reponse.data.data[i]);
    }
     if (reponse.data.data[i].attributes.product_zone == "ProductSuggest") {
        this.product_suggest.push(reponse.data.data[i]);
      }
   };
   console.log(this.product_other);
  },

   methods:{
    ...mapMutations(['AddProduct']),
    
    OnchangeOption(event){
     let value = event.target.value;
     console.log(value);
     switch (value) {
      case `từ thấp đến cao`:
        this.product_other.sort(function(a,b){
          return a.attributes.product_price - b.attributes.product_price;
        })
        break;
      case `từ cao xuống thấp`:
        this.product_other.sort(function(a,b){
          return b.attributes.product_price - a.attributes.product_price;
        })
      default:
        break;
     }
    }
   },
  mounted(){
     var load = document.querySelector('.load');
     var OtherHeader = document.querySelector('.Other-Header');
     var AroundOther = document.querySelector('.around-other');
     AroundOther.style.marginTop = `${OtherHeader.clientHeight + 50}px`
     setTimeout(function(){
         load.style.display = 'none';
     },1000)
  }
};
</script>
   
<style scoped>
 @import './Other.css'
</style>
