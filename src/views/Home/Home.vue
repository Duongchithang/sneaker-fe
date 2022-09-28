<template>
  <div class="home relative">
    <Header class="home-header"/>
    <Slider class="home-slider"/>
    <Content/>
    <Footer/>
    <button class="btn-scroll" @click="scrollToTop"><i class="fa-solid fa-arrow-up"></i></button>
    <Loader class="load"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/Header.vue'
import Slider from '../../components/Slider.vue'
import Content from '../../components/Content.vue'
import Footer from '../../components/Footer.vue'
import Loader from '../../components/Loader.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Slider,
    Content,
    Footer,
    Loader
  },
  methods:{
 scrollToTop(e) {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'})
}
  },
  mounted(){
      var load = document.querySelector('.load')
      var btn_scroll = document.querySelector('.btn-scroll');
      var HomeHeader = document.querySelector('.home-header');
      var HomeSlider = document.querySelector('.home-slider');
      const MarginTopSlider = HomeHeader.clientHeight + 50;
      HomeSlider.style.marginTop = `${MarginTopSlider}px`;
      window.onscroll = function(){
        if(window.pageYOffset <= 500){
           btn_scroll.style.display = 'none'
        }
        else{
          btn_scroll.style.display = 'block'
        }
      }
     setTimeout(function(){
         load.style.display = 'none';
     },1000);
  }
}
</script>
<style scoped>
   .btn-scroll{
     color: white;
     width: 40px;
     height: 40px;
     border-radius: 10px;
     position: fixed;
     right: 20px;
     bottom: 20px;
     z-index: 100;
     background:#C30005;
     transition: all 0.1s linear;
   }
   .btn-scroll:hover{
    background: #d62f34;
   }
   .btn-scroll i{
     font-size: 18px;
     font-weight: 600;
   }
</style>
