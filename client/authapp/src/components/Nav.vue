<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
       <a class="navbar-brand" href="/">E-DITA</a>

       <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
        </button>
           <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">

            <template v-if="!show" >
                  <li class="nav-item active">
                    <a class="nav-link" href="/login">
                     <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                    Hyr</button></a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/register">
                     <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                    Regjistrohu</button></a>
                  </li>
            </template>
            
            <template v-if="show" >
                      <li class="nav-item active">
                        <a class="nav-link" href="/home">
                         <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                           Perdoruesi</button></a>
                      </li>
                    
                  <li class="nav-item active">
                    <a class="nav-link" href="/events">
                     <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                       Eventet</button></a>
                  </li>
                  
                  <li class="nav-item active">
                    <a class="nav-link" href="/daily">
                     <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                       Detyrat</button></a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/rates">
                     <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                       Kursi</button></a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" @click="logUserOut">
                       <button  class="btn btn-success text-uppercase font-weight-bold" style="border-radius: 12px;">
                          DIL</button></a>
                  </li>
            </template>
                  
              </ul>

          </div>

      </div>
    </nav>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: 'Nav',
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