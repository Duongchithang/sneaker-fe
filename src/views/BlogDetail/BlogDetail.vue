<template>
   <div class="container-fuild">
      <Header class="header-blog"/>
      <div class="container container-blog">
          <h1 class="new-detail">TIN TỨC CHI TIẾT</h1>
          <div class="row justify-content-center">
            <div class="col-9 container-blog-around my-5">
              <div class="row mt-5 justify-content-center">
                <div class="col-10">
                  <h1 class="title-blog-detail text-left">{{ blog_detail.blog_name }}</h1>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-10 container-blog-image pt-4">
                  <img style="width: 100%; height: 500px; object-fit: cover;" :src="blog_detail.blog_image"/>
                </div>
              </div>
            <div class="row mt-3 justify-content-center mb-5">
              <div class="col-10">
                <p class="blog-detail-content text-left">{{ blog_detail.blog_content }}</p>
              </div>
            </div>
            </div>
          </div>
      </div>
      <Footer />
   </div>
</template>

<script>

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue'
import axios from 'axios';
import { URL_BACKEND } from '@/variable_enviroment';
export default {
  data(){
    return{
     blog_detail:{
      blog_id: '',
      blog_name : '',
      blog_content: '',
      blog_image: ''
     }
    }
  },
  components:{
    Header, 
    Footer
  },
  methods:{
     CallApiBlogDetail(){
      return axios.get(`${URL_BACKEND}/api/blogs/${this.$route.params.id}?populate=*`);
     },
     async HandleBlog(){
        const data = await this.CallApiBlogDetail();
        console.log(data);
        // this.blog_detail.blog_id = data.data.attributes.blog_id;
        this.blog_detail.blog_name = data.data.data.attributes.blog_name;
        this.blog_detail.blog_content = data.data.data.attributes.blog_content;
         this.blog_detail.blog_image = data.data.data.attributes.blog_image.data.attributes.url;
     }
  },
  created(){
     this.HandleBlog();
  },
  mounted(){
    var header_height = document.querySelector(".header-blog").offsetHeight;
    var container_blog = document.querySelector(".container-blog");
    container_blog.style.marginTop = `${header_height + 50}px`;
  }
}
</script>

<style scoped>
  .new-detail{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }
  .container-blog-around{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .title-blog-detail{
    font-size: 24px;
    font-weight: 600;
    
  }
</style>