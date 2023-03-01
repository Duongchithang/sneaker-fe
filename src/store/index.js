import { createStore } from 'vuex'
import 'mosha-vue-toastify/dist/style.css';
import { createToast } from 'mosha-vue-toastify';
export default createStore({
  state: {
   
   ArrayTotalProduct : [],
  TotalProduct : 0,
  CountProduct : 0, 
  },
  getters: {

  },
  mutations: {
    AddProduct(state,product){
      createToast('Đã Thêm Sản Phẩm Vào Giỏ Hàng',{
        type : 'success'
      })
      state.ArrayTotalProduct.push(product);
      state.CountProduct++;
  
      
     state.TotalProduct = state.ArrayTotalProduct.reduce((total,currentValue)=>{
        return total + currentValue.product_price;
      },0);
    
    },
     
    RemoveProduct(state,value){
      console.log(value.index, value.product);
      state.CountProduct--;
      state.ArrayTotalProduct.splice(value.index,1);

       state.TotalProduct = state.TotalProduct - value.product.product_price;
       return state.TotalProduct;
    },
    UpdateCart(state, value){
       state.TotalProduct = value;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
