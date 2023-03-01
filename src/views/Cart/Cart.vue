<template>
  <div class="around-cart">
    <Header class="Header-Cart" />
    <div
      v-if="CountProduct == 0"
      class="around-cart-no-product flex flex-col pl-[75px] pr-[75px] mt-[300px] mb-[200px] justify-center items-center"
    >
      <h1 class="not-product text-[16px] text-[#3B3535]">
        Chưa có sản phẩm nào trong một giỏ hàng
      </h1>
      <router-link
        class="back-store mt-[30px] w-[250px] h-[40px] bg-[#C30005] text-[16px] font-semibold text-white leading-[40px]"
        to="/"
        >QUAY TRỜ LẠI CỬA HÀNG</router-link
      >
    </div>
    <div
      v-if="CountProduct != 0"
      class="around-cart-have-product mb-[50px] mt-[200px] lg:ml-16 lg:mr-16 md:ml-10 md:mr-10 xs:mr-2 xs:ml-2"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-8">
            <div class="around-repons-product-payment w-full">
              <ul
                class="payment-list w-full row font-semibold text-[16px] pb-[10px]"
              >
                <li class="col-5 text-left lg:block">SẢN PHẨM</li>
                <li class="col-3 text-left xs:hidden lg:block">GIÁ</li>
                <li class="col-2 xs:text-right lg:text-left lg:block">
                  SỐ LƯỢNG
                </li>
                <li class="col-2 text-left xs:hidden lg:block">Chọn Size</li>
              </ul>
              <div
                v-for="(product, index) in ArrayTotalProduct"
                :key="(product, index)"
                class="payment-list-item row xs:justify-between items-center pt-[20px] pb-[20px]"
              >
                <div
                  class="col-5 row align-items-center payment-item text-left"
                >
                  <div class="col-5">
                    <i
                      v-on:click="RemoveProduct({ index, product })"
                      class="fa-solid fa-circle-xmark text-[18px] text-[#888787]"
                    ></i>
                    <div class="around-info flex items-center">
                      <img
                        style="object-fit: cover"
                        class="w-[100%] h-[50%]"
                        :src="`${product.product_image.data.attributes.url}`"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    class="col-7 around-content-payment-bi col-3 payment-item flex flex-col items-center"
                  >
                    <p class="ml-[10px] text-[16px] text-[#797575]">
                      {{ product.product_name }}
                    </p>
                  </div>
                </div>

                <div
                  class="payment-item col-3 p-0 text-left lg:block font-medium xs:hidden"
                >
                  {{
                    product.product_price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  }}
                </div>
                <div
                  class="payment-item col-2 p-0 text-center lg:block font-medium xs:hidden"
                >
                  1
                </div>
                <div class="payment-item col-2 p-0 text-left">
                  <el-select v-model="value" clearable placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div
                  class="payment-item text-right lg:block xs:hidden font-medium"
                ></div>
              </div>
            </div>
            <div
              class="around-button-update mt-[30px] text-[#C30005] mb-[50px] flex-row flex justify-start"
            >
              <span
                @click="HandleRiderect"
                class="btn-continue text-[14px] cursor-pointer font-medium mr-[20px] px-[10px] py-[8px]"
                >TIẾP TỤC XEM SẢN PHẨM</span
              >
              <span
                @click="HandleUpdateCart"
                class="btn-update text-[14px] cursor-pointer font-medium px-[10px] py-[8px]"
                >CẬP NHẬT GIỎ HÀNG</span
              >
            </div>
          </div>
          <div class="col-3 around-payment-sum xs:pr-[20px] pl-[20px]">
            <h1 class="sum-number text-[16px] text-left font-medium">
              TỔNG SỐ LƯỢNG : {{ ArrayTotalProduct.length }}
            </h1>
            <div
              class="around-sum-phu flex mt-[10px] text-[14px] justify-between pb-[10px]"
            >
              <span>Tổng phụ</span>
              <span class="font-medium">{{
                TotalProduct.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}</span>
            </div>
            <div
              class="around-ship flex mt-[10px] text-[14px] pb-[10px] justify-between items-center text-[#6B6866]"
            >
              <span>Giao hàng</span>
              <ul>
                <li>Giao hàng miễn phí</li>
                <li>Ước tính cho Việt Nam</li>
                <li>Đổi địa chỉ</li>
              </ul>
            </div>

            <button
              v-on:click="HandlePayment"
              class="mt-[20px] text-[16px] font-medium text-white bg-[#D26E4B] w-full h-[40px]"
            >
              TIẾN HÀNH THANH TOÁN
            </button>
            <div
              class="around-card-discount mt-[20px] flex-row justify-start flex items-center pb-[10px]"
            >
              <i class="fa-brands fa-discourse mr-[10px] text-[18px]"></i>
              <span class="font-medium">Phiếu ưu đãi</span>
            </div>
            <input
              v-model="InputChangeDiscount"
              class="input-discount w-full h-[40px] mt-[10px] pl-[15px] outline-none"
              placeholder="Mã ưu đãi"
              type="text"
            />
            <button
              @click="HandleSubmitCodeDiscount"
              class="btn-discount w-full mt-[20px] h-[40px] bg-[#F9F9F9] font-normal text-[#796866]"
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Loader class="load" />
  </div>
</template>

<script>
import Loader from "../../components/Loader.vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { mapMutations, mapState } from "vuex";
import { URL_BACKEND } from "@/variable_enviroment";
import axios from "axios";
export default {
  computed: {
    ...mapState(["ArrayTotalProduct", "TotalProduct", "CountProduct"]),
  },
  data() {
    return {
      InputChangeDiscount: "",
      CodeDiscount: ["DuongChiThang", "admin123"],
      value: ref(""),
      options: [
        {
          value: "35",
          label: "35",
        },
        {
          value: "36",
          label: "36",
        },
        {
          value: "37",
          label: "37",
        },
        {
          value: "38",
          label: "38",
        },
        {
          value: "39",
          label: "39",
        },
        {
          value: "40",
          label: "40",
        },
        {
          value: "41",
          label: "41",
        },
        {
          value: "42",
          label: "42",
        },
        {
          value: "43",
          label: "43",
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Loader,
  },
  methods: {
    ...mapState(["TotalProduct"]),
    ...mapMutations(["AddProduct", "RemoveProduct", "UpdateCart"]),
    HandleRiderect() {
      this.$router.push("/");
    },
    // HandleCallApiOrder(){
    //   const dataUser = JSON.parse(localStorage.getItem('userData'));
    //   console.log(dataUser);
    //   // return axios.post(`${URL_BACKEND}/api/product-orders`,{

    //   // })
    // },
    HandlePayment() {
      const user = JSON.parse(localStorage.getItem("userData"));
      if (user) {
        // call api save data
        console.log('thanh toán ok');
      } else {
        createToast("Bạn phải đăng nhập mới được thanh toán", {
          type: "danger",
        });
      }
    },
    HandleUpdateCart() {
      createToast("Cập nhật giỏ hàng thành công", {
        type: "success",
      });
    },
    HandleSubmitCodeDiscount() {
      var discount = 0;
      for (var i = 0; i < this.CodeDiscount.length; i++) {
        if (this.InputChangeDiscount == this.CodeDiscount[i]) {
          createToast(
            "Áp dụng mã thành công, bạn sẽ được giảm giá 70% tổng đơn hàng",
            {
              type: "success",
            }
          );
          discount = Math.round(this.TotalProduct * 0.7);
        } else {
          discount = this.TotalProduct;
        }
      }
      this.UpdateCart(discount);
    },
  },
  created() {},

  mounted() {
    var number = 1;
    this.countProduct = number;
    var min = document.querySelector(".min-cart");
    var plus = document.querySelector(".plus-cart");
    var input_number = document.querySelector(".btn-number-cart");
    var load = document.querySelector(".load");
    // min.addEventListener('click',function(){
    // number--;
    // });
    // plus.addEventListener('click', function(){
    //  number++;
    // })
    setTimeout(function () {
      load.style.display = "none";
    }, 1000);
  },
};
</script>

<style scoped>
@import "./Cart.css";
</style>
