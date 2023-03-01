<template>
  <div class="container-fuild">
    <Header />
    <div class="container mt-[200px]">
        <div class="row justify-content-between">
            <div class="col-6 row">
                <div class="col-6 text-left">
                  <router-link class="women-link" to="/">TRANG CHỦ /  </router-link>
                 <span class="women-title">NỮ</span>
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
            <div class="col-12">
              <h1 class="product-title text-left mt-[40px]">SẢN PHẨM</h1>
            </div>
        </div>
    </div>
    <div class="container mt-[50px] mb-[50px]">
        <div class="row">
          <div v-for="sneaker in SneakerProductPanigation" :key="sneaker" class="col-3">
            <div class="row image-product-around">
                <img class="image-product" :src="`${sneaker.attributes.product_image.data.attributes.url}`" alt="">
                <div class="col-10 around-add-cart">
                  <div class="row justify-content-center align-items-center m-0 col-12">
                    <div class="col-8 p-1">
                       <div @click="HandleCart" class="add-cart">Thêm vào giỏ</div>
                    </div>
                    <div class="col-4 p-1">
                       <i class="fa-solid icon-shop fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </div>
              <h2 class="product-head">{{ sneaker.attributes.product_name }}</h2>
              <span class="product-price">{{ sneaker.attributes.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</span>
          </div>
        </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 mb-[50px]">
          <section>
           <el-pagination  style="width: 100%; justify-content: center;" @current-change="handleCurrentChange" v-model:page-size="pageSize" background layout="prev, pager, next" :total="this.SneakerProduct.length"/>
        </section>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue';
import { ref } from 'vue';
import { URL_BACKEND } from '../../variable_enviroment';
export default {
  
  components :{
    Header,
    Footer
  },
  data(){
    return {
       OptionValue: ['Thứ tự mặc định', 'thấp đến cao', 'cao đến thấp'],
       SneakerProductPanigation : [],
       SneakerProduct : [],

      pageSize : 4
    }
  },
 async created(){
     const { data } = await this.CallApiSneakerWomen();
     let datas = data.data;
     console.log(datas);
     let sneakers = datas.filter((value)=>{
      return value.attributes.product_zone == "Women";
     });
     console.log(sneakers);
     this.SneakerProduct = sneakers;
     for(var i = 0 ; i < 4; i++){
      this.SneakerProductPanigation[i] = sneakers[i];
     }
     
  },
  methods: {
    CallApiSneakerWomen(){
      return axios.get(`${URL_BACKEND}/api/products?populate=*`);
    },
    HandleCart(){
      console.log("Cart is active");
    },
    handleCurrentChange(value) {
       let currentPage = (value - 1) * this.pageSize;
       let nextPage = value * this.pageSize;
       let array_empty = []
     for(var i = currentPage; i < nextPage;i++){
       array_empty.push(this.SneakerProduct[i])
     }
     for(var j = 0; j < 4; j++){
      this.SneakerProductPanigation[j] = array_empty[j];
     }
       
       
    },
   
  },
}
</script>

<style scoped>
.container{
  max-width: 1400px;
}
.women-link{
  font-size: 18px;
  font-weight: 500;
  color: #949494;
}
.women-title{
  font-size: 18px;
  font-weight: 500;
}
.product-title{
  font-size: 18px;
  font-weight: 500;
}
.image-product{
  width: 100%;
  height: 300px;
  object-fit: cover;
  
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.image-product-around{
  position: relative;
     transition: all linear 0.5s;
      cursor: pointer;
}
.around-add-cart{
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.add-cart{
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
   padding: 10px 20px;
   background: black;
   color: white;
   display: none;
   cursor: pointer;
   transition: all linear 0.5s;
}
.image-product-around:hover .add-cart, .image-product-around:hover .icon-shop{
  display: block;

}
.add-cart:hover{
    background: white;
  color: black;
}
.icon-shop:hover{
    background: white;
  color: black;
}
.icon-shop{
  display: none;
  padding: 12px 20px;
  background: black;
  color: white;
  font-size: 20px;
  transition: all linear 0.5s;
}
.product-price{
  font-size: 16px;
  font-weight: 450;
  margin-top: 10px;
  display: block;
  text-align: left;
}
.product-head{
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  text-align: left;
}

</style>