import axios from 'axios';
let ProductApi = {
    GetAllProductApi : function(url){
       return axios.get(url);
    }
}
export default ProductApi;