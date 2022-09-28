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
      console.log(state.ArrayTotalProduct);
      return state.TotalProduct = state.ArrayTotalProduct.reduce((total,currentValue)=>{
        return total + currentValue.price
      },0)
    },
    RemoveProduct(state,value){
      state.ArrayTotalProduct.splice(value.index,1);
      state.CountProduct--;
      console.log(state.ArrayTotalProduct);
       state.TotalProduct = state.TotalProduct - value.product;
       return state.TotalProduct;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
