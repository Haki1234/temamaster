<template>
<footer class="page-footer font-small footer-dark bg-success">

  <!-- Footer Links -->
  <div class="container">

    <!-- Grid row-->
    <div class="row text-center  d-flex justify-content-center pt-4 ">

      <!-- Grid column -->
      <template v-if="!show" >
      <div class="col-md-2 mb-3">
          <a href="/login">
          <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
          Hyr
          </button>
        </a>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
        <a href="/register">
          <button  class="btn btn-success text-uppercase  font-weight-bold" style="border-radius: 12px; margin-left: 15px;">
          Regjistrohu
          </button>
        </a>
      </div>
      </template>
      <!-- Grid column -->

      <template v-if="show" >
      <div class="col-md-2 mb-3">
          <a href="/home">
          <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
          Perdoruesi
          </button>
        </a>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
          <a href="/events">
          <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
          Eventet
          </button>
        </a>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 mb-3">
        <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
          <a class="colorlink" @click="logUserOut"> DIL </a>
        </button>
      </div>
      </template>
      <!-- Grid column -->

    </div>

  </div>

  <div class="footer-copyright text-center colorcop py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/" style="color:white;font-size: 1.25rem; "> E-DITA</a>
  </div>
  <!-- Copyright -->

</footer>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: 'Foot',
  data() {
    return {
      user: {},
      show: false
    }
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.go("/");
    },
    
  },
  mounted() {
    if (localStorage.getItem("jwt")){
      this.show=true
    }
  }

}

</script>
<style scoped>
.colorcop {
   background: #6cbf6c; 
}
.colorlink{
    color: white;
}
</style>