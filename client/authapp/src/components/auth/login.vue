<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-6 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5 backu"
          
          @submit.prevent="loginUser"
        >
        <h1 style="color:white;">Logohuni</h1><br>
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email i përdoruesit"
            v-model="login.email"
            required
          />

          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Fjalëkalimi"
            v-model="login.password"
            required
          />

          <p>
            Nuk keni një adresë?<router-link to="/register"
             style="color:white;" >   Kliko këtu.</router-link
            >
          </p>

          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Hyr
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal({
    title: 'Sukses',
    text: 'Hyrje e rregullt.',
    icon: 'success',
    timer: 3000,
   showConfirmButton:true
})
.then(() => {
    this.$router.push({ path: '/home' })
     this.$router.go(0);
})    
        }
      } catch (err) {
        swal("KUJDES", "Keni gabime .", "error");
        console.log(err.response);
      }
    }
  }
};
</script>
<style scoped>
.backu {
  background-image: linear-gradient(blue,aliceblue);
  border-radius: 12px; 
  margin-top:40px;
  margin-bottom:70px;
  height:auto;
  padding-top:50px !important;
}
</style>
