<template>
  <div>
    <Header class="header-profile" />
    <div class="container container-profile">
      <div class="row justify-content-center mb-[50px]">
        <div class="col-10">
          <div class="row justify-content-between">
            <div class="col-3">
              <div class="container-info-user">
                <div class="row justify-content-center">
                  <div class="col-8 py-4">
                    <div class="row justify-content-center">
                      <div class="container-image-user col-8">
                        <img
                          style="width: 100%; height: 100%; object-fit: cover"
                          :src="Avartar"
                        />
                      </div>
                    </div>
                    <span class="profile-name">Duong Chi Thang</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="container-info-content-user">
                <div class="row justify-content-between">
                  <span class="col-6 text-left head-content"
                    >Thông tin tài khoản</span
                  >
                  <div class="col-6">
                    <div class="row justify-content-end">
                      <v-btn class="col-3" color="warning"> Chi tiết </v-btn>
                      <v-btn class="col-4 ml-2" color="primary">
                        Đổi mật khẩu
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="row mt-[30px]">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-12">
                        <h1 class="title-user">Username</h1>
                        <v-text-field
                        :model-value="Username"
                          class="mt-3"
                          label="Username"
                          variant="outlined"
                        ></v-text-field>
                      </div>
                      <div class="col-12">
                        <h1 class="title-user">Password</h1>
                        <v-text-field
                          class="mt-3"
                          label="Password"
                          variant="outlined"
                        ></v-text-field>
                      </div>
                      <div class="col-12">
                        <h1 class="title-user">Email</h1>
                        <v-text-field
                          :model-value="Email"
                          class="mt-3"
                          label="Email"
                          variant="outlined"
                        ></v-text-field>
                      </div>
                      <div class="col-4 mt-[10px]">
                        <v-btn color="success"> Cập nhật </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import axios from 'axios';
import { URL_BACKEND } from "@/variable_enviroment";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
       Avartar : '',
       Username : '',
       Password : '',
       Email : ''
    };
  },
  methods: {
   async HandleUser(){
       const userData = JSON.parse(localStorage.getItem('userData'));
       const user = await this.HandleFindUser(userData.id);
       console.log(user);
       this.Avartar = user.data.avartar.url;
       this.Username = user.data.username;
       this.Email = user.data.email;
    },
    HandleFindUser(user_id){
      return axios.get(`${URL_BACKEND}/api/users/${user_id}?populate=*`);
    }
  },
  created() {
    this.HandleUser();
  },
  mounted() {
    var header_profile = document.querySelector(".header-profile").offsetHeight;
    var container_profile = document.querySelector(".container-profile");
    container_profile.style.marginTop = `${header_profile + 50}px`;
  },
  computed() {},
  updated() {},
};
</script>

<style scoped>
.container-info-user {
  background: #dcdcdc;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
}
.container-image-user {
  border-radius: 100%;
  height: 100px;
}
.profile-name {
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
}

.profile-list-option {
  width: 100%;
}
.profile-item-option {
  width: 100%;
}
.container-info-content-user {
  background: #dcdcdc;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  padding: 20px;
}
.head-content {
  font-size: 20px;
  font-weight: 500;
}
.title-user {
  font-size: 18px;
  font-weight: 500;
  text-align: left;
}
</style>