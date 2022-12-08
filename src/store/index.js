import { createStore } from 'vuex'

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
      
      state.ArrayTotalProduct.push(product);
      state.CountProduct++;  
     state.TotalProduct = state.ArrayTotalProduct.reduce((total,currentValue)=>{
        return total + currentValue.product_price;
      },0);
      console.log(state.ArrayTotalProduct);
    },
     
    RemoveProduct(state,value){
      state.ArrayTotalProduct.splice(value.index,1);
      state.CountProduct--;
      console.log(state.ArrayTotalProduct);
       state.TotalProduct = state.TotalProduct - value.product.product_price;
       return state.TotalProduct;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
