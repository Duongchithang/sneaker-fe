<template>
      <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1521988670151-ebdd6339cba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10 ">
                <h1 class="text-5xl font-bold tracking-wide text-center">Keep it special</h1>
                <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </span>
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </span>
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </span>
            </div>
        </div>
        <Register :DisplayLoginOrRegister="DisplayLoginOrRegister" v-if="DisplayLoginOrRegister.Register"/>
        <div v-if="DisplayLoginOrRegister.Login" class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1521988670151-ebdd6339cba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <div class="around-icon flex justify-center items-center">
                    <img class="mr-[20px]" src="https://mona.solutions/logo.png" alt="">
                    <span class="text-[25px] font-medium">CHI THANG SNEAKER</span>
                </div>
                <div class="py-6 space-x-2">
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
                </div>
                <p class="text-gray-100">
                    Use email your account
                </p>
                <form  v-on:submit.prevent="Login" class="form-input sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <input v-model="CheckInput.InputUsername" type="text" name="text" id="username" placeholder="Username" class="block w-full p-4 text-lg rounded-sm bg-black">
                    </div>
                    <span class="error text-left">{{Error.InputUsername}}</span>
                    <div class="pb-2 pt-4">
                        <input v-model="CheckInput.InputPassword" class="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password">
                    </div>
                    <span class="error text-left">{{Error.InputPassword}}</span>
                    <div class="text-right text-gray-400 cursor-pointer hover:text-gray-100 mt-[20px] flex justify-between">
                        <span @click="RegisterAccount">Register account now !</span>
                        <span>Forgot your password?</span>
                    </div>
                   
                        <button class="Sign-in mt-[40px]">SIGN IN</button>
                  

                    <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                        <a href="#">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="#">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { identifier } from '@babel/types'
import axios from 'axios'
import Header from '../../components/Header.vue'
import Register from '../Register/Register.vue'
import ImageUser from '../../../public/user_image.png'
import { URL_BACKEND } from '@/variable_enviroment'
export default {
   components:{
    Header,
    Register
},
   data(){
    return{
      DisplayLoginOrRegister:{
        Register : false,
         Login : true,
      },
      CheckInput:{
        InputUsername:'',
        InputPassword : ''
      },
      Error:{
        InputUsername:'',
        InputPassword : ''
      }
    }
   },
   methods:{
    RegisterAccount(){
      this.DisplayLoginOrRegister.Register = true,
      this.DisplayLoginOrRegister.Login = false
    },
    //X??? l?? Dom
    Validate(){
        this.Error = {
            InputUsername:'',
            InputPassword : ''
        }
        if(!this.CheckInput.InputUsername){
            this.Error.InputUsername = 'Username is required'
        }
        if(!this.CheckInput.InputPassword){
            this.Error.InputPassword = 'Password is required'
        }
    },
    GetAllUsers(){
        const users = fetch(`${URL_BACKEND}/api/auth/local?populate=*`,{
            method : 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier : this.CheckInput.InputUsername,
                password : this.CheckInput.InputPassword
            })
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            return data;
        });
        return users;
    },
    async Login(e){
        this.Validate();
        if(this.Error.InputUsername == '' && this.Error.InputPassword == ''){
            let data = await this.GetAllUsers();
            const { jwt, user } = data;
            window.localStorage.setItem('jwt', jwt)
            window.localStorage.setItem('userData', JSON.stringify(user));
            if(data.user){
                alert('????ng nh???p th??nh c??ng');
                setTimeout(()=>{
                     this.$router.push({path : '/'});
                },1000)
            }
           if(!data.data){
            alert("T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c vui l??ng nh???p l???i ....");
           }
        }
     }
     // Check validate input
   },
   mounted(){
     
   }
}
</script>

<style scoped>
.form-input input{
    outline: none;
    border: none;
}
.success{
  color:green;
}
.error{
  display: block;
  color: red;
}
.Sign-in{
width: 130px;
font-weight: 500;
box-shadow: 0px 1px 3px 2px rgb(228, 54, 54);
height: 50px;
background: rgb(194, 16, 16);
}
</style>