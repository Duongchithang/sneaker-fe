<template>
  <div class="container-register">
    <div class="around-register">
        
         <form @submit.prevent="CreateAccount" class="form-register" action="">
            <h1 to="/" class="register-account">Register account</h1>
            <div class="around-input-list">
                <div class="feild-input">
                    <label for="username">Username </label>
                    <input class="block w-full p-4 text-lg rounded-sm bg-white" v-model="CheckInputSuccess.Username" id="username" type="text" placeholder="Email">
                    <span class="CheckValidate">{{CheckInputError.Username}}</span>
                </div>
                <div class="feild-input">
                    <label for="password">Password</label>
                    <input class="block w-full p-4 text-lg rounded-sm bg-white" v-model="CheckInputSuccess.Password" id="password" type="password" placeholder="Password">
                    <span class="CheckValidate">{{CheckInputError.Password}}</span>
                </div>
                <div class="feild-input">
                    <label for="confirm-password">Confirm Password</label>
                    <input class="block w-full p-4 text-lg rounded-sm bg-white" v-model="CheckInputSuccess.ConfirmPassword" id="confirm-password" type="password" placeholder="Confirm password">
                    <span class="CheckValidate">{{CheckInputError.ConfirmPassword}}</span>
                </div>
            </div>
            <div class="around-option">
                <span @click="BackToLogin">Back to login</span>
            </div>
            <button class="Sign-in mt-[20px]">Create account</button>
         </form>
    </div>
  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
export default {
   data(){
    return{
     CheckInputSuccess:{
        Username : '',
        Password : '',
        ConfirmPassword : ''
     },
     CheckInputError:{
        Username : '',
        Password : '',
        ConfirmPassword : ''   
     }
    }
   },
   props:{
        DisplayLoginOrRegister : Object
    },
   methods:{
    BackToLogin(){
      this.DisplayLoginOrRegister.Register = false,
      this.DisplayLoginOrRegister.Login = true
    },
    //Props method handle
    Validate(){
        this.CheckInputError={
        Username : '',
        Password : '',
        ConfirmPassword : ''   
     }
     if(!this.CheckInputSuccess.Username){
        this.CheckInputError.Username = 'Username is required'
     }
     if(!this.CheckInputSuccess.Password){
        this.CheckInputError.Password= 'Password is required'
     }
     if(!this.CheckInputSuccess.ConfirmPassword){
        this.CheckInputError.ConfirmPassword= 'Confirm Password is required'
     }
     if(this.CheckInputSuccess.Password != this.CheckInputSuccess.ConfirmPassword){
        this.CheckInputError.ConfirmPassword = 'Incorrect password'
     }
     if(this.CheckInputError.Username == "" && this.CheckInputError.Password == "" && this.CheckInputError.ConfirmPassword == ""){
       this.ToastCheckRegisterSuccess();
     }
    },
    ToastCheckRegisterSuccess(){
      createToast("Bạn đã đăng kí thành công",{
         type : 'success'
      })
    }
    ,
    CreateAccount(){
      this.Validate();
    }
   }
}
</script>

<style scoped>
@import './Register.css'
</style>