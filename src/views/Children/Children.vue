<template>
  <div class="Other">
    <Header class="Children-Header" />
    <div class="around-other lg:ml-16 lg:mr-16  md:ml-10 md:mr-10  xs:mr-2 xs:ml-2">
      <div class="container mt-[200px]">
          <div class="row justify-content-between">
              <div class="col-6 row">
                  <div class="col-6 text-left">
                    <router-link class="children-link" to="/">TRANG CHỦ /  </router-link>
                   <span class="children-title">NỮ</span>
                  </div>
              </div>
              <div class="col-6 row justify-end items-center">
               
                  <span class="col-5 text-right xs:hidden lg:block">Hiển thị một kết quả duy nhất</span>
                <form class="col-5 woocommerce-ordering outline-none  lg:mt-[0] xs:mt-[20px]" method="get">
                  <select @change="ChangeOption($event)" name="orderby" class="orderby outline-none xs:text-[14px] lg:w-[250px] lg:text-[16px]  xs:w-[250px] px-[10px] py-[5px]">
                   <option v-for="item in OptionValue" :key="item" :selected="item == 'Thứ tự mặc định'" :value=item>{{ item }}</option>
                  </select>
                  <input type="hidden" class="outline-none " name="paged" value="1" />
                </form>
               
              </div>
          </div>
      </div>
      
        <div class="container mt-5">
            <h1 class="text-[18px] font-medium text-[#353535] text-left">SẢN PHẨM</h1>
        </div>
        
        <div class="container">
            <div class="row justify-content-between">
              <div class="col-3">
                <ul  class="other-list flex flex-col lg:mt-[20px] lg:px-[8px] lg:py-[12px] bg-[#FCFCFC] border-[1.5px] border-[#DDDDDD]">
                    <li v-for="(product, index) in product_suggest" :key="index" class="flex pb-[10px] justify-around">
                        <img class="lg:w-[60px] lg:h-[60px] object-cover" :src="`${product.attributes.product_image.data.attributes.url}`" alt="">
                        <div class="content-price flex flex-col justify-between ml-[10px]">
                            <span class="text-[14px] text-[#666]">{{ product.attributes.product_name }}</span>
                            <span class="text-[16px] text-black font-medium">{{ product.attributes.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</span>
                        </div>
                    </li>
                </ul>
              </div>
                <div class="col-9">
                    <div class="row justify-content-end">
                        <div v-for="product in product_kid" :key="product" class="col-3 other-product-item m-3 py-4">
                          <img class="h-[200px] object-cover" :src="`${product.attributes.product_image.data.attributes.url}`" alt="">
                          <div class="around-content-item flex flex-col">
                               <span class="name-product text-[14px] text-[#666]">{{ product.attributes.product_name }}</span>
                               <span class="mt-[10px] text-[15px] font-medium text-black">{{ product.attributes.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</span>
                          </div>
                          <button @click="AddProduct(product.attributes)" class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                      </div>    
                    </div>     
                </div>
            </div>
        </div>
      
    </div>
    <Footer/>
   <Loader class="load"/>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Loader from '../../components/Loader.vue';
import { URL_BACKEND } from "@/variable_enviroment";
import axios from 'axios';
import { mapMutations } from 'vuex';
export default{
  data(){
    return{
      OptionValue : ['Thứ tự mặc định', 'thấp đến cao', 'cao đến thấp'],
      product_kid : [],
      product_suggest: []
    }
  },
  components: {
    Header,
    Footer,
    Loader
  },
 async created(){
   await axios.get(`${URL_BACKEND}/api/products?populate=*`).then((res)=>{
    const ArrayProductKid = res.data.data;
      ArrayProductKid.forEach(element => {
        if(element.attributes.product_zone == "ProductKid"){
          this.product_kid.push(element);
        }
          if (element.attributes.product_zone == "ProductSuggest") {
          this.product_suggest.push(element);
        }
      });
    });  
    console.log(this.product_suggest);
  },
  computed:{
  },
  methods:{
    ...mapMutations(['AddProduct']),
   
   ChangeOption(event){
    const valueOption = event.target.value;
    
     switch (valueOption) {
      case 'thấp đến cao':
        this.product_kid.sort(function(a,b){
          return a.attributes.product_price - b.attributes.product_price;
        })
        break;
      case 'cao đến thấp':
        this.product_kid.sort(function(a,b){
          return b.attributes.product_price - a.attributes.product_price;
        })
      default:
        break;
     }
   }
  },
  mounted(){
     var load = document.querySelector('.load');
     var ChildrenHeader = document.querySelector('.Children-Header');
     var AroundOther = document.querySelector('.around-other');
     AroundOther.style.marginTop = `${ChildrenHeader.clientHeight + 50}px`
     setTimeout(function(){
         load.style.display = 'none';
     },1000);
  }
};
</script>

<style scoped>
  .content-price{
    width: 150px;
    align-items : flex-start;
  }
  .orderby{
    border: 1px solid black;
  }
option{
    outline: none;
}
.other-list li{
     border-bottom : 1px dashed #DDDDDD;
     margin-top: 10px;
}
.other-product-item{
    border: 1px solid #DDDDDD;
}
.name-product{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 15px;
  padding-left: 15px;
}
.children-link{
  font-size: 18px;
  font-weight: 500;
  color: #949494;
}
.children-title{
  font-size: 18px;
  font-weight: 500;
}
</style>
